/**
 * Return caritian product of two arrays.
 * e.g.) cartisian([1, 2, 3], ['A', 'B'])
 *       --> [[1, 'A'], [1, 'B'], [2, 'A'], [2, 'B'], [3, 'A'], [3, 'B']]
 */
export function cartisian<T = any, R = any>(
  A1: Array<T>,
  A2: Array<R>
): Array<[T, R]> {
  let r: Array<[T, R]> = [];
  for (let a1 of A1) {
    for (let a2 of A2) {
      r.push([a1, a2]);
    }
  }
  return r;
}

/**
 * Return array which eliminates duplications
 * e.g.) unique([1, 2, 2, 3, 4, 4]) --> [1, 2, 3, 4]
 */
export function unique(A: Array<any>): Array<any> {
  return Array.from(new Set(A).values());
}

/**
 * Return array which eliminates undefined elements
 * e.g.) trime([1, undefined, 2]) --> [1, 2]
 */
export function trim(A: Array<any>): Array<any> {
  return A.filter((i) => typeof i !== "undefined");
}
