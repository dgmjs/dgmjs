import {
  Editor,
  Plugin,
  utils,
  Disposable,
  TypedEvent,
  Shape,
  geometry,
} from "@dgmjs/core";
import * as awarenessProtocol from "y-protocols/awareness.js";

type Awareness = awarenessProtocol.Awareness;

export interface UserIdentity {
  name: string;
  color: string;
}

/**
 * User State
 */
export interface UserState extends UserIdentity {
  id: number;
  cursor: number[];
  selection: string[];
  pageId: string | null;
}

/**
 * Local User State
 */
class LocalUserState implements UserState {
  id: number;
  name: string;
  color: string;
  cursor: number[];
  area: number[][] | null;
  selection: string[];
  pageId: string | null;
  yAwareness: Awareness;

  /**
   * Constructor
   */
  constructor(
    yAwareness: Awareness,
    id: number,
    name: string = "unknown",
    color: string = "#000000",
    pageId: string | null = null
  ) {
    this.yAwareness = yAwareness;
    this.id = id;
    this.name = name;
    this.color = color;
    this.cursor = [0, 0];
    this.area = null;
    this.selection = [];
    this.pageId = pageId;
    this.setName(this.name);
    this.setColor(this.color);
    this.setCursorPosition(this.cursor);
    this.setArea(this.area);
    this.setSelection([]);
    this.setPageId(this.pageId);
  }

  /**
   * Set the cursor position
   */
  setCursorPosition(cursorPosition: number[]) {
    this.cursor = cursorPosition;
    this.yAwareness.setLocalStateField("cursor", this.cursor);
  }

  /**
   * Set the user name
   */
  setName(name: string) {
    this.name = name;
    this.yAwareness.setLocalStateField("name", this.name);
  }

  /**
   * Set the user color
   */
  setColor(color: string) {
    this.color = color;
    this.yAwareness.setLocalStateField("color", this.color);
  }

  /**
   * Set the area
   */
  setArea(area: number[][] | null) {
    this.area = area;
    this.yAwareness.setLocalStateField("area", this.area);
  }

  /**
   * Set the selection
   */
  setSelection(shapes: Shape[]) {
    this.selection = shapes.map((shape) => shape.id);
    this.yAwareness.setLocalStateField("selection", this.selection);
  }

  /**
   * Set the page id
   */
  setPageId(pageId: string | null) {
    this.pageId = pageId;
    this.yAwareness.setLocalStateField("pageId", this.pageId);
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
  area: number[][] | null;
  selection: string[];
  pageId: string | null;
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
    this.area = null;
    this.selection = [];
    this.pageId = null;
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
    this.area = state.area;
    this.selection = state.selection ?? [];
    this.cursor = state.cursor;
    this.pageId = state.pageId;
    if (Array.isArray(this.cursor)) {
      const position = utils.gcs2dcs(canvas, this.cursor);
      const left = position[0] - 5;
      const top = position[1] - 5;
      if (this.cursorDOM) {
        this.cursorDOM.style.left = `${left}px`;
        this.cursorDOM.style.top = `${top}px`;
        this.cursorDOM.style.color = state.color;
      }
      if (this.nameDOM) {
        this.nameDOM.style.left = `${left + 20}px`;
        this.nameDOM.style.top = `${top + 20}px`;
        this.nameDOM.innerText = this.name;
        this.nameDOM.style.backgroundColor = state.color;
      }
    }
    // show cursor only on the same page
    const currentPageId = this.editor.getCurrentPage()?.id ?? null;
    if (currentPageId && currentPageId === state.pageId) {
      this.showCursor();
    } else {
      this.hideCursor();
    }
    this.editor.repaint();
  }

  /**
   * Show the cursor
   */
  showCursor() {
    if (this.cursorDOM) this.cursorDOM.style.display = "block";
    if (this.nameDOM) this.nameDOM.style.display = "block";
  }

  /**
   * Hide the cursor
   */
  hideCursor() {
    if (this.cursorDOM) this.cursorDOM.style.display = "none";
    if (this.nameDOM) this.nameDOM.style.display = "none";
  }

