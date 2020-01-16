export type PropType  = string|Function;
export type PropTypes = PropType[];

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
  type?: PropTypes;
  assign?: (value?, dest?, src?, name?)=>any;
  assigned?: boolean|string;
  exported?: boolean;
  alias?: string[]|string;
  clone?: boolean;
  required?: boolean;
}

export interface IExportOptions {
  exclude?: string|string[];
  overwrite?: boolean;
  skipDefault?: boolean;
  skipReadOnly?: boolean;
  skipExists?: boolean;
  skipNull?: boolean;
  skipUndefined?: boolean;
}

export interface IMergeOptions extends IExportOptions {
  isExported?: boolean;
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
  assignProperty(src, name: string, value, attrs?, options?: IMergeOptions): void;
  assignPropertyTo(dest, src, name: string, value, attrs?, options?: IMergeOptions): void;
  initialize(options): any;
  clone(options): any;
  mergeTo(dest, options?: IMergeOptions): any;
  exportTo(dest, options?: IExportOptions): any;
  toObject(options?): any;
  toJSON():any;
  assignTo(dest, aExclude?: string|string[]):any;
  isSame(aOptions, aExclude?: string|string[]):boolean;
}
