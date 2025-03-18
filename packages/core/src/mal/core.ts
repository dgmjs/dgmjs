import type { MalType } from "./types";
import {
  Node,
  MalSymbol,
  MalFunction,
  MalNil,
  MalList,
  MalVector,
  MalBoolean,
  MalNumber,
  MalString,
  MalKeyword,
  MalHashMap,
  MalAtom,
  equals,
  isSeq,
} from "./types";
import { readStr } from "./reader";
import { prStr } from "./printer";
import { js_to_mal, mal_to_js } from "./interop";

/**
 * compare equality
 * e.g.)
 *   (= 1 2) => false
 *   (= "a" "a") => true
 */
function mal_equals(a: MalType, b: MalType): MalBoolean {
  return new MalBoolean(equals(a, b));
}

/**
 * throw an error
 * e.g.)
 *   (throw "my-error") => thrown object
 */
function mal_throw(v: MalType): MalType {
  throw v;
}

/**
 * not operator
 * e.g.)
 *   (not true) => false
 *   (not false) => true
 */
function mal_not(v: MalType) {
  return new MalBoolean(v.type === Node.Boolean && !v.v);
}

/**
 * query nil or not
 * e.g.)
 *   (nil? nil) => true
 *   (nil? true) => false
 */
function mal_nilQ(v: MalType) {
  return new MalBoolean(v.type === Node.Nil);
}

/**
 * query value is true or not
 * e.g.)
 *   (true? true) => true
 *   (true? 100) => false
 */
function mal_trueQ(v: MalType) {
  return new MalBoolean(v.type === Node.Boolean && v.v);
}

/**
 * query value is false or not
 * e.g.)
 *   (false? false) => true
 *   (false? 0) => false
 */
function mal_falseQ(v: MalType) {
  return new MalBoolean(v.type === Node.Boolean && !v.v);
}

/**
 * query value is string or not
 * e.g.)
 *   (string? "ipsum") => true
 *   (string? 100) => false
 */
function mal_stringQ(v: MalType) {
  return new MalBoolean(v.type === Node.String);
}

/**
 * returns a symbol (if already exists) or create a new symbol
 * e.g.)
 *   (symbol "name") => Symbol("name")
 */
function mal_symbol(v: MalType) {
  if (v.type !== Node.String) {
    throw new Error(`unexpected symbol: ${v.type}, expected: string`);
  }
  return MalSymbol.get(v.v);
}

/**
 * query value is symbol or not
 * e.g.)
 *   (symbol? (symbol "ipsum")) => true
 *   (symbol? "ipsum") => false
 */
function mal_symbolQ(v: MalType) {
  return new MalBoolean(v.type === Node.Symbol);
}

/**
 * returns a keyword (if already exists) or create a new keyword
 * e.g.)
 *   (keyword "name") => :name (keyword)
 */
function mal_keyword(v: MalType) {
  if (v.type === Node.Keyword) {
    return v;
  }
  if (v.type !== Node.String) {
    throw new Error(`unexpected symbol: ${v.type}, expected: string`);
  }
  return MalKeyword.get(v.v);
}

/**
 * query value is keyword or not
 * e.g.)
 *   (keyword? (keyword "ipsum")) => true
 *   (keyword? (symbol "ipsum")) => false
 *   (keyword? "ipsum") => false
 */
function mal_keywordQ(v: MalType) {
  return new MalBoolean(v.type === Node.Keyword);
}

/**
 * query value is number or not
 * e.g.)
 *   (number? 10) => true
 *   (number? true) => false
 *   (number? "ipsum") => false
 */
function mal_numberQ(v: MalType) {
  return new MalBoolean(v.type === Node.Number);
}

function mal_fnQ(v: MalType) {
  return new MalBoolean(v.type === Node.Function && !v.isMacro);
}

function mal_macroQ(v: MalType) {
  return new MalBoolean(v.type === Node.Function && v.isMacro);
}

function mal_prStr(...args: MalType[]): MalString {
  return new MalString(args.map((v) => prStr(v, true)).join(" "));
}

