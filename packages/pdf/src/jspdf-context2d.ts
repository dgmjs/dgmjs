import { Canvas } from "@dgmjs/core";
import colorString from "color-string";
import { jsPDF } from "jspdf";
import { parseFont } from "css-font-parser";
import { renderSVGPath } from "./svg-renderer";

/**
 * PDF context2d
 */
export class PDFContext2D {
  /**
   * jsPDF instance
   */
  pdf: jsPDF;

  /**
   * Editor's canvas
   */
  canvas: Canvas;

  /**
   * PDF canvas of this context2d
   */
  pdfCanvas: Canvas | null;

  _fillStyle: string;
  _fillAlpha: number;
  _strokeStyle: string;
  _strokeAlpha: number;
  _globalAlpha: number;
  _lineWidth: number;
  _lineCap: string;
  _lineJoin: string;
  _font: string;
  _fontSize: number;
  stateStack: any[];

  constructor(canvas: Canvas, pdf: jsPDF) {
    this.pdf = pdf;
    this.canvas = canvas;
    this.pdfCanvas = null;
    this._fillStyle = "#ffffffff";
    this._fillAlpha = 1;
    this._strokeStyle = "#000000ff";
    this._strokeAlpha = 1;
    this._globalAlpha = 1;
    this._lineWidth = 1;
    this._lineCap = "butt";
    this._lineJoin = "miter";
    this._font = "16px Loranthus";
    this._fontSize = 16;
    this.stateStack = [];
  }

  _assignStyles() {
    this.pdf.context2d.fillStyle = this._fillStyle;
    this.pdf.context2d.strokeStyle = this._strokeStyle;
    this.pdf.context2d.lineWidth = this._lineWidth;
    (this.pdf.context2d as any).lineCap = this._lineCap;
    (this.pdf.context2d as any).lineJoin = this._lineJoin;

    // assign font
    const font = parseFont(this._font);
    const fontName = font["font-family"][0];
    const fontStyle = font["font-style"] ?? "normal";
    const fontWeight = parseInt(font["font-weight"]);
    const fontSize =
      parseInt((font["font-size"] ?? "16px").replace("px", "")) *
      this.pdf.internal.scaleFactor;
    this.pdf.setFont(fontName, fontStyle, fontWeight);
    this.pdf.setFontSize(fontSize);

    // assign color's opacity and global alpha
    this.pdf.setGState(
      new (this.pdf as any).GState({
        opacity: this._fillAlpha * this._globalAlpha,
        "stroke-opacity": this._strokeAlpha * this._globalAlpha,
      })
    );
  }

  setPDFCanvas(pdfCanvas: Canvas) {
    this.pdfCanvas = pdfCanvas;
  }

  save() {
    this.pdf.context2d.save();
    this.stateStack.push({
      fillStyle: this._fillStyle,
      fillAlpha: this._fillAlpha,
      strokeStyle: this._strokeStyle,
      strokeAlpha: this._strokeAlpha,
      globalAlpha: this._globalAlpha,
      lineWidth: this._lineWidth,
      lineCap: this._lineCap,
      lineJoin: this._lineJoin,
      fontSize: this._fontSize,
    });
  }

  restore() {
    this.pdf.context2d.restore();
    const state = this.stateStack.pop();
    this._fillStyle = state.fillStyle;
    this._fillAlpha = state.fillAlpha;
    this._strokeStyle = state.strokeStyle;
    this._strokeAlpha = state.strokeAlpha;
    this._globalAlpha = state.globalAlpha;
    this._lineWidth = state.lineWidth;
    this._lineCap = state.lineCap;
    this._lineJoin = state.lineJoin;
    this._fontSize = state.fontSize;
    this._assignStyles();
  }

  translate(x: number, y: number) {
    this.pdf.context2d.translate(x, y);
  }

  scale(x: number, y: number) {
    this.pdf.context2d.scale(x, y);
  }

  rotate(angle: number) {
    this.pdf.context2d.rotate(angle);
  }

