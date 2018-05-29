export default class AbstractPropertyManager extends Object {
  nonExported1stChar: string;

  constructor(...args: any[]);
  defineProperties(aProperties);
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
