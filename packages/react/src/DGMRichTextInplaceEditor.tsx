import {
  Editor,
  Shape,
  Box,
  Text,
  measureText,
  convertDocToText,
} from "@dgmjs/core";
import { KeyboardEvent, useEffect, useState } from "react";
import { textVertAlignToAlignItems } from "./utils";
import { useEditor, extensions, TiptapEditor } from "./tiptap/tiptap-editor";

interface DGMRichTextInplaceEditorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  editor: Editor;
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

export const DGMRichTextInplaceEditor: React.FC<
  DGMRichTextInplaceEditorProps
> = ({ editor, ...others }) => {
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

  const getTextRect = (textShape: Text, doc: any) => {
    const rect = textShape.getRectInDOM(editor.canvas);
    const textMetric = measureText(editor.canvas, textShape, doc);
    const textWidth = textMetric.minWidth + state.padding[1] + state.padding[3];
    const textHeight = textMetric.height + state.padding[0] + state.padding[2];
    const MIN_WIDTH = 2;
    return {
      left: rect.left,
      top: rect.top,
      width: Math.max(textWidth, MIN_WIDTH),
      height: textHeight,
    };
  };

  const tiptapEditor = useEditor({
    extensions,
    content: /* textString.length > 0 ? editingText?.text : */ "",
    onTransaction: (tr) => {
      // expand editor width if text width is larger than current width
      if (editor && tiptapEditor && state.textShape) {
        const rect = getTextRect(state.textShape, tiptapEditor.getJSON());
        setState((state) => ({
          ...state,
          width: Math.max(state.textShape?.width || 0, rect.width),
          height: Math.max(state.textShape?.height || 0, rect.height),
          textWidth: rect.width,
          textHeight: rect.height,
        }));
      }
    },
  });

  const open = (textShape: Box) => {
    if (textShape) {
      // disable shape's text rendering
      textShape._renderText = false;
      editor.repaint();

      // update states
      const rect = getTextRect(textShape, textShape.text);
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
        textWidth: rect.width,
        textHeight: rect.height,
      });

      tiptapEditor?.commands.setContent(textShape.text);
      tiptapEditor?.commands.focus();
      tiptapEditor?.commands.selectAll();
    }
  };

  const applyChanges = () => {
    if (tiptapEditor && state.textShape) {
      const textString = convertDocToText(tiptapEditor.getJSON());
      if (textString.trim().length === 0) {
        editor.actions.delete_([state.textShape]);
      } else {
        editor.actions.update({ text: tiptapEditor.getJSON() }, [
          state.textShape,
        ]);
      }
      state.textShape._renderText = true;
      editor.repaint();
      setState((state) => ({ ...state, textShape: null }));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") applyChanges();
  };

  useEffect(() => {
    if (editor) {
      editor.on("dblClick", (shape: Shape, point: number[]) => {
        if (
          shape instanceof Box &&
          shape.textEditable &&
          shape.richText === true
        )
          open(shape);
      });
    }
  }, [editor]);

  return (
    <>
      {state.textShape && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
            }}
            onPointerDown={applyChanges}
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
            <TiptapEditor
              editor={tiptapEditor}
              fontFamily={state.fontFamily}
              fontSize={state.fontSize}
              fontColor={state.color}
              lineHeight={state.lineHeight}
              paragraphSpacing={state.paragraphSpacing}
              alignItems={state.alignItems}
              onBlur={() => {}}
              onKeyDown={handleKeyDown}
            />
          </div>
        </>
      )}
    </>
  );
};
