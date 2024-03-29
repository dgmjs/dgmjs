function _drawToContext(
  ctx: CanvasRenderingContext2D,
  drawing: any,
  fixedDecimals?: number,
  rule: CanvasFillRule = "nonzero"
) {
  ctx.beginPath();
  for (const item of drawing.ops) {
    const data =
      typeof fixedDecimals === "number" && fixedDecimals >= 0
        ? item.data.map((d: any) => +d.toFixed(fixedDecimals))
        : item.data;
    switch (item.op) {
      case "move":
        ctx.moveTo(data[0], data[1]);
        break;
      case "bcurveTo":
        ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
        break;
      case "lineTo":
        ctx.lineTo(data[0], data[1]);
        break;
    }
  }
  if (drawing.type === "fillPath") {
    ctx.fill(rule);
  } else {
    ctx.stroke();
  }
}

function fillSketch(ctx: CanvasRenderingContext2D, drawing: any, o: any) {
  let fweight = o.fillWeight;
  if (fweight < 0) {
    fweight = o.strokeWidth / 2;
  }
  ctx.save();
  if (o.fillLineDash) {
    ctx.setLineDash(o.fillLineDash);
  }
  if (o.fillLineDashOffset) {
    ctx.lineDashOffset = o.fillLineDashOffset;
  }
  ctx.strokeStyle = o.fill || "";
  ctx.lineWidth = fweight;
  _drawToContext(ctx, drawing, o.fixedDecimalPlaceDigits);
  ctx.restore();
}

/**
 * Draw rough drawable object generated by rough.generator
 */
export function roughDraw(ctx: CanvasRenderingContext2D, drawable: any): void {
  const sets = drawable.sets || [];
  const o = drawable.options;
  const precision = drawable.options.fixedDecimalPlaceDigits;
  for (const drawing of sets) {
    switch (drawing.type) {
      case "path":
        ctx.save();
        ctx.strokeStyle = o.stroke === "none" ? "transparent" : o.stroke;
        ctx.lineWidth = o.strokeWidth;
        if (o.strokeLineDash) {
          ctx.setLineDash(o.strokeLineDash);
        }
        if (o.strokeLineDashOffset) {
          ctx.lineDashOffset = o.strokeLineDashOffset;
        }
        _drawToContext(ctx, drawing, precision);
        ctx.restore();
        break;
      case "fillPath": {
        ctx.save();
        ctx.fillStyle = o.fill || "";
        const fillRule: CanvasFillRule =
          drawable.shape === "curve" ||
          drawable.shape === "polygon" ||
          drawable.shape === "path"
            ? "evenodd"
            : "nonzero";
        _drawToContext(ctx, drawing, precision, fillRule);
        ctx.restore();
        break;
      }
      case "fillSketch":
        fillSketch(ctx, drawing, o);
        break;
    }
  }
}
