import { nanoid } from "nanoid";

/**
 * Generate unique id
 */
export function generateId(): string {
  return nanoid();
}
