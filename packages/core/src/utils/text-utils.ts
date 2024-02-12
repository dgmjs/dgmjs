/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { Canvas } from "../graphics/graphics";
import { Box, Text } from "../shapes";
import * as utils from "../graphics/utils";

/**
 * Split a string into words at spaces(' ') and hypens('-').
 */
export function splitWords(str: string): string[] {
  let words = [];
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === " " || ch === "-") {
      words.push(str.substring(start, i + 1));
      start = i + 1;
    }
  }
  if (start <= str.length - 1) {
    words.push(str.substring(start, str.length));
  }
  return words;
}

/**
 * Strip unit string from a given string
 */
export function stripUnit(value: string | number): number {
  if (typeof value === "string" && value.endsWith("px")) {
    return parseFloat(value.slice(0, -2));
  } else if (typeof value === "number") {
    return value;
  }
  return -1;
}

/**
 * Convert a text (string) to document node
 */
export function convertTextToDoc(text: string): any {
  const doc: any = {
    type: "doc",
    content: [{ type: "paragraph", content: [] }],
  };
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    if (i > 0) doc.content[0].content.push({ type: "hardBreak" });
    if (line.length > 0)
      doc.content[0].content.push({ type: "text", text: line });
  });
  return doc;
}

/**
 * Convert document node to text (string)
 */
export function convertDocToText(node: any): string {
  if (typeof node === "string") return node;
  switch (node.type) {
    case "doc":
      if (Array.isArray(node.content)) {
        return node.content
          .map((child: any) => convertDocToText(child))
          .join("");
      }
      return "";
    case "bulletList":
      if (Array.isArray(node.content)) {
        const items = node.content.map((child: any) => convertDocToText(child));
        return items.map((item: string) => `- ${item}`).join("");
      }
      return "";
    case "orderedList":
      if (Array.isArray(node.content)) {
        const items = node.content.map((child: any) => convertDocToText(child));
        return items
          .map((item: string, idx: number) => `${idx + 1} ${item}`)
          .join("");
      }
      return "";
    case "listItem":
      if (Array.isArray(node.content)) {
        return node.content
          .map((child: any) => convertDocToText(child))
          .join("");
      }
      return "";
    case "paragraph":
      if (Array.isArray(node.content)) {
        return (
          node.content.map((child: any) => convertDocToText(child)).join("") +
          "\n"
        );
      }
      return "\n";
    case "text":
      return node.text;
  }
  return "";
}

export function getTextNodeFont(
  node: any,
  defaultFont: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    fontStyle: string;
    fontColor: string;
  }
) {
  if (Array.isArray(node.marks)) {
    let font = { ...defaultFont };
    node.marks.forEach((mark: any) => {
      switch (mark.type) {
        case "textStyle":
          font.fontFamily = mark.attrs?.fontFamily || defaultFont.fontFamily;
          font.fontSize = stripUnit(
            mark.attrs?.fontSize || defaultFont.fontSize
          );
          font.fontColor = mark.attrs?.color || defaultFont.fontColor;
          break;
        case "bold":
          font.fontWeight = 700;
          break;
        case "italic":
          font.fontStyle = "italic";
          break;
      }
    });
    return font;
  }
  return defaultFont;
}

/**
 * Preprocess document nodes. It mainly handles wordWrap and hardBreak by
 * adding "line" type nodes with additional size info.
 *
 * options:
 *   wordWrap: boolean
 *   width: number
 *   listIndent: number
 *
 * Original document node structure:
 *   doc = block+
 *   block = paragraph | bulletList | orderedList
 *   paragraph = inline+
 *   bulletList = listItem*
 *   orderedList = listItem*
 *   listItem = block+
 *   inline = text | hardBreak
 *   text = <TERMINAL>
 *   hardBreak = <TERMINAL>
 *
 * Preprocessed document node structure:
 *   doc = block+
 *   block = paragraph | bulletList | orderedList
 *   paragraph = line*
 *   orderedList = listItem*
 *   bulletList = listItem*
 *   listItem = block+
 *   line = inline+
 *   inline = text
 *   text = <TERMINAL>
 *
 * @returns preprocessed doc node
 */
