/**
 * Assert function
 */
export function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Warning function
 */
export function warn(condition: boolean, message: string) {
  if (!condition) {
    console.warn(message);
  }
}
