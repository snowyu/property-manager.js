import { Func } from "mocha";

export interface ISimplePropDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?: Function;
  set?: Function;
}

export interface IPropDescriptor extends ISimplePropDescriptor {
  name?: string;
  type?: string;
  assign?: (value?, dest?, src?, name?)=>any;
  assigned?: boolean|string;
  exported?: boolean;
  alias?: string[]|string;
  clone?: boolean;
}

export type SimpleType = any[]|string|number|boolean|null|undefined;

export default class AbstractPropertyManager extends Object {
  nonExported1stChar: string;

  constructor(...args: any[]);
  defineProperties(aProperties: {[name: string]: ISimplePropDescriptor|SimpleType});
  getProperties();
  assign(options: any, aExclude?: string|string[]): any;
  assignProperty(options, name: string, value, attrs?, skipDefaultValue?: boolean): void;
  assignPropertyTo(dest, src, name: string, value, attrs?, skipDefaultValue?: boolean, isExported?: boolean): void;
  initialize(options): any;
  clone(options): any;
  mergeTo(dest, aExclude?: string|string[], skipDefault?: boolean, skipReadOnly?: boolean, isExported?: boolean): any;
  exportTo(dest, aExclude?: string|string[], skipDefault?: boolean, skipReadOnly?: boolean): any;
  toObject(options?): any;
  toJSON():any;
  assignTo(dest, aExclude?: string|string[]):any;
  isSame(aOptions, aExclude?: string|string[]):boolean;
}
