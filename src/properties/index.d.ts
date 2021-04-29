import { IExportOptions, IMergeOptions } from '../abstract';

export default class Properties {
  nonExported1stChar: string;
  extends(attrs, nonExported1stChar?: string): Properties;
  merge(attrs?: any): any;
  mergeTo(attrs?: any, dest?: any): any;
  mergePropertyTo(dest, name, attr): void;
  initialize(attrs?: any): void;
  initializeTo(dest: any, src?: any, options?: IExportOptions): void;
  getRealAttrName(name: string): string;
  validatePropertyValue(name, value, attr, raiseError): boolean;
  assignPropertyTo(dest, src, name, value, options?: IMergeOptions): void;
  assignTo(dest, src, aOptions?: IMergeOptions): any;
  isDefaultObject(obj): boolean;
  getValue(obj, aName): any;
}
