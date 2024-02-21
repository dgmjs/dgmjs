import { Editor, Shape, Box, Text, geometry, measureText } from "@dgmjs/core";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { textVertAlignToAlignItems } from "./utils";

interface DGMPlainTextInplaceEditorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  editor: Editor;
}

interface InternalState {
  textShape: Text | null;
  textValue: string;
  padding: number[];
  alignItems: string;
  textAlign: string;
  lineHeight: number;
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

export const DGMPlainTextInplaceEditor: React.FC<
  DGMPlainTextInplaceEditorProps
> = ({ editor, ...others }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [state, setState] = useState<InternalState>({
    textShape: null,
    textValue: "",
    padding: [0, 0, 0, 0],
    alignItems: "start",
    textAlign: "left",
    lineHeight: 1.2,
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

  const open = (textShape: Text | null) => {
    if (textShape) {
      // disable shape's text rendering
      textShape._renderText = false;
      editor.repaint();

      // compute new states
      const padding = textShape.padding;
      const textValue =
        typeof textShape.text === "string" ? textShape.text : "";
      const rect = textShape.getRectInDOM(editor.canvas);
      const MIN_WIDTH = 2;
      const m = measureText(editor.canvas, textShape, textValue);
      const width = Math.max(
        m.minWidth + padding[1] + padding[3],
        rect.width,
        MIN_WIDTH
      );
      const height = Math.max(m.height + padding[0] + padding[2], rect.height);

      // update states
      setState({
        textShape,
        textValue,
        padding,
        alignItems: textVertAlignToAlignItems(textShape.vertAlign),
        textAlign: textShape.horzAlign,
        lineHeight: textShape.lineHeight,
        fontFamily: textShape.fontFamily,
        fontSize: textShape.fontSize,
        color: editor.canvas.resolveColor(textShape.fontColor),
        scale: editor.getScale(),
        left: rect.left,
        top: rect.top,
        width,
        height,
        textWidth: 0,
        textHeight: m.height,
      });

      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
        textareaRef.current.scrollTop = 0;
      }
    }
  };

  const update = () => {};

  const applyChanges = () => {
    if (state.textShape) {
      if (state.textValue.trim().length === 0) {
        editor.actions.delete_([state.textShape]);
      } else {
        editor.actions.update({ text: state.textValue }, [state.textShape]);
      }
      state.textShape._renderText = true;
      editor.repaint();
      setState((state) => ({ ...state, textShape: null }));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") applyChanges();
  };

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const textValue = (event.target as HTMLTextAreaElement).value;
    setState((state) => ({ ...state, textValue }));
  };

  useEffect(() => {
    if (editor) {
      editor.on("dblClick", (shape: Shape, point: number[]) => {
        if (
          shape instanceof Box &&
          shape.textEditable &&
          shape.richText === false
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
            <textarea
              ref={textareaRef}
              style={{
                background: "transparent",
                width: "100%",
                outline: "none",
                resize: "none",
                whiteSpace: "nowrap",
                lineHeight: `${state.lineHeight}em`,
                fontFamily: state.fontFamily,
                fontSize: `${state.fontSize}px`,
                color: state.color,
                textAlign: state.textAlign as any,
                height: state.textHeight,
              }}
              value={state.textValue}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
            ></textarea>
          </div>
        </>
      )}
    </>
  );
};
