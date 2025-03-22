/**
 * convert arc command to line segments
 */
export function arcToLineSegments(
  startX: number,
  startY: number,
  rx: number,
  ry: number,
  xAxisRotation: number,
  largeArcFlag: number,
  sweepFlag: number,
  endX: number,
  endY: number,
  segments: number = 20
) {
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  xAxisRotation = (xAxisRotation * Math.PI) / 180; // 도 -> 라디안 변환

  const dx = (startX - endX) / 2;
  const dy = (startY - endY) / 2;

  const cosRot = Math.cos(xAxisRotation);
  const sinRot = Math.sin(xAxisRotation);
  const x1 = cosRot * dx + sinRot * dy;
  const y1 = -sinRot * dx + cosRot * dy;

  const radiiCheck = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
  if (radiiCheck > 1) {
    rx *= Math.sqrt(radiiCheck);
    ry *= Math.sqrt(radiiCheck);
  }

  const sign = largeArcFlag === sweepFlag ? -1 : 1;
  const temp =
    (rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1) /
    (rx * rx * y1 * y1 + ry * ry * x1 * x1);
  const lambda = sign * Math.sqrt(Math.max(0, temp));
  const cx1 = (lambda * (rx * y1)) / ry;
  const cy1 = (lambda * -(ry * x1)) / rx;

  const centerX = cosRot * cx1 - sinRot * cy1 + (startX + endX) / 2;
  const centerY = sinRot * cx1 + cosRot * cy1 + (startY + endY) / 2;

  const startVectorX = (x1 - cx1) / rx;
  const startVectorY = (y1 - cy1) / ry;
  let startAngle = Math.atan2(startVectorY, startVectorX);

  const endVectorX = (-x1 - cx1) / rx;
  const endVectorY = (-y1 - cy1) / ry;
  let endAngle = Math.atan2(endVectorY, endVectorX);

  let deltaAngle = endAngle - startAngle;
  if (sweepFlag === 1 && deltaAngle < 0) {
    deltaAngle += 2 * Math.PI;
  } else if (sweepFlag === 0 && deltaAngle > 0) {
    deltaAngle -= 2 * Math.PI;
  }
  if (largeArcFlag === 1) {
    if (Math.abs(deltaAngle) < Math.PI) {
      deltaAngle += (deltaAngle > 0 ? 2 : -2) * Math.PI;
    }
  } else {
    if (Math.abs(deltaAngle) > Math.PI) {
      deltaAngle -= (deltaAngle > 0 ? 2 : -2) * Math.PI;
    }
  }

  const points = [];
  const step = deltaAngle / segments;
  for (let i = 0; i <= segments; i++) {
    const angle = startAngle + step * i;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = rx * cosAngle;
    const y = ry * sinAngle;
    const finalX = cosRot * x - sinRot * y + centerX;
    const finalY = sinRot * x + cosRot * y + centerY;
    points.push([finalX, finalY]);
  }

  return points;
}
