export type PropType      = string|Function;
export type PropTypeDesc  = PropType|PropType[];

export interface ISimplePropDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?: Function;
  set?: Function;
  [name: string]: any;
}

export interface IPropDescriptor extends ISimplePropDescriptor {
  name?: string;
  type?: PropTypeDesc;
  assign?: (value?, dest?, src?, name?, options?: IMergeOptions)=>any;
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
  defaultOptions: {export?: IMergeOptions; assign?: IMergeOptions};
  nonExported1stChar: string;

  constructor(...args: any[]);
  defineProperties(aProperties: SimplePropDescriptors);
  getProperties();
  assign(src, options?: IMergeOptions): any;
  assignProperty(src, name: string, value, attrs?, options?: IMergeOptions): void;
  assignPropertyTo(dest, src, name: string, value, attrs?, options?: IMergeOptions): void;
  initialize(src): any;
  cloneTo(dest, options?: IMergeOptions);
  clone(options?: IMergeOptions): any;
  mergeTo(dest, options?: IMergeOptions): any;
  exportTo(dest, options?: IExportOptions): any;
  toObject(options?): any;
  toJSON():any;
  assignTo(dest?, options?: IMergeOptions):any;
  isSame(src, options?: IMergeOptions):boolean;
}
