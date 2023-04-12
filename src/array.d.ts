import { IMergeOptions, PropType } from './abstract';

export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

export type JSONValue = Primitive | JSONObject | JSONArray;

export interface JSONObject {
  [key: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }

export class ArrayPropertyManager extends Array {
  $type: PropType;

  constructor(value: any, type: PropType);
  toJSON(): JSONObject;
  /**
   * convert to the plain object
   * @param options the convert options
   */
  toObject(options?: IMergeOptions): JSONObject;
  valueOf(): JSONObject;
}

export default ArrayPropertyManager

export function arrayOf(type: PropType): (value: any)=>ArrayPropertyManager;
