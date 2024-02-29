import { nanoid } from "nanoid";

/**
 * Generate unique id
 */
export function generateId(): string {
  return nanoid();
}

/**
 * Generate hash number from string
 */
export function hashStringToNumber(str: string): number {
  let arr = str.split("");
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
}
