import { Store } from "../core/store";
import { Stack } from "../std/collections";
import { TypedEvent } from "../std/typed-event";
import { Transaction } from "./transaction";

// Maximum size of undo/redo stack
const MAX_STACK_SIZE = 1000;

export class Action {
  name: string;
  transactions: Transaction[];

  constructor(name: string) {
    this.name = name;
    this.transactions = [];
  }

  push(tx: Transaction) {
    this.transactions.push(tx);
  }

  apply(store: Store) {
    for (let i = 0; i < this.transactions.length; i++) {
      const tx = this.transactions[i];
      tx.apply(store);
    }
  }

  unapply(store: Store) {
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      const tx = this.transactions[i];
      tx.unapply(store);
    }
  }
}

/**
 * History
 */
export class History {
  /**
   * Shape store
   */
  store: Store;

  /**
   * Working action
   */
  action: Action | null;

  /**
   * Undo history.
   */
  undoHistory: Stack<Action>;

  /**
   * Redo history.
   */
  redoHistory: Stack<Action>;

  /**
   * On undo event
   */
  onUndo: TypedEvent<Action> = new TypedEvent();

  /**
   * On redo event
   */
  onRedo: TypedEvent<Action> = new TypedEvent();

  /**
   * constructor
   */
  constructor(store: Store) {
    this.store = store;
    this.action = null;
    this.undoHistory = new Stack(MAX_STACK_SIZE);
    this.redoHistory = new Stack(MAX_STACK_SIZE);
    this.store.onTransaction.addListener((tx) => {
      if (this.action) {
        this.action.push(tx);
      } else {
        this.startAction("unknown");
        this.action!.push(tx);
        this.endAction();
      }
    });
  }

  /**
   * Start an action
   */
  startAction(name: string) {
    if (this.action && this.action.transactions.length > 0) {
      this.endAction();
    }
    this.action = new Action(name);
  }

  /**
   * End the action
   */
  endAction() {
    if (!this.action) throw new Error("No action started");
    if (this.action.transactions.length > 0) {
      this.undoHistory.push(this.action);
      this.redoHistory.clear();
    }
    this.action = null;
  }

  /**
   * Cancel the action
   */
  cancelAction() {
    if (this.action) {
      this.action.unapply(this.store);
      this.action = null;
    }
  }

  /**
   * Whether undo is available
   */
  canUndo() {
    return this.undoHistory.size() > 0;
  }

  /**
   * Whether redo is available
   */
  canRedo() {
    return this.redoHistory.size() > 0;
  }

  /**
   * Undo
   */
  undo() {
    if (this.undoHistory.size() > 0) {
      const action = this.undoHistory.pop();
      if (action) {
        action.unapply(this.store);
        this.onUndo.emit(action);
        this.redoHistory.push(action);
      }
    }
  }

  /**
   * Redo
   */
  redo() {
    if (this.redoHistory.size() > 0) {
      const action = this.redoHistory.pop();
      if (action) {
        action.apply(this.store);
        this.onRedo.emit(action);
        this.undoHistory.push(action);
      }
    }
  }
}
