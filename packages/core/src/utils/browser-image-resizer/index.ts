// -----------------------------------------------------------------------------
// Copy from https://github.com/ericnograles/browser-image-resizer
// -----------------------------------------------------------------------------

export function dataURItoBuffer(dataURI: any) {
  let byteString = atob(dataURI.split(",")[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return ab;
}

export function dataURIToBlob(dataURI: any) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  let byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  let ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  let ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  let blob = new Blob([ab], { type: mimeString });
  return blob;
}

export function initializeOrGetImg() {
  return document.createElement("img");
}

export function initializeOrGetCanvas() {
  return document.createElement("canvas");
}

function findMaxWidth(config: any, canvas: any) {
  //Let's find the max available width for scaled image
  let ratio = canvas.width / canvas.height;
  let mWidth = Math.min(
    canvas.width,
    config.maxWidth,
    ratio * config.maxHeight
  );
  if (
    config.maxSize > 0 &&
    config.maxSize < (canvas.width * canvas.height) / 1000
  )
    mWidth = Math.min(
      mWidth,
      Math.floor((config.maxSize * 1000) / canvas.height)
    );
  if (!!config.scaleRatio)
    mWidth = Math.min(mWidth, Math.floor(config.scaleRatio * canvas.width));

  if (config.debug) {
    console.log(
      "browser-image-resizer: original image size = " +
        canvas.width +
        " px (width) X " +
        canvas.height +
        " px (height)"
    );
    console.log(
      "browser-image-resizer: scaled image size = " +
        mWidth +
        " px (width) X " +
        Math.floor(mWidth / ratio) +
        " px (height)"
    );
  }
  if (mWidth <= 0) {
    mWidth = 1;
    console.warn("browser-image-resizer: image size is too small");
  }

  return mWidth;
}

function scaleCanvasWithAlgorithm(canvas: any, config: any) {
  let scaledCanvas: any = document.createElement("canvas");

  let scale = config.outputWidth / canvas.width;

  scaledCanvas.width = canvas.width * scale;
  scaledCanvas.height = canvas.height * scale;

  let srcImgData: any = canvas
    .getContext("2d")
    .getImageData(0, 0, canvas.width, canvas.height);
  let destImgData: any = scaledCanvas
    .getContext("2d")
    .createImageData(scaledCanvas.width, scaledCanvas.height);

  applyBilinearInterpolation(srcImgData, destImgData, scale);

  scaledCanvas.getContext("2d").putImageData(destImgData, 0, 0);

  return scaledCanvas;
}

function getHalfScaleCanvas(canvas: any) {
  let halfCanvas: any = document.createElement("canvas");
  halfCanvas.width = canvas.width / 2;
  halfCanvas.height = canvas.height / 2;

  halfCanvas
    .getContext("2d")
    .drawImage(canvas, 0, 0, halfCanvas.width, halfCanvas.height);

  return halfCanvas;
}

function applyBilinearInterpolation(
  srcCanvasData: any,
  destCanvasData: any,
  scale: any
) {
  function inner(f00: any, f10: any, f01: any, f11: any, x: any, y: any) {
    let un_x = 1.0 - x;
    let un_y = 1.0 - y;
    return f00 * un_x * un_y + f10 * x * un_y + f01 * un_x * y + f11 * x * y;
  }
  let i, j;
  let iyv, iy0, iy1, ixv, ix0, ix1;
  let idxD, idxS00, idxS10, idxS01, idxS11;
  let dx, dy;
  let r, g, b, a;
  for (i = 0; i < destCanvasData.height; ++i) {
    iyv = i / scale;
    iy0 = Math.floor(iyv);
    // Math.ceil can go over bounds
    iy1 =
      Math.ceil(iyv) > srcCanvasData.height - 1
        ? srcCanvasData.height - 1
        : Math.ceil(iyv);
    for (j = 0; j < destCanvasData.width; ++j) {
      ixv = j / scale;
      ix0 = Math.floor(ixv);
      // Math.ceil can go over bounds
      ix1 =
        Math.ceil(ixv) > srcCanvasData.width - 1
          ? srcCanvasData.width - 1
          : Math.ceil(ixv);
      idxD = (j + destCanvasData.width * i) * 4;
      // matrix to vector indices
      idxS00 = (ix0 + srcCanvasData.width * iy0) * 4;
      idxS10 = (ix1 + srcCanvasData.width * iy0) * 4;
      idxS01 = (ix0 + srcCanvasData.width * iy1) * 4;
      idxS11 = (ix1 + srcCanvasData.width * iy1) * 4;
      // overall coordinates to unit square
      dx = ixv - ix0;
      dy = iyv - iy0;
      // I let the r, g, b, a on purpose for debugging
      r = inner(
        srcCanvasData.data[idxS00],
        srcCanvasData.data[idxS10],
        srcCanvasData.data[idxS01],
        srcCanvasData.data[idxS11],
        dx,
        dy
      );
      destCanvasData.data[idxD] = r;

      g = inner(
        srcCanvasData.data[idxS00 + 1],
        srcCanvasData.data[idxS10 + 1],
        srcCanvasData.data[idxS01 + 1],
        srcCanvasData.data[idxS11 + 1],
        dx,
        dy
      );
      destCanvasData.data[idxD + 1] = g;

      b = inner(
        srcCanvasData.data[idxS00 + 2],
        srcCanvasData.data[idxS10 + 2],
        srcCanvasData.data[idxS01 + 2],
        srcCanvasData.data[idxS11 + 2],
        dx,
        dy
      );
      destCanvasData.data[idxD + 2] = b;

      a = inner(
        srcCanvasData.data[idxS00 + 3],
        srcCanvasData.data[idxS10 + 3],
        srcCanvasData.data[idxS01 + 3],
        srcCanvasData.data[idxS11 + 3],
        dx,
        dy
      );
      destCanvasData.data[idxD + 3] = a;
    }
  }
}

export function scaleImage({ img, config, orientation = 1 }: any = {}) {
  let canvas = initializeOrGetCanvas();
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx: any = canvas.getContext("2d");
  if (config.mimeType === "image/jpeg") {
    // Only apply to JPEGs, white background default, see #42 and #66
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
  }

  // EXIF
  ctx.drawImage(img, 0, 0);
  ctx.restore();

  let maxWidth = findMaxWidth(config, canvas);

  while (canvas.width >= 2 * maxWidth) {
    canvas = getHalfScaleCanvas(canvas);
  }

  if (canvas.width > maxWidth) {
    canvas = scaleCanvasWithAlgorithm(
      canvas,
      Object.assign(config, { outputWidth: maxWidth })
    );
  }

  let imageData = canvas.toDataURL(config.mimeType, config.quality);
  if (typeof config.onScale === "function") config.onScale(imageData);
  return dataURIToBlob(imageData);
}

const DEFAULT_CONFIG = {
  quality: 0.5,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true,
  debug: false,
  mimeType: "image/jpeg",
};

export interface Config {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  debug?: boolean;
  mimeType?: string;
}

export function readAndCompressImage(
  fileOrBlob: File | Blob,
  userConfig: Config
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    let img = initializeOrGetImg();
    let reader = new FileReader();
    let config = Object.assign({}, DEFAULT_CONFIG, userConfig);

    reader.onload = function (e: any) {
      img.onerror = function () {
        reject("cannot load image.");
      };
      img.onload = function () {
        let scaleImageOptions = { img, config };
        try {
          let blob = scaleImage(scaleImageOptions);
          resolve(blob);
        } catch (err) {
          reject(err);
        }
      };
      img.src = e.target.result as any;
    };

    try {
      reader.onerror = function () {
        reject("cannot read image file.");
      };
      reader.readAsDataURL(fileOrBlob);
    } catch (err) {
      reject(err);
    }
  });
}
