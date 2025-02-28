import keycode from "keycode";
import { Editor } from "./editor";
export type KeyMap = Record<string, (editor: Editor) => void>;

export class KeymapManager {
  editor: Editor;
  keymap: KeyMap;

  constructor(editor: Editor) {
    this.editor = editor;
    this.keymap = {};
  }

  /**
   * Add keymaps
   */
  add(keys: KeyMap) {
    Object.keys(keys).forEach((key) => {
      if (key) {
        const normalizedKey = this.normalizeKeyDescriptor(key);
        this.keymap[normalizedKey] = keys[key];
      }
    });
  }

  /**
   * Get current keymap
   */
  getKeymap() {
    return this.keymap;
  }

  formatKeyDescriptor(descriptor: string) {
    descriptor = descriptor.replace("--", "-minus"); // to keep minus key('-')
    let terms = descriptor.split("-");
    if (this.editor.platform === "darwin") {
      terms = terms.map((key) => {
        switch (key) {
          case "mod":
            return "\u2318"; // Cmd > command symbol
          case "ctrl":
            return "\u2303"; // Ctrl > control symbol
          case "cmd":
            return "\u2318"; // Cmd > command symbol
          case "shift":
            return "\u21E7"; // Shift > shift symbol
          case "alt":
            return "\u2325"; // Alt > option symbol
          case "space":
            return "Space"; // Space
          case "escape":
            return "Escape"; // Escape
          case "minus":
            return "-"; // Minus
          case "enter":
            return "Enter"; // Enter
          case "backspace":
            return "⌫"; // Backspace > backspace symbol
          case "delete":
            return "⌫"; // Delete > backspace symbol (Backspace acts like delete in macOS)
          case "up":
            return "↑"; // Up > up arrow
          case "down":
            return "↓"; // Down >  down arrow
          case "left":
            return "←"; // Left >  left arrow
          case "right":
            return "→"; // Right >  right arrow
          default:
            if (key.length === 1) {
              return key.toUpperCase();
            }
            return key;
        }
      });
      return terms.join("");
      // eslint-disable-next-line no-else-return
    } else {
      terms = terms.map((key) => {
        switch (key) {
          case "mod":
            return "Ctrl"; // Ctrl
          case "ctrl":
            return "Ctrl"; // Ctrl
          case "shift":
            return "Shift"; // Shift
          case "alt":
            return "Alt"; // Alt
          case "space":
            return "Space"; // Space
          case "escape":
            return "Escape"; // Escape
          case "enter":
            return "Enter"; // Enter
          case "backspace":
            return "Backspace"; // Backspace
          case "delete":
            return "Delete"; // Delete
          case "up":
            return "↑"; // Up > up arrow
          case "down":
            return "↓"; // Down >  down arrow
          case "left":
            return "←"; // Left >  left arrow
          case "right":
            return "→"; // Right >  right arrow
          default:
            if (key.length === 1) {
              return key.toUpperCase();
            }
            return key;
        }
      });
      return terms.join("+");
    }
  }

  normalizeKeyDescriptor(descriptor: string) {
    const keyDescriptor = descriptor.toLowerCase().split("-");
    let hasCmd: boolean = false;
    let hasCtrl: boolean = false;
    let hasAlt: boolean = false;
    let hasShift: boolean = false;
    let key;

    if (keyDescriptor.includes("mod")) {
      if (this.editor.platform === "darwin") {
        hasCmd = true;
      } else {
        hasCtrl = true;
      }
      keyDescriptor.splice(keyDescriptor.indexOf("mod"), 1);
    }
    if (keyDescriptor.includes("cmd")) {
      hasCmd = true;
      keyDescriptor.splice(keyDescriptor.indexOf("cmd"), 1);
    }
    if (keyDescriptor.includes("ctrl")) {
      hasCtrl = true;
      keyDescriptor.splice(keyDescriptor.indexOf("ctrl"), 1);
    }
    if (keyDescriptor.includes("alt")) {
      hasAlt = true;
      keyDescriptor.splice(keyDescriptor.indexOf("alt"), 1);
    }
    if (keyDescriptor.includes("shift")) {
      hasShift = true;
      keyDescriptor.splice(keyDescriptor.indexOf("shift"), 1);
    }
    // eslint-disable-next-line prefer-destructuring
    key = keyDescriptor[0];
    if (key === "delete" && this.editor.platform === "darwin") {
      key = "backspace";
    }
    return this.buildKeyDescriptor(hasCmd, hasCtrl, hasAlt, hasShift, key);
  }

