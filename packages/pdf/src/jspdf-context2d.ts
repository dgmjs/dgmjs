import { Canvas } from "@dgmjs/core";
import colorString from "color-string";
import { jsPDF } from "jspdf";

export class PDFContext2D {
  canvas: Canvas;
  doc: jsPDF;
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

  constructor(canvas: Canvas, doc: jsPDF) {
    this.canvas = canvas;
    this.doc = doc;
    this._fillStyle = "#ffffff";
    this._fillAlpha = 1;
    this._strokeStyle = "#000000";
    this._strokeAlpha = 1;
    this._globalAlpha = 1;
    this._lineWidth = 1;
    this._lineCap = "butt";
    this._lineJoin = "miter";
    this._font = "Loranthus";
    this._fontSize = 16;
    this.stateStack = [];
  }

  _assignStyles() {
    this.doc.context2d.fillStyle = this._fillStyle;
    this.doc.context2d.strokeStyle = this._strokeStyle;
    this.doc.context2d.lineWidth = this._lineWidth;
    // TODO: this.doc.context2d.lineCap = this._lineCap;
    // TODO: this.doc.context2d.lineJoin = this._lineJoin;
    this.doc.context2d.font = this._font;
    this.doc.setGState(
      new (this.doc as any).GState({
        opacity: this._fillAlpha * this._globalAlpha,
        "stroke-opacity": this._strokeAlpha * this._globalAlpha,
      })
    );
  }

  save() {
    this.doc.context2d.save();
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
    this.doc.context2d.restore();
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
    this.doc.context2d.translate(x, y);
  }

  scale(x: number, y: number) {
    this.doc.context2d.scale(x, y);
  }

  rotate(angle: number) {
    this.doc.context2d.rotate(angle);
  }

  clip() {
    this.doc.context2d.clip();
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
    // console.log(`setLineDash(${segments})`);
  }

  beginPath() {
    this.doc.context2d.beginPath();
  }

  closePath() {
    this.doc.context2d.closePath();
  }

  moveTo(x: number, y: number) {
    this._assignStyles();
    this.doc.context2d.moveTo(x, y);
  }

  lineTo(x: number, y: number) {
    this._assignStyles();
    this.doc.context2d.lineTo(x, y);
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
    this._assignStyles();
    this.doc.context2d.quadraticCurveTo(cpx, cpy, x, y);
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
    this.doc.context2d.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  stroke() {
    this.doc.context2d.stroke();
  }

  fill() {
    this.doc.context2d.fill();
  }

  rect(x: number, y: number, width: number, height: number) {
    this._assignStyles();
    this.doc.context2d.rect(x, y, width, height);
  }

  fillRect(x: number, y: number, width: number, height: number) {
    this._assignStyles();
    this.doc.context2d.fillRect(x, y, width, height);
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
    this.doc.context2d.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  }

  drawImage(
    image: HTMLImageElement,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
  ) {
    // console.log(
    //   `drawImage(${image.src}, ${sx}, ${sy}, ${sWidth}, ${sHeight}, ${dx}, ${dy}, ${dWidth}, ${dHeight})`
    // );
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
    this.doc.context2d.fillText(text, x, y);
  }
}