export function preprocessDocNode(
  canvas: Canvas,
  node: any,
  shape: Box,
  wordWrap: boolean,
  width: number,
  listIndent: number
): any {
  switch (node.type) {
    /* blocks */
    case "doc":
    case "bulletList":
    case "orderedList":
    case "listItem":
      if (node.type === "listItem") {
        width = width - listIndent * shape.fontSize;
      }
      let block = { ...node, _height: 0, _width: 0, _minWidth: 0 };
      if (Array.isArray(node.content)) {
        block.content = node.content.map((child: any, i: number) => {
          let processed = preprocessDocNode(
            canvas,
            child,
            shape,
            wordWrap,
            width,
            listIndent
          );
          if (block.type === "bulletList") {
            processed._list = "bullet";
          }
          if (block.type === "orderedList") {
            processed._list = "ordered";
            processed._order = i + 1;
          }
          if (processed.type === "listItem") {
            processed._width += listIndent * shape.fontSize;
            processed._minWidth += listIndent * shape.fontSize;
          }
          block._height += processed._height;
          block._width = Math.max(block._width, processed._width);
          block._minWidth = Math.max(block._minWidth, processed._minWidth);
          return processed;
        });
      }
      return block;
    case "paragraph":
      let paragraph = {
        ...node,
        content: [],
        _height: 0,
        _width: 0,
        _minWidth: 0,
      };
      let line: any = {
        type: "line",
        _width: 0,
        _height: 0,
        _ascent: 0,
        _descent: 0,
        _align: "",
        _gap: 0,
        _spaceSum: 0,
        _last: false,
        content: [],
      };
      let lineWidth = 0;
      let lineHeight = 0;
      let lineAscent = 0;
      let lineDescent = 0;
      const breakLine = (isHardBreak: boolean) => {
        line._width = lineWidth;
        line._height = lineHeight;
        line._ascent = lineAscent;
        line._descent = lineDescent;
        line._align = paragraph.attrs?.textAlign || "left";
        if (line._align === "justify") {
          line._gap = width - line._width;
          // trim last text
          const lastLine: any = line.content[line.content.length - 1];
          if (lastLine.text.length > lastLine.text.trimEnd().length) {
            lastLine.text = lastLine.text.trimEnd();
            lastLine._spaces--;
          }
          // computes sum of space widths for each inline
          line._spaceSum = line.content
            .map((i: any) => i._spaces * i._spaceWidth)
            .reduce((a: number, b: number) => a + b);
          line.content.forEach((inline: any, i: number) => {
            let _sw = inline._spaceWidth * inline._spaces;
            inline._gap = line._gap * (_sw / line._spaceSum);
          });
        }
        if (isHardBreak) {
          line._last = true;
        }
        paragraph.content.push(line);
        paragraph._height += line._height;
        paragraph._width = Math.max(paragraph._width, line._width, width);
        paragraph._minWidth = Math.max(paragraph._minWidth, line._width);
        line = {
          type: "line",
          _width: 0,
          _height: 0,
          _ascent: 0,
          _descent: 0,
          _align: "",
          _gap: 0,
          _spaceSum: 0,
          _last: false,
          content: [],
        };
        lineWidth = 0;
        lineHeight = 0;
        lineAscent = 0;
        lineDescent = 0;
      };
      if (Array.isArray(node.content)) {
        node.content.forEach((inlineNode: any) => {
          switch (inlineNode.type) {
            case "text":
              let textWords = "";
              let spaceCount = 0;
              const addText = () => {
                if (textWords.length > 0) {
                  const textMetric = canvas.textMetric(textWords);
                  line.content.push({
                    type: "text",
                    text: textWords,
                    marks: inlineNode.marks,
                    _width: textMetric.width,
                    _height: textMetric.height,
                    _ascent: textMetric.ascent,
                    _descent: textMetric.descent,
                    _spaces: spaceCount,
                    _spaceWidth: canvas.textMetric(" ").width,
                  });
                  textWords = "";
                  spaceCount = 0;
                }
              };
              if (inlineNode.text.length > 0) {
                const words = splitWords(inlineNode.text);
                const font = getTextNodeFont(inlineNode, shape);
                canvas.font = utils.toCssFont(
                  font.fontStyle,
                  font.fontWeight,
                  font.fontSize,
                  font.fontFamily
                );
                words.forEach((word, i) => {
                  let _wordMetric = canvas.textMetric(word);
                  if (wordWrap && lineWidth + _wordMetric.width > width) {
                    addText();
                    _wordMetric = canvas.textMetric(word);
                    breakLine(false);
                  }
                  textWords += word;
                  spaceCount += word.split(" ").length - 1;
                  lineWidth += _wordMetric.width;
                  lineHeight = Math.max(
                    font.fontSize * shape.lineHeight,
                    lineHeight
                  );
                  lineAscent = Math.max(_wordMetric.ascent, lineAscent);
                  lineDescent = Math.max(_wordMetric.descent, lineDescent);
                });
                if (textWords.length > 0) {
                  addText();
                }
              }
              break;
            case "hardBreak":
              breakLine(true);
              break;
          }
        });
      }
      if (lineWidth > 0) breakLine(false);
      paragraph._height = Math.max(
        paragraph._height,
        shape.fontSize * shape.lineHeight
      );
      paragraph._height += shape.paragraphSpacing * shape.fontSize;
      // tagging last line
      if (paragraph.content.length > 0) {
        let last = paragraph.content[paragraph.content.length - 1];
        last._last = true;
      }
      return paragraph;
    default:
      return node;
  }
}