function mal_str(...args: MalType[]): MalString {
  return new MalString(args.map((v) => prStr(v, false)).join(""));
}

function mal_prn(...args: MalType[]): MalNil {
  const str = args.map((v) => prStr(v, true)).join(" ");
  console.log(str);
  return MalNil.instance;
}

function mal_println(...args: MalType[]): MalNil {
  const str = args.map((v) => prStr(v, false)).join(" ");
  console.log(str);
  return MalNil.instance;
}

function mal_readString(v: MalType) {
  if (v.type !== Node.String) {
    throw new Error(`unexpected symbol: ${v.type}, expected: string`);
  }
  return readStr(v.v);
}

function mal_lessThan(a: MalType, b: MalType): MalBoolean {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalBoolean(a.v < b.v);
}

function mal_lessThanEqual(a: MalType, b: MalType): MalBoolean {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalBoolean(a.v <= b.v);
}

function mal_greaterThan(a: MalType, b: MalType): MalBoolean {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalBoolean(a.v > b.v);
}

function mal_greaterThanEqual(a: MalType, b: MalType): MalBoolean {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalBoolean(a.v >= b.v);
}

function mal_add(a: MalType, b: MalType): MalNumber {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalNumber(a.v + b.v);
}

function mal_subtract(a: MalType, b: MalType): MalNumber {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalNumber(a.v - b.v);
}

function mal_multiply(a: MalType, b: MalType): MalNumber {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalNumber(a.v * b.v);
}

function mal_divide(a: MalType, b: MalType): MalNumber {
  if (a.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${a.type}, expected: number`);
  }
  if (b.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${b.type}, expected: number`);
  }
  return new MalNumber(a.v / b.v);
}

function mal_timeMs() {
  return new MalNumber(Date.now());
}

function mal_list(...args: MalType[]): MalList {
  return new MalList(args);
}

function mal_listQ(v: MalType): MalBoolean {
  return new MalBoolean(v.type === Node.List);
}

function mal_vector(...args: MalType[]): MalVector {
  return new MalVector(args);
}

function mal_vectorQ(v: MalType): MalBoolean {
  return new MalBoolean(v.type === Node.Vector);
}

function mal_hashMap(...args: MalType[]) {
  return new MalHashMap(args);
}

function mal_mapQ(v: MalType): MalBoolean {
  return new MalBoolean(v.type === Node.HashMap);
}

function mal_assoc(v: MalType, ...args: MalType[]) {
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  return v.assoc(args);
}

function mal_dissoc(v: MalType, ...args: MalType[]) {
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  return v.dissoc(args);
}

function mal_get(v: MalType, key: MalType) {
  if (v.type === Node.Nil) {
    return MalNil.instance;
  }
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  if (key.type !== Node.String && key.type !== Node.Keyword) {
    throw new Error(
      `unexpected symbol: ${key.type}, expected: string or keyword`
    );
  }
  return v.get(key) || MalNil.instance;
}

function mal_containsQ(v: MalType, key: MalType) {
  if (v.type === Node.Nil) {
    return MalNil.instance;
  }
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  if (key.type !== Node.String && key.type !== Node.Keyword) {
    throw new Error(
      `unexpected symbol: ${key.type}, expected: string or keyword`
    );
  }
  return new MalBoolean(v.has(key));
}

function mal_keys(v: MalType) {
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  return new MalList([...v.keys()]);
}

function mal_vals(v: MalType) {
  if (v.type !== Node.HashMap) {
    throw new Error(`unexpected symbol: ${v.type}, expected: hash-map`);
  }
  return new MalList([...v.vals()]);
}

function mal_sequentialQ(v: MalType) {
  return new MalBoolean(isSeq(v));
}

function mal_cons(a: MalType, b: MalType) {
  if (!isSeq(b)) {
    throw new Error(`unexpected symbol: ${b.type}, expected: list or vector`);
  }
  return new MalList([a].concat(b.list));
}

