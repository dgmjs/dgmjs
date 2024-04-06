import { readAndCompressImage } from "./browser-image-resizer";

/**
 * Convert image file to HTML image element
 * @param file
 * @returns HTML image element with data-url
 */
export function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
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
  file: File,
  options?: ResizeImageOptions
): Promise<HTMLImageElement> {
  if (file.type === "image/svg+xml") {
    return fileToImage(file);
  } else {
    const defaultOptions = {
      quality: 0.7,
      maxWidth: 800,
      maxHeight: 800,
      mimeType: file.type,
    };
    const resizedImage = await readAndCompressImage(
      file,
      Object.assign(defaultOptions, options)
    );
    return await blobToImage(resizedImage);
  }
}
