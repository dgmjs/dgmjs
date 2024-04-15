import {
  Editor,
  Shape,
  Box,
  Text,
  measureText,
  convertTextNodeToString,
  DblClickEvent,
} from "@dgmjs/core";
import { useEffect, useRef, useState } from "react";
import { moveToAboveOrBelow, textVertAlignToAlignItems } from "./utils";
import {
  useEditor,
  extensions,
  TiptapEditorComponent,
} from "./tiptap/tiptap-editor";
import { Editor as TiptapEditor } from "@tiptap/react";

interface DGMTextInplaceEditorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  editor: Editor;
  toolbar?: React.ReactNode;
  onMount?: (tiptapEditor: TiptapEditor) => void;
  onOpen?: (shape: Box) => void;
}

interface InternalState {
  textShape: Text | null;
  padding: number[];
  alignItems: string;
  textAlign: string;
  lineHeight: number;
  paragraphSpacing: number;
  fontFamily: string;
  fontSize: number;
  color: string;
  scale: number;
  left: number;
  top: number;
  width: number;
  height: number;
  textWidth: number;
  textHeight: number;
}

export const DGMTextInplaceEditor: React.FC<DGMTextInplaceEditorProps> = ({
  editor,
  toolbar,
  onMount,
  onOpen,
  ...others
}) => {
  const toolbarHolderRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<InternalState>({
    textShape: null,
    padding: [0, 0, 0, 0],
    alignItems: "start",
    textAlign: "left",
    lineHeight: 1.2,
    paragraphSpacing: 1,
    fontFamily: "",
    fontSize: 16,
    color: "",
    scale: 1,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    textWidth: 0,
    textHeight: 0,
  });

  const tiptapEditor = useEditor({
    extensions,
    content: /* textString.length > 0 ? editingText?.text : */ "",
    onUpdate: (editor) => {
      if (editor && tiptapEditor && state.textShape) {
        const textValue = tiptapEditor.getJSON();
        update(state.textShape, textValue);
      }
    },
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

  useEffect(() => {
    if (tiptapEditor && onMount) {
      onMount(tiptapEditor);
    }
  }, [tiptapEditor]);

  useEffect(() => {
    if (state.textShape) {
      setToolbarPosition({
        left: state.left,
        top: state.top,
        width: state.textShape.width,
        height: state.textShape.height,
      });
    }
  }, [state.left, state.top, state.textShape]);

  const getTextRect = (textShape: Text, doc: any) => {
    const rect = textShape.getRectInDOM(editor.canvas);
    const textMetric = measureText(editor.canvas, textShape, doc);
    const shapeWidth =
      textMetric.minWidth + state.padding[1] + state.padding[3];
    const shapeHeight = textMetric.height + state.padding[0] + state.padding[2];
    const MIN_WIDTH = 1;
    return {
      left: rect[0][0],
      top: rect[0][1],
      width: Math.max(shapeWidth, MIN_WIDTH),
      height: shapeHeight,
      textWidth: textMetric.width,
      textHeight: textMetric.height,
    };
  };

  const setToolbarPosition = (rect: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) => {
    if (toolbarHolderRef.current) {
      moveToAboveOrBelow(
        editor,
        toolbarHolderRef.current,
        [
          [rect.left, rect.top],
          [rect.left + rect.width, rect.top + rect.height],
        ],
        32
      );
    }
  };

  const open = (textShape: Box) => {
    if (editor.currentPage && textShape) {
      // disable shape's text rendering
      textShape._renderText = false;
      editor.repaint();

      // start transaction
      editor.transform.startTransaction("text-edit");
      editor.transform.resolveAllConstraints(editor.currentPage, editor.canvas);

      // set initial content
      tiptapEditor?.commands.setContent(textShape.text);
      tiptapEditor?.commands.focus();
      tiptapEditor?.commands.selectAll();

      // update states
      update(textShape, textShape.text);

      setTimeout(() => {
        if (onOpen) onOpen(textShape as Box);
      }, 0);
    }
  };

  const update = (textShape: Box, textValue: any) => {
    if (editor.currentPage) {
      // mutate text shape
      editor.transform.atomicAssign(textShape, "text", textValue);
      editor.transform.resolveAllConstraints(editor.currentPage, editor.canvas);

      // update states
      const rect = getTextRect(textShape, textValue);
      setState({
        textShape,
        padding: textShape.padding,
        alignItems: textVertAlignToAlignItems(textShape.vertAlign),
        textAlign: textShape.horzAlign,
        lineHeight: textShape.lineHeight,
        paragraphSpacing: textShape.paragraphSpacing,
        fontFamily: textShape.fontFamily,
        fontSize: textShape.fontSize,
        color: editor.canvas.resolveColor(textShape.fontColor),
        scale: editor.getScale(),
        left: rect.left,
        top: rect.top,
        width: Math.max(textShape.width, rect.width),
        height: Math.max(textShape.height, rect.height),
        textWidth: rect.textWidth,
        textHeight: rect.textHeight,
      });
    }
  };

  const close = () => {
    if (tiptapEditor && state.textShape) {
      editor.transform.endTransaction();
      const textString = convertTextNodeToString(tiptapEditor.getJSON());
      if (state.textShape instanceof Text && textString.trim().length === 0) {
        editor.actions.remove([state.textShape]);
      }
      state.textShape._renderText = true;
      editor.repaint();
      setState((state) => ({ ...state, textShape: null }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") close();
  };

  const handleEditorKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (editor.selection.size() === 1) {
        const shape = editor.selection.shapes[0];
        if (shape instanceof Box && shape.textEditable) {
          open(shape);
        }
      }
    }
  };

  const handleEditorDblClick = ({ shape, point }: DblClickEvent) => {
    if (shape instanceof Box && shape.textEditable) {
      open(shape);
    }
  };

  const handleEditorFactoryCreate = (shape: Shape) => {
    if (shape instanceof Text && shape.textEditable) {
      editor.selection.deselectAll();
      open(shape);
    }
  };

  return (
    <>
      {state.textShape && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
            }}
            onPointerDown={close}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              zIndex: 1000,
              outline: "none",
              overflow: "hidden",
              paddingTop: state.padding[0],
              paddingRight: state.padding[1],
              paddingBottom: state.padding[2],
              paddingLeft: state.padding[3],
              alignItems: state.alignItems,
              left: state.left,
              top: state.top,
              width: state.width,
              height: state.height,
              transform: `scale(${state.scale})`,
            }}
            {...others}
          >
            <TiptapEditorComponent
              editor={tiptapEditor}
              fontFamily={state.fontFamily}
              fontSize={state.fontSize}
              fontColor={state.color}
              lineHeight={state.lineHeight}
              textHeight={state.textHeight}
              paragraphSpacing={state.paragraphSpacing}
              alignItems={state.alignItems}
              onBlur={() => {}}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div
            ref={toolbarHolderRef}
            style={{
              position: "absolute",
              background: "transparent",
              zIndex: 10,
              outline: "none",
            }}
          >
            {toolbar}
          </div>
        </>
      )}
    </>
  );
};