function mal_concat(...args: MalType[]) {
  const list = args
    .map((arg) => {
      if (!isSeq(arg)) {
        throw new Error(
          `unexpected symbol: ${arg.type}, expected: list or vector`
        );
      }
      return arg;
    })
    .reduce((p, c) => p.concat(c.list), [] as MalType[]);

  return new MalList(list);
}

function mal_vec(a: MalType) {
  switch (a.type) {
    case Node.List:
      return new MalVector(a.list);
    case Node.Vector:
      return a;
  }
  throw new Error(`unexpected symbol: ${a.type}, expected: list or vector`);
}

function mal_nth(list: MalType, idx: MalType) {
  if (!isSeq(list)) {
    throw new Error(
      `unexpected symbol: ${list.type}, expected: list or vector`
    );
  }
  if (idx.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${idx.type}, expected: number`);
  }
  const v = list.list[idx.v];
  if (!v) {
    throw new Error("nth: index out of range");
  }
  return v;
}

function mal_first(v: MalType) {
  if (v.type === Node.Nil) {
    return MalNil.instance;
  }
  if (!isSeq(v)) {
    throw new Error(`unexpected symbol: ${v.type}, expected: list or vector`);
  }
  return v.list[0] || MalNil.instance;
}

function mal_rest(v: MalType) {
  if (v.type === Node.Nil) {
    return new MalList([]);
  }
  if (!isSeq(v)) {
    throw new Error(`unexpected symbol: ${v.type}, expected: list or vector`);
  }
  return new MalList(v.list.slice(1));
}

function mal_emptyQ(v: MalType): MalBoolean {
  if (!isSeq(v)) {
    return new MalBoolean(false);
  }
  return new MalBoolean(v.list.length === 0);
}

function mal_count(v: MalType): MalNumber {
  if (isSeq(v)) {
    return new MalNumber(v.list.length);
  }
  if (v.type === Node.Nil) {
    return new MalNumber(0);
  }
  throw new Error(`unexpected symbol: ${v.type}`);
}

function mal_apply(f: MalType, ...list: MalType[]) {
  if (f.type !== Node.Function) {
    throw new Error(`unexpected symbol: ${f.type}, expected: function`);
  }
  const tail = list[list.length - 1];
  if (!isSeq(tail)) {
    throw new Error(
      `unexpected symbol: ${tail.type}, expected: list or vector`
    );
  }
  const args = list.slice(0, -1).concat(tail.list);
  return f.func(...args);
}

function mal_map(f: MalType, list: MalType) {
  if (f.type !== Node.Function) {
    throw new Error(`unexpected symbol: ${f.type}, expected: function`);
  }
  if (!isSeq(list)) {
    throw new Error(
      `unexpected symbol: ${list.type}, expected: list or vector`
    );
  }
  return new MalList(list.list.map((v) => f.func(v)));
}

function mal_conj(list: MalType, ...args: MalType[]) {
  switch (list.type) {
    case Node.List:
      const newList = new MalList(list.list);
      args.forEach((arg) => newList.list.unshift(arg));
      return newList;
    case Node.Vector:
      return new MalVector([...list.list, ...args]);
  }
  throw new Error(`unexpected symbol: ${list.type}, expected: list or vector`);
}

function mal_seq(v: MalType) {
  if (v.type === Node.List) {
    if (v.list.length === 0) {
      return MalNil.instance;
    }
    return v;
  }
  if (v.type === Node.Vector) {
    if (v.list.length === 0) {
      return MalNil.instance;
    }
    return new MalList(v.list);
  }
  if (v.type === Node.String) {
    if (v.v.length === 0) {
      return MalNil.instance;
    }
    return new MalList(v.v.split("").map((s) => new MalString(s)));
  }
  if (v.type === Node.Nil) {
    return MalNil.instance;
  }
  throw new Error(
    `unexpected symbol: ${v.type}, expected: list or vector or string`
  );
}

function mal_meta(v: MalType) {
  return v.meta || MalNil.instance;
}

function mal_withMeta(v: MalType, m: MalType) {
  return v.withMeta(m);
}

function mal_atom(v: MalType): MalAtom {
  return new MalAtom(v);
}

function mal_atomQ(v: MalType): MalBoolean {
  return new MalBoolean(v.type === Node.Atom);
}

function mal_deref(v: MalType): MalType {
  if (v.type !== Node.Atom) {
    throw new Error(`unexpected symbol: ${v.type}, expected: atom`);
  }
  return v.v;
}

function mal_resetBang(atom: MalType, v: MalType): MalType {
  if (atom.type !== Node.Atom) {
    throw new Error(`unexpected symbol: ${atom.type}, expected: atom`);
  }
  atom.v = v;
  return v;
}

function mal_swapBang(atom: MalType, f: MalType, ...args: MalType[]): MalType {
  if (atom.type !== Node.Atom) {
    throw new Error(`unexpected symbol: ${atom.type}, expected: atom`);
  }
  if (f.type !== Node.Function) {
    throw new Error(`unexpected symbol: ${f.type}, expected: function`);
  }
  atom.v = f.func(...[atom.v].concat(args));
  return atom.v;
}

/**
 * cond statement (originally defined with "defmacro!" in Mal)
 */
function mal_cond(...args: MalType[]): MalType {
  if (args.length % 2 !== 0) {
    throw new Error(`odd number of forms to cond`);
  }
  for (let i = 0; i < args.length; i += 2) {
    const cond = args[i];
    const expr = args[i + 1];
    if (cond.type === Node.Keyword && cond.v === "else") {
      return expr;
    }
    if (cond.type === Node.Nil) {
      continue;
    }
    if (cond.type === Node.Boolean && !cond.v) {
      continue;
    }
    return expr;
  }
  return MalNil.instance;
}

/**
 * Access/call a field/function of a js-object.
 * e.g.)
 *   let obj = {
 *     name: "Hello"
 *     fun: (arg1, arg2) => {
 *       return arg1 + arg2;
 *     }
 *   }
 *
 *   (. obj :name) => "Hello"
 *   (. obj :nonfield) => nil
 *   (. obj :fun 100 200) => 300
 */
function mal_js_access(o: MalType, f: MalType, ...args: MalType[]): MalType {
  if (o.type !== Node.JSObject) {
    throw new Error(`unexpected symbol: ${o.type}, expected: js-object`);
  }
  if (f.type !== Node.String && f.type !== Node.Keyword) {
    throw new Error(
      `unexpected symbol: ${f.type}, expected: string or keyword`
    );
  }
  const v = o.obj[f.v];
  if (typeof v === "function") {
    const r = v.call(o.obj, ...args.map((v) => mal_to_js(v)));
    return js_to_mal(r);
  } else {
    return js_to_mal(v);
  }
}

/**
 * Math PI
 */
const mal_pi = new MalNumber(Math.PI);

/**
 * Math absolute value
 */
function mal_abs(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.abs(x.v));
}

/**
 * Math ceiling
 */
function mal_ceil(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.ceil(x.v));
}

/**
 * Math floor
 */
function mal_floor(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.floor(x.v));
}

/**
 * Math truncate
 */
function mal_trunc(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.trunc(x.v));
}

/**
 * Math cosine
 */
function mal_cos(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.cos(x.v));
}

/**
 * Math sine
 */
function mal_sin(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.sin(x.v));
}

/**
 * Math tangent
 */
function mal_tan(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.tan(x.v));
}

/**
 * Math arc cosine
 */
function mal_acos(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.acos(x.v));
}

/**
 * Math arc sine
 */
function mal_asin(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.asin(x.v));
}

/**
 * Math arc tangent
 */
function mal_atan(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.atan(x.v));
}

/**
 * Math power
 */
function mal_pow(x: MalType, y: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  if (y.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${y.type}, expected: number`);
  }
  return new MalNumber(Math.pow(x.v, y.v));
}

