import { Store } from "./store";
import { Stack } from "../std/collections";
import { TypedEvent } from "../std/typed-event";
import { Transaction } from "./transaction";

// Maximum size of undo/redo stack
const MAX_STACK_SIZE = 1000;

/**
 * Action
 */
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

  apply(transform: Transform) {
    for (let i = 0; i < this.transactions.length; i++) {
      const tx = this.transactions[i];
      transform.applyTransaction(tx);
    }
  }

  unapply(transform: Transform) {
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      const tx = this.transactions[i];
      transform.unapplyTransaction(tx);
    }
  }
}

/**
 * Transform
 */
export class Transform {
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
   * Event for transaction apply
   */
  onTransactionApply: TypedEvent<Transaction>;

  /**
   * Event for transaction unapply
   */
  onTransactionUnapply: TypedEvent<Transaction>;

  /**
   * Event for action apply
   */
  onActionApply: TypedEvent<Action>;

  /**
   * Event for action unapply
   */
  onActionUnapply: TypedEvent<Action>;

  /**
   * constructor
   */
  constructor(store: Store) {
    this.store = store;
    this.action = null;
    this.undoHistory = new Stack(MAX_STACK_SIZE);
    this.redoHistory = new Stack(MAX_STACK_SIZE);
    this.onTransactionApply = new TypedEvent();
    this.onTransactionUnapply = new TypedEvent();
    this.onActionApply = new TypedEvent();
    this.onActionUnapply = new TypedEvent();
  }

  /**
   * Apply transaction
   */
  applyTransaction(tx: Transaction) {
    if (tx.mutations.length === 0) return;
    for (let i = 0; i < tx.mutations.length; i++) {
      const mut = tx.mutations[i];
      mut.apply(this.store);
    }
    this.onTransactionApply.emit(tx);
  }

  /**
   * Unapply transaction
   */
  unapplyTransaction(tx: Transaction) {
    if (tx.mutations.length === 0) return;
    for (let i = tx.mutations.length - 1; i >= 0; i--) {
      const mut = tx.mutations[i];
      mut.unapply(this.store);
    }
    this.onTransactionUnapply.emit(tx);
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
   * Execute function as a transaction
   */
  transact(fn: (tx: Transaction) => void) {
    const tx = new Transaction(this.store);
    fn(tx);
    if (tx.mutations.length > 0) {
      this.applyTransaction(tx);
      if (this.action) {
        this.action.push(tx);
      } else {
        this.startAction("unknown");
        this.action!.push(tx);
        this.endAction();
      }
    }
  }

  /**
   * End the action
   */
  endAction() {
    if (!this.action) throw new Error("No action started");
    if (this.action.transactions.length > 0) {
      this.onActionApply.emit(this.action);
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
      this.action.unapply(this);
      this.onActionUnapply.emit(this.action);
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
        action.unapply(this);
        this.onActionUnapply.emit(action);
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
        action.apply(this);
        this.onActionApply.emit(action);
        this.undoHistory.push(action);
      }
    }
  }
}