  clip() {
    this.pdf.context2d.clip();
  }

  set fillStyle(value: string) {
    const rgba = colorString.get.rgb(value);
    const alpha = rgba.length > 3 ? rgba[3] : 1;
    const hex = colorString.to.hex([rgba[0], rgba[1], rgba[2]]);
    this._fillStyle = hex;
    this._fillAlpha = alpha;
  }

  set strokeStyle(value: string) {
    const rgba = colorString.get.rgb(value);
    const alpha = rgba.length > 3 ? rgba[3] : 1;
    const hex = colorString.to.hex([rgba[0], rgba[1], rgba[2]]);
    this._strokeStyle = hex;
    this._strokeAlpha = alpha;
  }

  set globalAlpha(value: number) {
    this._globalAlpha = value;
  }

  set lineWidth(value: number) {
    this._lineWidth = value;
  }

  set lineCap(value: string) {
    this._lineCap = value;
  }

  set lineJoin(value: string) {
    this._lineJoin = value;
  }

  set font(value: string) {
    this._font = value;
  }

  setLineDash(segments: number[]) {
    if (segments.length > 0 && segments.every((v) => v === 0)) {
      (this.pdf.context2d as any).setLineDash([]);
    } else {
      const scale = this.pdfCanvas?.scale ?? 1;
      const dash = segments.map((s) => s * scale);
      (this.pdf.context2d as any).setLineDash(dash);
    }
  }

  beginPath() {
    this.pdf.context2d.beginPath();
  }

  closePath() {
    this.pdf.context2d.closePath();
  }

  moveTo(x: number, y: number) {
    this._assignStyles();
    this.pdf.context2d.moveTo(x, y);
  }

  lineTo(x: number, y: number) {
    this._assignStyles();
    this.pdf.context2d.lineTo(x, y);
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
    this._assignStyles();
    this.pdf.context2d.quadraticCurveTo(cpx, cpy, x, y);
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ) {
    this._assignStyles();
    this.pdf.context2d.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) {
    this._assignStyles();
    // TODO: this.pdf.context2d.arcTo(x1, y1, x2, y2, radius);
    // TODO: Use quadraticCurveTo to avoid arcTo not implemented in jsPDF
    this.pdf.context2d.quadraticCurveTo(x1, y1, x2, y2);
  }

  stroke(path2d: Path2D) {
    this._assignStyles();
    if (path2d) {
      // assume path2d object has pathData property
      const pathData: string = (path2d as any).pathData;
      if (pathData) renderSVGPath(pathData, this.pdf.context2d);
    }
    this.pdf.context2d.stroke();
  }

  fill(path2d: Path2D) {
    this._assignStyles();
    if (path2d) {
      // assume path2d object has pathData property
      const pathData: string = (path2d as any).pathData;
      if (pathData) renderSVGPath(pathData, this.pdf.context2d);
    }
    this.pdf.context2d.fill();
  }

  rect(x: number, y: number, width: number, height: number) {
    this._assignStyles();
    this.pdf.context2d.rect(x, y, width, height);
  }

  fillRect(x: number, y: number, width: number, height: number) {
    this._assignStyles();
    this.pdf.context2d.fillRect(x, y, width, height);
  }

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean
  ) {
    this._assignStyles();
    this.pdf.context2d.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  }

  drawImage(
    image: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this._fillAlpha = 1;
    this._strokeAlpha = 1;
    this._assignStyles();
    this.pdf.context2d.drawImage(image as any, x, y, width, height);
  }

  measureText(text: string) {
    this.canvas.font = this._font;
    const m = this.canvas.textMetric(text);
    return {
      width: m.width,
      fontBoundingBoxDescent: m.height - m.ascent,
      fontBoundingBoxAscent: m.ascent,
      actualBoundingBoxAscent: m.actualAscent,
      actualBoundingBoxDescent: m.actualDescent,
    };
  }

  fillText(text: string, x: number, y: number) {
    this._assignStyles();
    this.pdf.context2d.fillText(text, x, y);
  }
}
