/**
 * Convert image file to HTML image element
 * @param file
 * @returns HTML image element with data-url
 */
export function fileToImageElement(file: File): Promise<HTMLImageElement> {
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