/**
 * Draw preprocessed document nodes
 */
export function drawDocNode(
  canvas: Canvas,
  node: any,
  shape: Text,
  left: number,
  top: number,
  width: number,
  listIndent: number
) {
  switch (node.type) {
    case "doc":
    case "bulletList":
    case "orderedList": {
      if (Array.isArray(node.content)) {
        let y = top;
        for (let i = 0; i < node.content.length; i++) {
          let block = node.content[i];
          drawDocNode(canvas, block, shape, left, y, width, listIndent);
          y += block._height;
        }
      }

      break;
    }
    case "listItem": {
      if (Array.isArray(node.content)) {
        const firstLine = node.content[0].content[0];
        if (firstLine) {
          const font = getTextNodeFont(node, shape);
          canvas.font = utils.toCssFont(
            font.fontStyle,
            font.fontWeight,
            font.fontSize,
            font.fontFamily
          );
          canvas.fontColor = font.fontColor;
          let y =
            top +
            (firstLine._height - (firstLine._ascent + firstLine._descent)) / 2 +
            firstLine._ascent;
          switch (node._list) {
            case "bullet":
              canvas.fillText(
                left +
                  listIndent * shape.fontSize -
                  canvas.textMetric("• ").width,
                y,
                "•"
              );
              break;
            case "ordered":
              canvas.fillText(
                left +
                  listIndent * shape.fontSize -
                  canvas.textMetric(node._order + ". ").width,
                y,
                node._order + "."
              );
              break;
          }
        }
        let y = top;
        for (let i = 0; i < node.content.length; i++) {
          let block = node.content[i];
          drawDocNode(
            canvas,
            block,
            shape,
            left + listIndent * shape.fontSize,
            y,
            width - listIndent * shape.fontSize,
            listIndent
          );
          y += block._height;
        }
      }
      break;
    }
    case "paragraph": {
      if (Array.isArray(node.content)) {
        let y = top;
        for (let i = 0; i < node.content.length; i++) {
          let line = node.content[i];
          drawDocNode(canvas, line, shape, left, y, width, listIndent);
          y += line._height;
        }
      }
      break;
    }
    case "line": {
      if (Array.isArray(node.content)) {
        let x = left;
        switch (node._align) {
          case "left":
            x = left;
            break;
          case "right":
            x = left + (width - node._width);
            break;
          case "center":
            x = left + (width - node._width) / 2;
            break;
          case "justify":
            x = left;
            break;
          default:
            x = left;
            break;
        }
        let y = top + (node._height - (node._ascent + node._descent)) / 2;
        for (let i = 0; i < node.content.length; i++) {
          let inline = node.content[i];
          inline._gap = node._last ? 0 : inline._gap || 0;
          inline._width += inline._gap;
          drawDocNode(
            canvas,
            inline,
            shape,
            x,
            y + node._ascent,
            width,
            listIndent
          );
          x += inline._width;
        }
      }
      break;
    }
    case "text": {
      const font = getTextNodeFont(node, shape);
      canvas.font = utils.toCssFont(
        font.fontStyle,
        font.fontWeight,
        font.fontSize,
        font.fontFamily
      );
      canvas.fontColor = font.fontColor;
      if (node._gap > 0) {
        const words = node.text.split(" ");
        const space =
          canvas.textMetric(" ").width + node._gap / (words.length - 1);
        let x = left;
        words.forEach((word: string) => {
          canvas.fillText(x, top, word);
          x += canvas.textMetric(word).width + space;
        });
      } else {
        canvas.fillText(left, top, node.text);
      }
      if (node.marks?.some((m: any) => m.type === "underline")) {
        canvas.strokeColor = canvas.fontColor;
        canvas.strokeWidth = shape.fontSize * 0.1;
        canvas.line(left, top + 2, left + node._width, top + 2);
      }
      if (node.marks?.some((m: any) => m.type === "strike")) {
        canvas.strokeColor = canvas.fontColor;
        canvas.strokeWidth = shape.fontSize * 0.1;
        canvas.line(
          left,
          top - node._ascent / 3,
          left + node._width,
          top - node._ascent / 3
        );
      }
      break;
    }
  }
}

