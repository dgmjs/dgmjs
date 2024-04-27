import { Editor, Plugin, utils, Disposable, TypedEvent } from "@dgmjs/core";
import * as awarenessProtocol from "y-protocols/awareness.js";

// TODO: Separate this plugin into a separate package
// TODO: show user's selection?

const colors = [
  "#E54D2E",
  "#E54666",
  "#E54666",
  "#8E4EC6",
  "#6E56CF",
  "#3E63DD",
  "#0090FF",
  "#00A2C7",
  "#12A594",
  "#30A46C",
  "#46A758",
  "#A18072",
  "#A18072",
  "#F76B15",
  "#BDEE63",
  "#86EAD4",
  "#7CE2FE",
];

type Awareness = awarenessProtocol.Awareness;

/**
 * User State
 */
export interface UserState {
  id: number;
  name: string;
  color: string;
  cursor: number[];
}

/**
 * Local User State
 */
class LocalUserState implements UserState {
  id: number;
  name: string;
  color: string;
  cursor: number[];
  yAwareness: Awareness;

  /**
   * Constructor
   */
  constructor(
    yAwareness: Awareness,
    id: number,
    name: string = "unknown",
    color: string = "#000000"
  ) {
    this.yAwareness = yAwareness;
    this.id = id;
    this.name = name;
    this.color = color;
    this.cursor = [0, 0];
    this.setName(name);
    this.setColor(color);
  }

  /**
   * Set the cursor position
   */
  setCursorPosition(cursorPosition: number[]) {
    this.cursor = cursorPosition;
    this.yAwareness.setLocalStateField("cursor", cursorPosition);
  }

  /**
   * Set the user name
   */
  setName(name: string) {
    this.yAwareness.setLocalStateField("name", name);
  }

  /**
   * Set the user color
   */
  setColor(color: string) {
    this.yAwareness.setLocalStateField("color", color);
  }
}

/**
 * Remote User State
 */
class RemoteUserState implements UserState {
  id: number;
  name: string;
  color: string;
  cursor: number[];
  private editor: Editor;
  private cursorDOM: HTMLElement | null = null;
  private nameDOM: HTMLElement | null = null;

