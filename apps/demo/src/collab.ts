import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
import { Editor } from "@dgmjs/core";
import {
  YjsDocSyncPlugin,
  YjsUserPresencePlugin,
} from "@dgmjs/dgmjs-plugin-yjs";
import { WebrtcProvider } from "./y-webrtc-patch/y-webrtc";

export class Collab {
  editor: Editor = null!;
  docSyncPlugin: YjsDocSyncPlugin = null!;
  userPresencePlugin: YjsUserPresencePlugin = null!;
  yDoc: Y.Doc | null;
  yProvider: WebrtcProvider | null;

  constructor() {
    this.yDoc = null;
    this.yProvider = null;
  }

  start(editor: Editor, roomId: string) {
    this.editor = editor;
    this.docSyncPlugin = this.editor.getPlugin(
      "dgmjs/yjs-doc-sync"
    ) as YjsDocSyncPlugin;
    this.userPresencePlugin = this.editor.getPlugin(
      "dgmjs/yjs-user-presence"
    ) as YjsUserPresencePlugin;
    this.yDoc = new Y.Doc();
    this.yProvider = new WebrtcProvider(roomId, this.yDoc, {
      // signaling: ["ws://localhost:4444"],
      signaling: ["wss://webrtc.dgm.sh"],
      password: "1234",
    });
    this.docSyncPlugin.start(this.yDoc);
    this.userPresencePlugin.start(this.yProvider.awareness);
    this.userPresencePlugin.onUserEnter.addListener((users) => {
      // console.log("user enter", users);
    });
    this.userPresencePlugin.onUserLeave.addListener((users) => {
      // console.log("user leave", users);
    });
    this.userPresencePlugin.onUserIdentityUpdate.addListener((users) => {
      // console.log("user update", users);
    });
  }

  stop() {
    this.docSyncPlugin.stop();
    this.userPresencePlugin.stop();
    this.yDoc?.destroy();
    this.yDoc = null;
    this.yProvider?.disconnect();
    this.yProvider = null;
  }

  flush() {
    this.docSyncPlugin.flush();
  }
}

export const collab = new Collab();
