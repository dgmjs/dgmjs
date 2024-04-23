import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { Editor, YjsDocSyncPlugin } from "@dgmjs/core";

export class Collab {
  editor: Editor = null!;
  plugin: YjsDocSyncPlugin = null!;
  yDoc: Y.Doc | null;
  yProvider: WebrtcProvider | null;

  constructor() {
    this.yDoc = null;
    this.yProvider = null;
  }

  start(editor: Editor, roomId: string) {
    this.editor = editor;
    this.plugin = this.editor.getPlugin(
      "dgmjs/yjs-doc-sync"
    ) as YjsDocSyncPlugin;
    this.yDoc = new Y.Doc();
    this.yProvider = new WebrtcProvider(roomId, this.yDoc, {
      password: "1234",
    });
    this.plugin.start(this.yDoc);
  }

  stop() {
    this.plugin.stop();
    this.yDoc?.destroy();
    this.yDoc = null;
    this.yProvider?.disconnect();
    this.yProvider = null;
  }

  flush() {
    this.plugin.flush();
  }
}

export const collab = new Collab();
