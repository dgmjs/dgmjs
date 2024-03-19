import { Editor, Shape, Box, Text, measureText } from "@dgmjs/core";
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

  const getTextRect = (textShape: Text, textValue: string) => {
    const rect = textShape.getRectInDOM(editor.canvas);
    const textMetric = measureText(editor.canvas, textShape, textValue);
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

  const open = (textShape: Box) => {
    if (editor.currentPage && textShape) {
      // disable shape's text rendering
      textShape._renderText = false;
      editor.repaint();

      // start transaction
      editor.transform.startTransaction("text-edit");
      editor.transform.resolveAllConstraints(editor.currentPage, editor.canvas);

      // update states
      const textValue =
        typeof textShape.text === "string" ? textShape.text : "";
      update(textShape, textValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.select();
          textareaRef.current.scrollTop = 0;
        }
      }, 0);
    }
  };

  const update = (textShape: Box, textValue: string) => {
    if (editor.currentPage) {
      // mutate text shape
      editor.transform.atomicAssign(textShape, "text", textValue);
      editor.transform.resolveAllConstraints(editor.currentPage, editor.canvas);

      // update states
      const rect = getTextRect(textShape, textValue);
      setState((state) => ({
        textShape,
        textValue,
        padding: textShape.padding,
        alignItems: textVertAlignToAlignItems(textShape.vertAlign),
        textAlign: textShape.horzAlign,
        lineHeight: textShape.lineHeight,
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
      }));
    }
  };

  const close = () => {
    if (state.textShape) {
      editor.transform.endTransaction();
      if (
        state.textShape instanceof Text &&
        state.textValue.trim().length === 0
      ) {
        editor.actions.remove([state.textShape]);
      }
      state.textShape._renderText = true;
      editor.repaint();
      setState((state) => ({ ...state, textShape: null }));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") {
      close();
    }
  };

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const textValue = (event.target as HTMLTextAreaElement).value;
    update(state.textShape as Box, textValue);
  };

  useEffect(() => {
    if (editor) {
      editor.onDblClick.on(({ shape, point }) => {
        if (
          shape instanceof Box &&
          shape.textEditable &&
          shape.richText === false
        )
          open(shape);
      });
      editor.factory.onCreate.on((shape: Shape) => {
        if (
          shape instanceof Text &&
          shape.textEditable &&
          shape.richText === false
        ) {
          editor.selection.deselectAll();
          open(shape);
        }
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
