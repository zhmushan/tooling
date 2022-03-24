import type { ParseFn, StringifyFn } from "./converter";
import highlighter from "highlight.js/lib/languages/yaml";
import * as YAML from "@/vendor/yaml.js";

const name = "yaml";

const parse: ParseFn = (text) => YAML.parse(text);
const stringify: StringifyFn = (value) => YAML.stringify(value);

export { name, parse, stringify, highlighter };
