import { IMergeOptions, PropType } from './abstract';

type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

type JSONValue = Primitive | JSONObject | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

export default class ArrayPropertyManager extends Array {
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

export function arrayOf(type: PropType): (value: any)=>ArrayPropertyManager;
