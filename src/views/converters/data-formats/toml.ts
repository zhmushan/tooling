import type { ParseFn, StringifyFn } from "./converter";
import highlighter from "highlight.js/lib/languages/ini";
import * as TOML from "@/vendor/toml.js";

const name = "toml";

const parse: ParseFn = (text) => TOML.parse(text);
const stringify: StringifyFn = (value) => TOML.stringify(value);

export { name, parse, stringify, highlighter };
