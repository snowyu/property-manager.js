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
  /**
   * the exclude property name(s)
   */
  exclude?: string|string[];
  /**
   * Whether overwrite the dest property
   */
  overwrite?: boolean;
  /**
   * skip if src property is default value.
   */
  skipDefault?: boolean;
  /**
   * skip if src property is readonly
   */
  skipReadOnly?: boolean;
  /**
   * skip if dest property value is exists(isn't undefined)
   */
  skipExists?: boolean;
  /**
   * skip if src property value is null
   */
  skipNull?: boolean;
  /**
   * skip if src property value is undefined
   */
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

/**
 * The Abstract PropertyManager Class
 */
export class AbstractPropertyManager extends Object {
  /**
   * The default options for export and assign
   */
  defaultOptions: {export?: IMergeOptions; assign?: IMergeOptions};
  /**
   * the property with the default prefix '$' will not be exported.
   */
  nonExported1stChar: string;

  constructor(...args: any[]);

  /**
   * Define the attributes of this object.
   *
   * @abstract
   *
   * @param {SimplePropDescriptors} aProperties the defined attributes of the object
   */
  defineProperties(aProperties: SimplePropDescriptors);

  /**
   * Get the defined attributes.
   *
   * @abstract
   *
   * @returns {PropDescriptors} the descriptors of properties object
   */
  getProperties(): PropDescriptors;

  /**
   * Assign the values from the src object.
   * @param {*} src the source object
   * @param {IMergeOptions} aOptions
   * @returns {this} this object
   */
  assign(src, options?: IMergeOptions): this;

  /**
   * Assign a property of src to this object.
   *
   * @param {*} src the src object
   * @param {*} name the property name to assign
   * @param {*} value the property value to assign
   * @param {*} [attrs] the attributes object
   * @param {IMergeOptions} [options]
   */
  assignProperty(src, name: string, value, attrs?, options?: IMergeOptions): void;

  /**
   * Assign the property value from the src to destination object.
   *
   * @abstract
   *
   * @param {*} dest      The destination object
   * @param {*} src       The src object
   * @param {string} name The property name
   * @param {*} value     The property value
   * @param {*=} attrs    The attributes object of the property
   * @param {IMergeOptions} [options]
   */
  assignPropertyTo(dest, src, name: string, value, attrs?, options?: IMergeOptions): void;

  /**
   * Initialize object and assign attribute values from src if src exists.
   *
   * @param {*} [src]
   * @returns {this} this object.
   */
  initialize(src): this;

  /**
   * Create and assign the values to the destination object.
   *
   * @param {*} dest the destination object
   * @param {IMergeOptions} [options]
   * @returns the new dest object
   */
  cloneTo(dest, options?: IMergeOptions): any;

  /**
   * Create a new object with the same values of attributes.
   * @param {IMergeOptions} [options]
   * @returns the new object
   */
  clone(options?: IMergeOptions): any;

  /**
   * Merge this attributes to dest object.
   *
   * @param {*} dest The destination object
   * @param {IMergeOptions} [aOptions]
   * @returns the dest object.
   */
  mergeTo(dest, options?: IMergeOptions): any;

  /**
   * Export attributes to the dest json object.
   *
   * @param {*} dest the destination object
   * @param {IMergeOptions} [aOptions]
   * @returns the dest object.
   */
  exportTo(dest, options?: IExportOptions): any;

  /**
   * Convert the attributes to the json object
   *
   * @param {IMergeOptions} [options]
   * @returns the json object.
   */
  toObject(options?): any;
  toJSON():any;

  /**
   * Assign this attributes to the dest object
   *
   * @param {*} dest the destination object
   * @param {IMergeOptions} [aOptions]
   * @returns the dest object
   */
  assignTo(dest?, options?: IMergeOptions):any;

  /**
   * Check the src object whether “equals” this object.
   *
   * @param {*} src The source object
   * @param {IMergeOptions} [aOptions]
   * @returns {boolean}
   */
  isSame(src: any, options?: IMergeOptions):boolean;
}

export default AbstractPropertyManager
