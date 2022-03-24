import type { ParseFn, StringifyFn } from "./converter";
import highlighter from "highlight.js/lib/languages/json";

const name = "json";

const parse: ParseFn = (text) => JSON.parse(text);
const stringify: StringifyFn = (value) => JSON.stringify(value, undefined, 2);

export { name, parse, stringify, highlighter };
