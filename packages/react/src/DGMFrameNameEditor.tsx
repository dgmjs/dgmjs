import {
  Transaction,
  Editor,
  Shape,
  DblClickEvent,
  macro,
  ActionKind,
  Frame,
  geometry,
  utils,
} from "@dgmjs/core";
import { useEffect, useRef, useState } from "react";

function getFrameNameRect(editor: Editor, frameShape: Frame, name: string) {
  const canvas = editor.canvas;
  const textMetric = editor.canvas.textMetric(name);
  const margin = Math.floor(textMetric.descent * 1.2);
  const rect = [
    [frameShape.left, frameShape.top - textMetric.height - margin],
    [frameShape.left + textMetric.width, frameShape.top - margin],
  ].map((p) => {
    return utils.gcs2dcs(canvas, p);
  });
  const scale = canvas.scale;
  let width = geometry.width(rect) * (1 / scale);
  let height = geometry.height(rect) * (1 / scale);
  const left = rect[0][0] - (width * (1 - scale)) / 2;
  const top = rect[0][1] - (height * (1 - scale)) / 2;
  const rectInDCS = [
    [left, top],
    [left + width, top + height],
  ];
  return {
    left: rectInDCS[0][0],
    top: rectInDCS[0][1],
    width: width,
    height: height,
  };
}

interface DGMFrameNameEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  editor: Editor;
  onMount?: (input: any) => void;
  onOpen?: (shape: Frame) => void;
}

interface InternalState {
  frameShape: Frame | null;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  color: string;
  scale: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

export const DGMFrameNameEditor: React.FC<DGMFrameNameEditorProps> = ({
  editor,
  onMount,
  onOpen,
  ...others
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [state, setState] = useState<InternalState>({
    frameShape: null,
    fontFamily: "",
    fontSize: 16,
    fontWeight: 400,
    color: "",
    scale: 1,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (editor) {
      editor.onDblClick.addListener(handleEditorDblClick);
      editor.onKeyDown.addListener(handleEditorKeyDown);
      editor.factory.onCreate.addListener(handleEditorFactoryCreate);
    }
    return function cleanup() {
      if (editor) {
        editor.onDblClick.removeListener(handleEditorDblClick);
        editor.factory.onCreate.removeListener(handleEditorFactoryCreate);
      }
    };
  }, [editor]);

  const open = (frameShape: Frame) => {
    if (editor.getCurrentPage() && frameShape) {
      // disable shape's text rendering
      frameShape.allowRenderText = false;
      frameShape.update(editor.canvas);
      editor.repaint();

      // start transaction
      editor.transform.startAction(ActionKind.EDIT_TEXT);

      // update states
      update(frameShape, frameShape.name);

      setTimeout(() => {
        if (onOpen) onOpen(frameShape as Frame);
        setName(frameShape.name);
        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.select();
        }, 0);
      }, 0);
    }
  };

  const update = (frameShape: Frame, name: any) => {
    if (editor.getCurrentPage()) {
      // mutate frame name
      editor.transform.transact((tx: Transaction) => {
        tx.assign(frameShape, "name", name);
        macro.resolveAllConstraints(
          tx,
          editor.getCurrentPage()!,
          editor.canvas
        );
      });

      // update states
      const rect = getFrameNameRect(editor, frameShape, name);
      setState({
        frameShape: frameShape,
        fontFamily: frameShape.fontFamily,
        fontSize: frameShape.fontSize,
        fontWeight: frameShape.fontWeight,
        color: editor.canvas.resolveColor(frameShape.fontColor),
        scale: editor.getScale(),
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  const close = () => {
    if (inputRef.current && state.frameShape) {
      editor.transform.endAction();
      state.frameShape.allowRenderText = true;
      state.frameShape.update(editor.canvas);
      editor.repaint();
      setState((state) => ({ ...state, frameShape: null }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (editor.selection.size() === 1) {
        const shape = editor.selection.shapes[0];
        if (shape instanceof Frame && !shape.textEditable) {
          open(shape);
        }
      }
    } else if (event.key === "Escape") {
      close();
    }
  };

  const handleEditorKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (editor.selection.size() === 1) {
        const shape = editor.selection.shapes[0];
        if (shape instanceof Frame && !shape.textEditable) {
          open(shape);
        }
      }
    }
  };

  const handleEditorDblClick = ({ shape, point }: DblClickEvent) => {
    if (shape instanceof Frame && !shape.textEditable) {
      open(shape);
    }
  };

  const handleEditorFactoryCreate = (shape: Shape) => {
    if (shape instanceof Frame && !shape.textEditable) {
      setTimeout(() => {
        editor.selection.deselectAll();
        setTimeout(() => {
          open(shape);
        }, 0);
      }, 0);
    }
  };

  return (
    <>
      {state.frameShape && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
            }}
            onPointerDown={close}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              zIndex: 10000,
              outline: "none",
              overflow: "hidden",
              left: state.left,
              top: state.top,
              width: state.width,
              height: state.height,
              transform: `scale(${state.scale})`,
            }}
            {...others}
          >
            <input
              ref={inputRef}
              value={name}
              style={{
                backgroundColor: "transparent",
                border: "1px solid #888",
                outline: "none",
                fontFamily: state.fontFamily,
                fontSize: state.fontSize,
                fontWeight: state.fontWeight,
                color: state.color,
                height: state.height,
                width: state.width,
              }}
              onChange={(e) => {
                setName(e.target.value);
                update(state.frameShape, e.target.value);
              }}
              onBlur={() => {
                close();
              }}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
        </>
      )}
    </>
  );
};
