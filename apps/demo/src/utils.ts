/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Return array which eliminates duplications
 * e.g.) unique([1, 2, 2, 3, 4, 4]) --> [1, 2, 3, 4]
 */
export function unique(A: Array<any>): Array<any> {
  return Array.from(new Set(A).values());
}

/**
 * Return the homogenous value if array items are all same,
 * otherwise return initial.
 */
export function merge<T>(
  values: T[],
  stringifiedCompare: boolean = false,
  initial: T | undefined = undefined
): T | undefined {
  const vs = unique(
    stringifiedCompare ? values.map((v) => JSON.stringify(v)) : values
  );
  return vs.length !== 1
    ? initial
    : stringifiedCompare
    ? JSON.parse(vs[0])
    : vs[0];
}

export function toPascalCaseWithSpace(str: string) {
  return str
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}
