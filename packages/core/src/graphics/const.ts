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

/**
 * Mouse cursor is considered at a point if the distance is less than threshold
 * @type {number}
 */
const MAGNET_THRESHOLD = 6; // px
const LINE_SELECTION_THRESHOLD = MAGNET_THRESHOLD;
const LINE_STRATIFY_ANGLE_THRESHOLD = 10;
const CONTROL_POINT_APOTHEM = 4; // px
const CONNECTION_POINT_APOTHEM = 4; // px
const ANGLE_STEP = 5;
const SHAPE_MIN_SIZE = 3;
const SYSTEM_FONT = "Inter";
const DEFAULT_FONT_SIZE = 16;

// Cursor SVG Data is a string of URL-encoded SVG with {{angle}} parameter.
const CURSOR_RESIZE_SVG_DATA = `url('data:image/svg+xml;utf8,%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22rotate%28{{angle}}%209%209%29%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_305_323%29%22%3E%3Cg%20filter%3D%22url%28%23filter0_d_305_323%29%22%3E%3Cpath%20d%3D%22M6%206L9.5%202.5M9.5%202.5L13%206M9.5%202.5V16.5M13%2013L9.5%2016.5M9.5%2016.5L6%2013%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M7%205L9.5%202.5M9.5%202.5L12%205M9.5%202.5V16.5M12%2014L9.5%2016.5M9.5%2016.5L7%2014%22%20stroke%3D%22black%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d_305_323%22%20x%3D%223.93933%22%20y%3D%22-0.621338%22%20width%3D%2211.1213%22%20height%3D%2220.2427%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%220.5%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_305_323%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_305_323%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3CclipPath%20id%3D%22clip0_305_323%22%3E%3Crect%20width%3D%2219%22%20height%3D%2219%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
const CURSOR_ROTATE_SVG_DATA = `url('data:image/svg+xml;utf8,%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url%28%23clip0_414_323%29%22%3E%0A%3Cg%20filter%3D%22url%28%23filter0_d_414_323%29%22%3E%0A%3Cpath%20d%3D%22M15.5%2010C15.5%206.68629%2012.8137%204%209.5%204C6.18629%204%203.5%206.68629%203.5%2010%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%2F%3E%0A%3Cpath%20d%3D%22M13%208L15.5%2010.5L18%208%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%2F%3E%0A%3Cpath%20d%3D%22M6%208L3.5%2010.5L1%208%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M1.5%208.5L3.5%2010.5L5.5%208.5M17.5%208.5L15.5%2010.5L13.5%208.5%22%20stroke%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M15.5%2010C15.5%206.68629%2012.8137%204%209.5%204C6.18629%204%203.5%206.68629%203.5%2010%22%20stroke%3D%22black%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_414_323%22%20x%3D%22-1.06067%22%20y%3D%221.5%22%20width%3D%2221.1213%22%20height%3D%2212.1213%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%220.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_414_323%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_414_323%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3CclipPath%20id%3D%22clip0_414_323%22%3E%0A%3Crect%20width%3D%2219%22%20height%3D%2219%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A')`;

/**
 * Cursor for editor
 */
const Cursor = Object.freeze({
  RESIZE: `${CURSOR_RESIZE_SVG_DATA} 9 9, pointer`,
  ROTATE: `${CURSOR_ROTATE_SVG_DATA} 9 9, pointer`,
  DEFAULT: "default",
  CROSSHAIR: "crosshair",
  TEXT: "text",
  WAIT: "wait",
  GRAB: "grab",
  GRABBING: "grabbing",
  MOVE: "move",
  POINTER: "pointer",
});

/**
 * Mouse buttons constants
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
 */
const Mouse = Object.freeze({
  BUTTON1: 0, // main button (left button)
  BUTTON2: 1, // auxiliary button (wheel or middle button)
  BUTTON3: 2, // secondary button (right button)
});

const Color = Object.freeze({
  BACKGROUND: "$background",
  FOREGROUND: "$foreground",
  CANVAS: "$slate1", // #F5F5F5
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  DARK_GRAY: "#404040",
  LIGHT_GRAY: "#C0C0C0",
  RED: "#FF0000",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
  CYAN: "#00FFFF",
  MAGENTA: "#FF00FF",
  ORANGE: "#FFC800",
  PINK: "#FFAFAF",
  YELLOW: "#FFFF00",
  SELECTION: "$blue10",
  GRID: "$slate4",
});

const StrokePattern = Object.freeze({
  SOLID: [],
  DOTTED: [3],
  DASHED: [6, 4],
});

const SizingPosition = Object.freeze({
  TOP: "t",
  RIGHT: "r",
  BOTTOM: "b",
  LEFT: "l",
  LEFT_TOP: "lt",
  RIGHT_TOP: "rt",
  RIGHT_BOTTOM: "rb",
  LEFT_BOTTOM: "lb",
});

const FontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 128];

export {
  MAGNET_THRESHOLD,
  LINE_SELECTION_THRESHOLD,
  LINE_STRATIFY_ANGLE_THRESHOLD,
  CONTROL_POINT_APOTHEM,
  CONNECTION_POINT_APOTHEM,
  ANGLE_STEP,
  SHAPE_MIN_SIZE,
  SYSTEM_FONT,
  DEFAULT_FONT_SIZE,
  Cursor,
  Mouse,
  Color,
  StrokePattern,
  SizingPosition,
  FontSizes,
};
