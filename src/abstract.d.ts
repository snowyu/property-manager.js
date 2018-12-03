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
  type?: string|(string|Function)[];
  assign?: (value?, dest?, src?, name?)=>any;
  assigned?: boolean|string;
  exported?: boolean;
  alias?: string[]|string;
  clone?: boolean;
  required?: boolean;
}

export type SimpleType = string|number|boolean|any[]|null|undefined;
export type SimplePropDescriptor = SimpleType | ISimplePropDescriptor;
export type SimplePropDescriptors = {[name: string]: SimplePropDescriptor};
export type PropDescriptor = SimpleType | IPropDescriptor;
export type PropDescriptors = {[name: string]: PropDescriptor};

export default class AbstractPropertyManager extends Object {
  nonExported1stChar: string;

  constructor(...args: any[]);
  defineProperties(aProperties: SimplePropDescriptors);
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
