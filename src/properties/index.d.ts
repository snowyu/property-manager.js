import { IExportOptions, IMergeOptions } from '../abstract';

/**
 * Collection the advanced attribute descriptors
 *
 */
export class Properties {
  /**
   * Indicates that the property will not be exported, defaults to '$'
   */
  nonExported1stChar: string;

  /**
   * Collection the advanced attribute descriptors
   *
   * @param {*} aOptions
   * @param {string} nonExported1stChar Indicates that the property will not be exported
   */
  constructor(attrs, nonExported1stChar?: string);
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

export default Properties
