export type ParseFn = (text: string) => Record<string, unknown>;
export type StringifyFn = (value: Record<string, unknown>) => string;
export interface Converter {
  parse: ParseFn;
  stringify: StringifyFn;
}
