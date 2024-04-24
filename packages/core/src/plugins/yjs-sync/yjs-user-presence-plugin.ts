import { Editor, Plugin } from "../../editor";
import * as awarenessProtocol from "y-protocols/awareness.js";

export class YjsUserPresencePlugin extends Plugin {
  editor: Editor = null!;
  state: "idle" | "syncing";
  yAwareness: awarenessProtocol.Awareness | null = null!;

  constructor() {
    super("dgmjs/yjs-user-presence");
    this.state = "idle";
  }

  activate(editor: Editor) {
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  start(yAwareness: awarenessProtocol.Awareness) {
    this.state = "syncing";
    this.yAwareness = yAwareness;
  }

  stop() {
    this.state = "idle";
  }
}