  /**
   * Constructor
   */
  constructor(editor: Editor, id: number, state: any) {
    this.editor = editor;
    this.id = id;
    this.name = "unknown";
    this.color = "#000000";
    this.cursor = [0, 0];
    // setup cursor
    this.cursorDOM = document.createElement("div");
    this.cursorDOM.className = "yjs-awareness user-cursor";
    this.cursorDOM.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>`;
    this.cursorDOM.style.position = "absolute";
    this.cursorDOM.style.color = this.color;
    this.cursorDOM.style.zIndex = "1000";
    this.editor.canvasElement.parentElement?.appendChild(this.cursorDOM);
    // setup name
    this.nameDOM = document.createElement("div");
    this.nameDOM.className = "yjs-awareness user-name";
    this.nameDOM.style.position = "absolute";
    this.nameDOM.style.backgroundColor = this.color;
    this.nameDOM.style.padding = "2px 6px";
    this.nameDOM.style.borderRadius = "3px";
    this.nameDOM.style.border = "1px solid white";
    this.nameDOM.style.fontSize = "11px";
    this.nameDOM.style.whiteSpace = "nowrap";
    this.nameDOM.style.color = "white";
    this.nameDOM.style.zIndex = "1000";
    this.nameDOM.innerText = this.name;
    this.editor.canvasElement.parentElement?.appendChild(this.nameDOM);
    // update state
    this.update(state);
  }

  /**
   * Update the user state
   */
  update(state: any) {
    const canvas = this.editor.canvas;
    this.name = state.name;
    this.color = state.color;
    this.cursor = state.cursor;
    if (Array.isArray(this.cursor)) {
      const position = utils.gcs2dcs(canvas, this.cursor);
      if (this.cursorDOM) {
        this.cursorDOM.style.left = `${position[0]}px`;
        this.cursorDOM.style.top = `${position[1]}px`;
        this.cursorDOM.style.color = state.color;
      }
      if (this.nameDOM) {
        this.nameDOM.style.left = `${position[0] + 20}px`;
        this.nameDOM.style.top = `${position[1] + 20}px`;
        this.nameDOM.innerText = this.name;
        this.nameDOM.style.backgroundColor = state.color;
      }
    }
  }

  /**
   * Destroy the user state
   */
  destroy() {
    this.id = -1;
    this.name = "unknown";
    this.color = "#000000";
    this.cursorDOM?.remove();
    this.nameDOM?.remove();
  }
}

/**
 * Yjs User Presence Plugin
 */
export class YjsUserPresencePlugin extends Plugin {
  static ID = "dgmjs/yjs-user-presence";

  private editor: Editor = null!;
  private yAwareness: Awareness = null!;
  state: "idle" | "syncing";
  localUserState: LocalUserState | null;
  remoteUserStates: Map<number, RemoteUserState>;
  disposables: Disposable[] = [];
  onUserEnter: TypedEvent<UserState[]>;
  onUserLeave: TypedEvent<UserState[]>;
  onUserUpdate: TypedEvent<UserState[]>;

  /**
   * Constructor
   */
  constructor() {
    super(YjsUserPresencePlugin.ID);
    this.state = "idle";
    this.localUserState = null;
    this.remoteUserStates = new Map();
    this.onUserEnter = new TypedEvent();
    this.onUserLeave = new TypedEvent();
    this.onUserUpdate = new TypedEvent();
  }

  /**
   * Activate the plugin
   */
  activate(editor: Editor) {
    this.editor = editor;
  }

  /**
   * Deactivate the plugin
   */
  deactivate(editor: Editor) {}

  /**
   * Start the user presence synchronization
   */
  start(yAwareness: awarenessProtocol.Awareness) {
    this.state = "syncing";
    this.yAwareness = yAwareness;
    this.watch();
    // setup local user state
    this.localUserState = new LocalUserState(
      this.yAwareness,
      this.yAwareness.clientID,
      "user-" + this.yAwareness.clientID,
      colors[Math.round(Math.random() * colors.length - 1)]
    );

    // this.logChanges();
  }

  /**
   * Stop the user presence synchronization
   */
  stop() {
    this.state = "idle";
  }

  /**
   * Get the local user state
   */
  getLocalUserState() {
    return this.localUserState;
  }

  /**
   * Get the remote user states
   */
  getRemoteUserStates() {
    return [...this.remoteUserStates.values()];
  }

  /**
   * Watch for changes on the user presence
   */
  watch() {
    this.disposables.push(
      this.editor.onPointerMove.addListener((event) => {
        const ccs = [event.x, event.y];
        const gcs = this.editor.canvas.globalCoordTransformRev(ccs);
        this.localUserState?.setCursorPosition(gcs);
      })
    );

    const awarenessChangeListener = (changes: any) => {
      if (changes.added.length > 0) {
        const users: RemoteUserState[] = [];
        changes.added.forEach((addedId: number) => {
          const state = this.yAwareness.getStates().get(addedId);
          if (state) {
            const remoteUserState = new RemoteUserState(
              this.editor,
              addedId,
              state
            );
            this.remoteUserStates.set(addedId, remoteUserState);
            users.push(remoteUserState);
          }
        });
        if (users.length > 0) this.onUserEnter.emit(users);
      }
      if (changes.updated.length > 0) {
        const users: RemoteUserState[] = [];
        changes.updated.forEach((updatedId: number) => {
          const state = this.yAwareness.getStates().get(updatedId);
          const remoteUserState = this.remoteUserStates.get(updatedId);
          if (state && remoteUserState) {
            remoteUserState.update(state);
            users.push(remoteUserState);
          }
        });
        if (users.length > 0) this.onUserUpdate.emit(users);
      }
      if (changes.removed.length > 0) {
        const users: RemoteUserState[] = [];
        changes.removed.forEach((removedId: number) => {
          const remoteUserState = this.remoteUserStates.get(removedId);
          if (remoteUserState) {
            remoteUserState.destroy();
            this.remoteUserStates.delete(removedId);
            users.push(remoteUserState);
          }
        });
        if (users.length > 0) this.onUserLeave.emit(users);
      }
    };
    if (this.yAwareness) {
      this.yAwareness.on("change", awarenessChangeListener);
      this.disposables.push({
        dispose: () => {
          if (this.yAwareness)
            this.yAwareness.off("change", awarenessChangeListener);
        },
      });
    }
  }

  /**
   * Unwatch for changes
   */
  unwatch() {
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
  }

  /**
   * log for the changes
   */
  logChanges() {
    this.yAwareness.on("change", (changes: any) => {
      console.log("awareness change", [
        ...this.yAwareness.getStates().values(),
      ]);
    });
  }
}
