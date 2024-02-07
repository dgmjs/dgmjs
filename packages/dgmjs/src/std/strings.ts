/**
 * Returns a unique name (token + number) in the namespace.
 * e.g.) generateName("Property", ...) -> "Property1", "Property2", ...
 */
function generateName(token: string, namespace: string[] = []): string {
  let seq = 1;
  while (true) {
    let name = `${token}${seq}`;
    if (!namespace.includes(name)) {
      return name;
    }
    seq++;
  }
}

/**
 * Returns a string converted to camel case
 * @param str
 * @param firstUpper
 * @param space
 */
function toCamelCase(
  str: string,
  firstUpper: boolean = false,
  space: boolean = false
): string {
  let result = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  if (firstUpper)
    result = result.substring(0, 1).toUpperCase() + result.substring(1);
  if (space) result = result.replace(/[A-Z]/g, (m) => " " + m).trim();
  return result;
}

export { generateName, toCamelCase };