/**
 * Measure text size
 */
export function measureText(
  canvas: Canvas,
  shape: Text
): { width: number; height: number; minWidth: number } {
  const doc = preprocessDocNode(
    canvas,
    typeof shape.text === "string" ? convertTextToDoc(shape.text) : shape.text,
    shape,
    shape.wordWrap, // word wrap
    shape.width,
    1.5
  );
  const textWidth = doc._width;
  // const textWidth = shape.wordWrap ? 0 : doc._width;
  // subtract last paragraph's spacing margin
  const textHeight = doc._height - shape.paragraphSpacing * shape.fontSize;
  return { width: textWidth, height: textHeight, minWidth: doc._minWidth };
}

export function drawRichText(canvas: Canvas, shape: Box) {
  let doc = preprocessDocNode(
    canvas,
    typeof shape.text === "string" ? convertTextToDoc(shape.text) : shape.text,
    shape,
    shape.wordWrap,
    shape.innerWidth,
    1.5
  );
  // subtract last paragraph's spacing margin
  const height = doc._height - shape.paragraphSpacing * shape.fontSize;
  let top = shape.innerTop;
  switch (shape.vertAlign) {
    case "top":
      top = shape.innerTop;
      break;
    case "middle":
      top = shape.innerTop + (shape.innerHeight - height) / 2;
      break;
    case "bottom":
      top = shape.innerBottom - height;
      break;
  }
  drawDocNode(canvas, doc, shape, shape.innerLeft, top, shape.innerWidth, 1.5);
}

/**
 * Draw plain text inside a box
 *
 * How to draw a text line:
 *
 *     + -------------- +
 *     |                | G
 *     |  ------- +      +
 *  LH |  TEXT    | H    ____________ BL
 *     |  ------- +
 *     |
 *     + --------+
 *
 * Legends:
 * - LH (Line Height) = fontSize * lineHeight
 * - H (Text Height) = metric.ascent + metric.descent (= metric.height)
 * - G (Gap) = (LH - H) / 2
 * - BL (Baseline) = G + metric.ascent
 *
 * To draw a text on (x, y)
 * - canvas.fillText(x, y + BL)
 */
export function drawPlainText(canvas: Canvas, shape: Box) {
  const text: string =
    typeof shape.text !== "string" ? convertDocToText(shape.text) : shape.text;
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const ms = lines.map((line) => canvas.textMetric(line));
  const lineHeight = shape.fontSize * shape.lineHeight;
  const height = lines.length * lineHeight;
  let top = shape.innerTop;
  switch (shape.vertAlign) {
    case "top":
      top = shape.innerTop;
      break;
    case "middle":
      top = shape.innerTop + (shape.innerHeight - height) / 2;
      break;
    case "bottom":
      top = shape.innerBottom - height;
      break;
  }
  shape.assignStyles(canvas);
  if (lines.length > 0) {
    let x = shape.innerLeft;
    let y = top;
    for (let i = 0; i < lines.length; i++) {
      const m = canvas.textMetric(lines[i]);
      switch (shape.horzAlign) {
        case "left":
          x = shape.innerLeft;
          break;
        case "center":
          x = shape.innerLeft + (shape.innerWidth - m.width) / 2;
          break;
        case "right":
          x = shape.innerRight - m.width;
          break;
      }
      const gap = (lineHeight - m.height) / 2;
      canvas.fillText(x, y + gap + ms[i].ascent, lines[i]);
      y = y + lineHeight;
    }
  }
}
