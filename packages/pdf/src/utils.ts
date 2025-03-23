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

/**
 * Find the geometry that arcTo() uses to draw the path
 *
 * This code comes from the following source:
 * - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo
 * - click "Play" button in the example to see how it works
 */
export function findArcToConstruction(
  P0: number[],
  P1: number[],
  P2: number[],
  r: number,
  canvasSize: number[],
  errorTolCenter: number
) {
  /* Find the center of a circle of radius r having a point T with a
   * tangent in the direction d and the center on the same side of
   * the tangent as dirTan. */
  function findCenter(
    T: number[],
    d: number[],
    r: number,
    dirTan: number[]
  ): number[] {
    /* Find direction of line normal to tangent line
     * Taking larger value to avoid division by 0.
     * a . n = 0. Set smaller component to 1 */
    const dn =
      Math.abs(d[0]) < Math.abs(d[1])
        ? Math2D.point(1, -d[0] / d[1])
        : Math2D.point(-d[1] / d[0], 1);

    /* The normal may be pointing towards center or away.
     * Make towards center if not */
    if (Math2D.dot(dn, dirTan) < 0) {
      dn[0] = -dn[0];
      dn[1] = -dn[1];
    }

    /* Move a distance of the radius along line Tx + t * dn
     * to get to the center of the circle */
    return Math2D.linePointAt(T, r / Math2D.L2(dn), dn);
  }

  /* Test for coincidence. Note that points will have small integer
   * coordinates, so there is no issue with checking for exact
   * equality */
  const dir1 = Math2D.vector(P0[0] - P1[0], P0[1] - P1[1]); // dir line 1
  if (dir1[0] === 0 && dir1[1] === 0) {
    // P0 and P1 coincident
    return [false];
  }

  const dir2 = Math2D.vector(P2[0] - P1[0], P2[1] - P1[1]); // dir of line 2
  if (dir2[0] === 0 && dir2[1] === 0) {
    // P2 and P1 coincident
    return [false];
  }

  /* Magnitudes of direction vectors defining lines */
  const dir1Mag = Math2D.L2(dir1);
  const dir2Mag = Math2D.L2(dir2);

  /* Make direction vectors unit length */
  const dir1_unit = Math2D.vector(dir1[0] / dir1Mag, dir1[1] / dir1Mag);
  const dir2_unit = Math2D.vector(dir2[0] / dir2Mag, dir2[1] / dir2Mag);

  /* Angle between lines -- cos angle = a.b/(|a||b|)
   * Using unit vectors, so |a| = |b| = 1 */
  const dp = Math2D.dot(dir1_unit, dir2_unit);
  /* Test for collinearity */
  if (Math.abs(dp) > 0.999999) {
    /* Angle 0 or 180 degrees, or nearly so */
    return [false];
  }
  const angle = Math.acos(Math2D.dot(dir1_unit, dir2_unit));

  /* Distance to tangent points from P1 --
   * (T1, P1, C) form a right triangle (T2, P1, C) same triangle.
   * An angle of each triangle is half of the angle between the lines
   * tan(angle/2) = r / length(P1,T1) */
  const distToTangent = r / Math.tan(0.5 * angle);

  /* Locate tangent points */
  const T1 = Math2D.linePointAt(P1, distToTangent, dir1_unit);
  const T2 = Math2D.linePointAt(P1, distToTangent, dir2_unit);

  /* Center is along normal to tangent at tangent point at
   * a distance equal to the radius of the circle.
   * Locate center two ways. Should be equal */
  const dirT2_T1 = Math2D.vector(T2[0] - T1[0], T2[1] - T1[1]);
  const dirT1_T2 = Math2D.vector(-dirT2_T1[0], -dirT2_T1[1]);
  const C1 = findCenter(T1, dir1_unit, r, dirT2_T1);
  const C2 = findCenter(T2, dir2_unit, r, dirT1_T2);

  /* Error in center calculations */
  const deltaC = Math2D.vector(C2[0] - C1[0], C2[1] - C1[1]);
  if (deltaC[0] * deltaC[0] + deltaC[1] * deltaC[1] > errorTolCenter) {
    console.error(
      `Programming or numerical error, ` +
        `P0(${P0[0]},${P0[1]}); ` +
        `P1(${P1[0]},${P1[1]}); ` +
        `P2(${P2[0]},${P2[1]}); ` +
        `r=${r};`
    );
  }

  /* Average the center values */
  const C = Math2D.point(C1[0] + 0.5 * deltaC[0], C1[1] + 0.5 * deltaC[1]);

  /* Find the "infinite values" of the two semi-infinite lines.
   * As a practical consideration, anything off the canvas is
   * infinite. A distance equal to the height + width of the canvas
   * is assured to be sufficiently far away and has the advantage of
   * being easily found. */
  const distToInf = canvasSize[0] + canvasSize[1];
  const L1inf = Math2D.linePointAt(P1, distToInf, dir1_unit);
  const L2inf = Math2D.linePointAt(P1, distToInf, dir2_unit);

  return [true, L1inf, L2inf, T1, T2, C];
} /* end of function findConstruction */

/* Some math for 2-D vectors */
class Math2D {
  /* Create new point */
  static point(x = 0, y = 0): number[] {
    return [x, y];
  }

  /* Create new vector */
  static vector(x = 0, y = 0): number[] {
    return this.point(x, y);
  }

  /* Subtraction: difference = minuend - subtrahend */
  static subtract(
    difference: number[],
    minuend: number[],
    subtrahend: number[]
  ) {
    difference[0] = minuend[0] - subtrahend[0];
    difference[1] = minuend[1] - subtrahend[1];
  }

  /* Find L2 norm */
  static L2(a: number[]): number {
    return Math.hypot(a[0], a[1]);
  }

  /* Dot product */
  static dot(a: number[], b: number[]): number {
    return a[0] * b[0] + a[1] * b[1];
  }

  /* Find point on line defined parametrically by
   * L = P0 + t * direction */
  static linePointAt(P0: number[], t: number, dir: number[]): number[] {
    return this.point(P0[0] + t * dir[0], P0[1] + t * dir[1]);
  }
} /* end of class Math2D */