/**
 * Math square root
 */
function mal_sqrt(x: MalType): MalType {
  if (x.type !== Node.Number) {
    throw new Error(`unexpected symbol: ${x.type}, expected: number`);
  }
  return new MalNumber(Math.sqrt(x.v));
}

/**
 * Math max
 */
function mal_max(...args: MalType[]): MalType {
  let vs = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].type !== Node.Number) {
      throw new Error(`unexpected symbol: ${args[i].type}, expected: number`);
    }
    vs.push((args[i] as MalNumber).v);
  }
  return new MalNumber(Math.max(...vs));
}

/**
 * Math min
 */
function mal_min(...args: MalType[]): MalType {
  let vs = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].type !== Node.Number) {
      throw new Error(`unexpected symbol: ${args[i].type}, expected: number`);
    }
    vs.push((args[i] as MalNumber).v);
  }
  return new MalNumber(Math.min(...vs));
}

/**
 * Built-in constants
 */
export const consts: Map<MalSymbol, MalType> = (() => {
  const ns: Record<string, MalType> = {
    pi: mal_pi,
  };
  const map = new Map<MalSymbol, MalType>();
  Object.keys(ns).forEach((key) => map.set(MalSymbol.get(key), ns[key]));
  return map;
})();

/**
 * Buit-in functions
 */