  /**
   * Destroy the user state
   */
  destroy() {
    this.id = -1;
    this.name = "unknown";
    this.color = "#000000";
    this.cursor = [0, 0];
    this.selection = [];
    this.pageId = null;
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
  onUserIdentityUpdate: TypedEvent<UserState[]>;

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
    this.onUserIdentityUpdate = new TypedEvent();
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
  start(yAwareness: awarenessProtocol.Awareness, userIdentity: UserIdentity) {
    this.state = "syncing";
    this.yAwareness = yAwareness;
    this.watch();
    // setup local user state
    this.localUserState = new LocalUserState(
      this.yAwareness,
      this.yAwareness.clientID,
      userIdentity.name,
      userIdentity.color,
      this.editor.getCurrentPage()?.id ?? null
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

    this.disposables.push(
      this.editor.onCurrentPageChange.addListener((page) => {
        this.localUserState?.setPageId(page?.id ?? null);
        this.remoteUserStates.forEach((remoteUserState) => {
          remoteUserState.update(remoteUserState);
        });
      })
    );

    this.disposables.push(
      this.editor.selection.onChange.addListener((selection) => {
        this.localUserState?.setSelection(selection);
      })
    );

    this.disposables.push(
      this.editor.onDragStart.addListener((event) => {
        // if selecting area
        if (event.controller === null) {
          const area = [
            geometry.copy(event.dragPoint),
            geometry.copy(event.dragPoint),
          ];
          this.localUserState?.setArea(area);
        }
      })
    );

    this.disposables.push(
      this.editor.onDrag.addListener((event) => {
        // if selecting area
        if (event.controller === null) {
          const p = this.localUserState?.area![0] ?? [0, 0];
          const area = [p, geometry.copy(event.dragPoint)];
          this.localUserState?.setArea(area);
        }
      })
    );

    this.disposables.push(
      this.editor.onDragEnd.addListener((event) => {
        // if selecting area
        if (event.controller === null) {
          this.localUserState?.setArea(null);
        }
      })
    );

    this.disposables.push(
      this.editor.onRepaint.addListener(() => {
        const currentPageId = this.editor.getCurrentPage()?.id ?? null;
        const canvas = this.editor.canvas;
        canvas.storeState();
        canvas.strokeWidth = canvas.px * 3;
        canvas.strokePattern = [];
        canvas.roughness = 0;
        canvas.alpha = 0.5;
        this.remoteUserStates.forEach((remoteUserState) => {
          if (remoteUserState.pageId === currentPageId) {
            canvas.strokeColor = remoteUserState.color;
            // draw remote user's selection
            if (remoteUserState.selection.length > 0) {
              const shapes = remoteUserState.selection
                .map((shapeId) => this.editor.store.getById(shapeId))
                .filter((shape) => shape instanceof Shape) as Shape[];
              const shapeOutlineCCSs = shapes.map((shape) => {
                return shape
                  .getOutline()
                  .map((p) => utils.lcs2ccs(canvas, shape, p));
              });
              shapeOutlineCCSs.forEach((outlineCCS) => {
                canvas.polyline(outlineCCS);
              });
              if (shapes.length > 1) {
                const boundingRect = shapeOutlineCCSs
                  .map((ccs) => geometry.boundingRect(ccs))
                  .reduce(geometry.unionRect);
                canvas.strokeRect(
                  boundingRect[0][0],
                  boundingRect[0][1],
                  boundingRect[1][0],
                  boundingRect[1][1]
                );
              }
            }
            // draw remote user's dragging area
            if (remoteUserState.area) {
              const areaCCS = remoteUserState.area.map((p) =>
                utils.gcs2ccs(canvas, p)
              );
              canvas.strokeRect(
                areaCCS[0][0],
                areaCCS[0][1],
                areaCCS[1][0],
                areaCCS[1][1]
              );
            }
          }
        });
        canvas.restoreState();
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
      if (changes.updated.length > 0) {
        const users: RemoteUserState[] = [];
        changes.updated.forEach((updatedId: number) => {
          const state = this.yAwareness.getStates().get(updatedId);
          const remoteUserState = this.remoteUserStates.get(updatedId);
          if (state && remoteUserState) {
            if (
              state.name !== remoteUserState.name ||
              state.color !== remoteUserState.color
            ) {
              users.push(remoteUserState);
            }
            remoteUserState.update(state);
          }
        });
        if (users.length > 0) this.onUserIdentityUpdate.emit(users);
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