  buildKeyDescriptor(
    hasCmd: boolean,
    hasCtrl: boolean,
    hasAlt: boolean,
    hasShift: boolean,
    key: string
  ) {
    if (!key) {
      console.log("KeymapManager buildKeyDescriptor() - No key provided!");
      return "";
    }
    const keyDescriptor = [];
    if (hasCmd) {
      keyDescriptor.push("cmd");
    }
    if (hasCtrl) {
      keyDescriptor.push("ctrl");
    }
    if (hasAlt) {
      keyDescriptor.push("alt");
    }
    if (hasShift) {
      keyDescriptor.push("shift");
    }
    if (key === "plus") {
      keyDescriptor.push("+");
    } else if (key === "minus") {
      keyDescriptor.push("-");
    } else {
      keyDescriptor.push(key);
    }
    return keyDescriptor.join("-");
  }

  mapKeycodeToKey(keycodeNumber: number, key: string) {
    // If _keycode represents one of the digit keys (0-9), then return the corresponding digit
    // by subtracting keycode('0') from _keycode. ie. [48-57] --> [0-9]
    if (keycodeNumber >= keycode("0") && keycodeNumber <= keycode("9")) {
      return String(keycodeNumber - keycode("0"));
    }
    // Do the same with the numpad numbers
    // by subtracting keycode('numpad 0') from _keycode. ie. [96-105] --> [0-9]
    if (
      keycodeNumber >= keycode("numpad 0") &&
      keycodeNumber <= keycode("numpad 9")
    ) {
      return String(keycodeNumber - keycode("numpad 0"));
    }

    switch (keycodeNumber) {
      case keycode(";"):
        return ";";
      case keycode("="):
        return "=";
      case keycode(","):
        return ",";
      case keycode("numpad -"):
      case keycode("-"):
        return "-";
      case keycode("numpad +"):
        return "+";
      case keycode("numpad ."):
      case 190: // period keycode
        return ".";
      case keycode("numpad /"):
      case keycode("/"):
        return "/";
      case keycode("``"):
        return "`";
      case keycode("["):
        return "[";
      case keycode("\\"):
        return "\\";
      case keycode("]"):
        return "]";
      case keycode("''"):
        return "'";
      case keycode("up"):
        return "up";
      case keycode("down"):
        return "down";
      case keycode("left"):
        return "left";
      case keycode("right"):
        return "right";
      default:
        return key.toLowerCase();
    }
  }

  /**
   * Translate key event to normalized key descriptor
   */
  translateKeyboardEvent(event: KeyboardEvent) {
    const hasCmd = event.metaKey;
    const hasCtrl = event.ctrlKey;
    const hasAlt = event.altKey;
    const hasShift = event.shiftKey;
    const ident = event.key;
    let key = String.fromCharCode(event.keyCode);
    // This key is a ASCII character
    if (ident && ident.codePointAt(0)! <= 0x007f) {
      key = ident;
    }
    // Translate some keys to their common names
    if (key === "\t") {
      key = "tab";
    } else if (key === " ") {
      key = "space";
    } else {
      key = this.mapKeycodeToKey(event.keyCode, key);
    }
    return this.buildKeyDescriptor(hasCmd, hasCtrl, hasAlt, hasShift, key);
  }

  inModalDialog(): boolean {
    return document.querySelectorAll("[role='dialog']").length > 0;
  }

  inEditMode(): boolean {
    return (
      (document.activeElement?.nodeName === "TEXTAREA" ||
        document.activeElement?.nodeName === "INPUT" ||
        document.activeElement?.getAttribute("contenteditable") === "true") ??
      false
    );
  }

  isEditKey(event: KeyboardEvent) {
    return (
      ((event.ctrlKey || event.metaKey) && event.which === keycode("c")) ||
      ((event.ctrlKey || event.metaKey) && event.which === keycode("x")) ||
      ((event.ctrlKey || event.metaKey) && event.which === keycode("v")) ||
      ((event.ctrlKey || event.metaKey) && event.which === keycode("z")) ||
      ((event.ctrlKey || event.metaKey) && event.which === keycode("y")) ||
      event.which === keycode("delete") ||
      event.which === keycode("backspace")
    );
  }

  handleKey(key: string) {
    if (this.keymap[key]) {
      this.keymap[key](this.editor);
      return true;
    }
    return false;
  }

  bind(keymap: KeyMap) {
    this.add(keymap);
    const eventTarget =
      this.editor.options.keymapEventTarget || this.editor.canvasElement;
    eventTarget.addEventListener(
      "keydown",
      (event) => {
        if (this.editor.getEnabled()) {
          // Disable Keymap in Input/TextArea/CodeMirror/ProseMirror or Modal Dialog
          if (this.inEditMode() || this.inModalDialog()) {
            // Allow default browser's actions
          } else {
            let handled = this.handleKey(
              this.translateKeyboardEvent(event as KeyboardEvent)
            );
            if (handled) {
              event.stopPropagation();
              event.preventDefault();
            }
          }
        }
      },
      true
    );
  }
}