export const ns: Map<MalSymbol, MalFunction> = (() => {
  const ns: Record<string, typeof MalFunction.prototype.func> = {
    "=": mal_equals,
    throw: mal_throw,
    not: mal_not,
    "nil?": mal_nilQ,
    "true?": mal_trueQ,
    "false?": mal_falseQ,
    "string?": mal_stringQ,
    symbol: mal_symbol,
    "symbol?": mal_symbolQ,
    keyword: mal_keyword,
    "keyword?": mal_keywordQ,
    "number?": mal_numberQ,
    "fn?": mal_fnQ,
    "macro?": mal_macroQ,
    "pr-str": mal_prStr,
    str: mal_str,
    prn: mal_prn,
    println: mal_println,
    "read-string": mal_readString,
    "<": mal_lessThan,
    "<=": mal_lessThanEqual,
    ">": mal_greaterThan,
    ">=": mal_greaterThanEqual,
    "+": mal_add,
    "-": mal_subtract,
    "*": mal_multiply,
    "/": mal_divide,
    "time-ms": mal_timeMs,
    list: mal_list,
    "list?": mal_listQ,
    vector: mal_vector,
    "vector?": mal_vectorQ,
    "hash-map": mal_hashMap,
    "map?": mal_mapQ,
    assoc: mal_assoc,
    dissoc: mal_dissoc,
    get: mal_get,
    "contains?": mal_containsQ,
    keys: mal_keys,
    vals: mal_vals,
    "sequential?": mal_sequentialQ,
    cons: mal_cons,
    concat: mal_concat,
    vec: mal_vec,
    nth: mal_nth,
    first: mal_first,
    rest: mal_rest,
    "empty?": mal_emptyQ,
    count: mal_count,
    apply: mal_apply,
    map: mal_map,
    conj: mal_conj,
    seq: mal_seq,
    meta: mal_meta,
    "with-meta": mal_withMeta,
    atom: mal_atom,
    "atom?": mal_atomQ,
    deref: mal_deref,
    "reset!": mal_resetBang,
    "swap!": mal_swapBang,
    cond: mal_cond,
    ".": mal_js_access,
    abs: mal_abs,
    ceil: mal_ceil,
    floor: mal_floor,
    trunc: mal_trunc,
    cos: mal_cos,
    sin: mal_sin,
    tan: mal_tan,
    acos: mal_acos,
    asin: mal_asin,
    atan: mal_atan,
    pow: mal_pow,
    sqrt: mal_sqrt,
    max: mal_max,
    min: mal_min,
  };

  const map = new Map<MalSymbol, MalFunction>();
  Object.keys(ns).forEach((key) =>
    map.set(MalSymbol.get(key), MalFunction.fromBootstrap(ns[key]))
  );
  return map;
})();
