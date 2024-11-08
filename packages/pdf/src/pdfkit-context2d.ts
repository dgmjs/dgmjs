import colorString from "color-string";
import { font } from "pdfkit";

export class PDFKitContext2D {
  doc: any;
  _fillStyle: string;
  _strokeStyle: string;
  _globalAlpha: number;
  _lineWidth: number;
  _lineCap: string;
  _lineJoin: string;
  _fontSize: number;
  stateStack: any[];

  constructor(doc: any) {
    this.doc = doc;
    this._fillStyle = "#ffffff";
    this._strokeStyle = "#000000";
    this._globalAlpha = 1;
    this._lineWidth = 1;
    this._lineCap = "butt";
    this._lineJoin = "miter";
    this._fontSize = 16;
    this.stateStack = [];
    this.doc
      .fillColor(this._fillStyle)
      .strokeColor(this._strokeStyle)
      .opacity(this._globalAlpha)
      .lineWidth(this._lineWidth)
      .lineCap(this._lineCap)
      .lineJoin(this._lineJoin)
      .fontSize(this._fontSize);
  }

  save() {
    this.stateStack.push({
      fillStyle: this._fillStyle,
      globalAlpha: this._globalAlpha,
      strokeStyle: this._strokeStyle,
      lineWidth: this._lineWidth,
      lineCap: this._lineCap,
      lineJoin: this._lineJoin,
      fontSize: this._fontSize,
    });
  }

  restore() {
    const state = this.stateStack.pop();
    this._fillStyle = state.fillStyle;
    this._globalAlpha = state.globalAlpha;
    this._strokeStyle = state.strokeStyle;
    this._lineWidth = state.lineWidth;
    this._lineCap = state.lineCap;
    this._lineJoin = state.lineJoin;
    this._fontSize = state.fontSize;
    this.doc
      .fillColor(this._fillStyle)
      .strokeColor(this._strokeStyle)
      .opacity(this._globalAlpha)
      .lineWidth(this._lineWidth)
      .lineCap(this._lineCap)
      .lineJoin(this._lineJoin)
      .fontSize(this._fontSize);
  }

  translate(x: number, y: number) {
    this.doc.translate(x, y);
  }

  scale(x: number, y: number) {
    this.doc.scale(x, y);
  }

  rotate(angle: number) {
    this.doc.rotate(angle);
  }

  clip() {
    this.doc.clip();
  }

  set fillStyle(value: string) {
    const rgba = colorString.get.rgb(value);
    const alpha = rgba.length > 3 ? rgba[3] : 1;
    const hex = colorString.to.hex([rgba[0], rgba[1], rgba[2]]);
    this.doc.fillColor(hex);
    this.doc.fillOpacity(alpha);
  }

  set strokeStyle(value: string) {
    const rgba = colorString.get.rgb(value);
    const alpha = rgba.length > 3 ? rgba[3] : 1;
    const hex = colorString.to.hex([rgba[0], rgba[1], rgba[2]]);
    this.doc.strokeColor(hex);
    this.doc.strokeOpacity(alpha);
  }

  set globalAlpha(value: number) {
    this.doc.opacity(value);
  }

  set lineWidth(value: number) {
    this.doc.lineWidth(value);
  }

  set lineCap(value: string) {
    this.doc.lineCap(value);
  }

  set lineJoin(value: string) {
    this.doc.lineJoin(value);
  }

  setLineDash(segments: number[]) {
    console.log(`setLineDash(${segments})`);
  }

  beginPath() {
    console.log("beginPath()");
  }

  closePath() {
    console.log("closePath()");
  }

  moveTo(x: number, y: number) {
    this.doc.moveTo(x, y);
  }

  lineTo(x: number, y: number) {
    this.doc.lineTo(x, y);
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
    this.doc.quadraticCurveTo(cpx, cpy, x, y);
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ) {
    this.doc.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  stroke() {
    this.doc.stroke();
  }

  fill() {
    this.doc.fill();
  }

  rect(x: number, y: number, width: number, height: number) {
    this.doc.rect(x, y, width, height);
  }

  fillRect(x: number, y: number, width: number, height: number) {
    this.doc.rect(x, y, width, height);
  }

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean
  ) {
    console.log(
      `arc(${x}, ${y}, ${radius}, ${startAngle}, ${endAngle}, ${anticlockwise})`
    );
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
    console.log(
      `drawImage(${image.src}, ${sx}, ${sy}, ${sWidth}, ${sHeight}, ${dx}, ${dy}, ${dWidth}, ${dHeight})`
    );
  }

  measureText(text: string) {
    console.log(`measureText(${text})`);
    return {
      width: 0,
      fontBoundingBoxDescent: 0,
      fontBoundingBoxAscent: 0,
      actualBoundingBoxAscent: 0,
      actualBoundingBoxDescent: 0,
    };
  }

  fillText(text: string, x: number, y: number) {
    this.doc.font("Times-Roman").text(text, x, y);
  }
}
