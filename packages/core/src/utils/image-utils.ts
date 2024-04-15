import { readAndCompressImage } from "./browser-image-resizer";

/**
 * Convert image file to HTML image element
 * @param fileOrBlob
 * @returns HTML image element with data-url
 */
export function fileToImage(
  fileOrBlob: File | Blob
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(fileOrBlob);
    reader.addEventListener("load", () => {
      const dataUrl = reader.result as string;
      let image = new Image();
      image.src = dataUrl;
      image.onload = () => {
        resolve(image);
      };
    });
  });
}

/**
 * Convert blob to HTML image element
 * @param blob
 * @returns HTML image element with data-url
 */
function blobToImage(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result as string;
      const image = new Image();
      image.src = dataUrl;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (e) => {
        reject(e);
      };
    };
    reader.onerror = function () {
      reject(reader.error);
    };
    reader.readAsDataURL(blob);
  });
}

export interface ResizeImageOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
}

/**
 * Resize image file
 */
export async function resizeImage(
  fileOrBlob: File | Blob,
  options?: ResizeImageOptions
): Promise<HTMLImageElement> {
  if (fileOrBlob.type === "image/svg+xml") {
    return fileToImage(fileOrBlob);
  } else {
    const defaultOptions = {
      quality: 0.7,
      maxWidth: 800,
      maxHeight: 800,
      mimeType: fileOrBlob.type,
    };
    const resizedImage = await readAndCompressImage(
      fileOrBlob,
      Object.assign(defaultOptions, options)
    );
    return await blobToImage(resizedImage);
  }
}
