import { Editor, Plugin } from "../../editor";
import * as awarenessProtocol from "y-protocols/awareness.js";
import { gcs2dcs } from "../../graphics/utils";
import { Disposable } from "../../std/typed-event";

// TODO: set random color (use color rotation in given a set of colors)
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

class RemoteUserState {
  editor: Editor;
  id: number;
  name: string;
  color: string;
  cursorDOM: HTMLElement | null = null;
  nameDOM: HTMLElement | null = null;

  constructor(editor: Editor, id: number, state: any) {
    this.editor = editor;
    this.id = id;
    this.name = "unknown";
    this.color = "#000000";

    this.cursorDOM = document.createElement("div");
    this.cursorDOM.className = "yjs-awareness user-cursor";
    this.cursorDOM.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>`;
    this.cursorDOM.style.position = "absolute";
    this.cursorDOM.style.color = this.color;
    this.cursorDOM.style.zIndex = "1000";

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

    this.editor.canvasElement.parentElement?.appendChild(this.cursorDOM);
    this.editor.canvasElement.parentElement?.appendChild(this.nameDOM);

    this.update(state);
  }

  update(state: any) {
    const canvas = this.editor.canvas;
    this.name = state.name;
    this.color = state.color;
    if (Array.isArray(state.cursor)) {
      const position = gcs2dcs(canvas, state.cursor);
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

  destroy() {
    this.cursorDOM?.remove();
    this.nameDOM?.remove();
  }
}

export class YjsUserPresencePlugin extends Plugin {
  editor: Editor = null!;
  state: "idle" | "syncing";
  yAwareness: awarenessProtocol.Awareness = null!;
  remoteUserStates: Map<number, RemoteUserState>;
  disposables: Disposable[] = [];

  constructor() {
    super("dgmjs/yjs-user-presence");
    this.state = "idle";
    this.remoteUserStates = new Map();
  }

  activate(editor: Editor) {
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  start(yAwareness: awarenessProtocol.Awareness) {
    this.state = "syncing";
    this.yAwareness = yAwareness;

    // this.setLocalUserName("user-" + this.yAwareness.clientID);
    this.setLocalUserName("Minkyu Lee");
    this.setLocalUserColor(
      colors[Math.round(Math.random() * colors.length - 1)]
    );

    this.watch();
    this.logChanges();
  }

  stop() {
    this.state = "idle";
  }

  setLocalUserCursorPosition(cursorPosition: number[]) {
    this.yAwareness.setLocalStateField("cursor", cursorPosition);
  }

  setLocalUserColor(color: string) {
    this.yAwareness.setLocalStateField("color", color);
  }

  setLocalUserName(name: string) {
    this.yAwareness.setLocalStateField("name", name);
  }

  getRemoteUserState(id: number): RemoteUserState | undefined {
    return this.remoteUserStates.get(id);
  }

  addRemoteUserState(remoteUserState: RemoteUserState) {
    if (this.getRemoteUserState(remoteUserState.id)) {
      return;
    }
    this.remoteUserStates.set(remoteUserState.id, remoteUserState);
  }

  watch() {
    this.disposables.push(
      this.editor.onPointerMove.addListener((event) => {
        const ccs = [event.x, event.y];
        const gcs = this.editor.canvas.globalCoordTransformRev(ccs);
        // console.log("gcs", gcs);
        this.setLocalUserCursorPosition(gcs);
      })
    );

    const awarenessChangeListener = (changes: any) => {
      if (changes.added.length > 0) {
        changes.added.forEach((addedId: number) => {
          const state = this.yAwareness.getStates().get(addedId);
          if (state) {
            const remoteUserState = new RemoteUserState(
              this.editor,
              addedId,
              state
            );
            this.remoteUserStates.set(addedId, remoteUserState);
          }
        });
      }
      if (changes.updated.length > 0) {
        changes.updated.forEach((updatedId: number) => {
          const state = this.yAwareness.getStates().get(updatedId);
          const remoteUserState = this.remoteUserStates.get(updatedId);
          if (state && remoteUserState) {
            remoteUserState.update(state);
          }
        });
      }
      if (changes.removed.length > 0) {
        changes.removed.forEach((removedId: number) => {
          const remoteUserState = this.remoteUserStates.get(removedId);
          remoteUserState?.destroy();
          this.remoteUserStates.delete(removedId);
        });
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

  unwatch() {
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
  }

  logChanges() {
    this.yAwareness.on("change", (changes: any) => {
      console.log("awareness change", this.yAwareness.getStates().values());
    });
  }
}
