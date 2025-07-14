import { AbstractPropertyManager } from './abstract';

export interface IAbilityMethods {
  [name: string]: Function;
}

export type PropManagerType = 'simple' | 'advance' | 'normal' | 'abstract'
export type IAbilityOptions = IAbilityOption | PropManagerType
export interface IAbilityOption {
  name?: PropManagerType;
  optionsPosition?: number;
  nonExported1stChar?: string;
  exclude?: string[]|string;
  include?: string[]|string;
  methods?: IAbilityMethods;
  classMethods?: IAbilityMethods;
  replacedMethods?: string[];
}

/**
 * Enhances a given class with property management capabilities by injecting
 * prototype methods and behaviors from the AbstractPropertyManager.
 *
 * This function serves as a mixin factory that dynamically extends the prototype
 * chain of the input class to include property management functionality while
 * preserving the original class's constructor signature and instance identity.
 *
 * @template T - The type of the class constructor being enhanced
 * @param Class - The class constructor to enhance with property management features
 * @param options - Configuration options for property management behavior
 *   - When string: shorthand for `{ name: value }`
 *   - When number: shorthand for `{ optionsPosition: value }`
 *   - When object: full configuration with properties:
 *     - name: Property manager type ('simple' | 'advance' | 'normal' | 'abstract')
 *     - optionsPosition: Position of options argument in constructor
 *     - nonExported1stChar: Character prefix for non-exported properties
 *     - exclude/include: Property filtering rules
 *     - methods/classMethods: Custom method definitions
 *     - replacedMethods: List of methods to override
 * @returns A new constructor that combines the original class with property management
 *   functionality. The returned constructor maintains instanceof compatibility with T
 *   while having access to AbstractPropertyManager's prototype methods.
 *
 * @example
 * ```ts
 * class MyBaseClass {
 *   constructor(config) {
 *     this.initialize(config);
 *   }
 * }
 *
 * const EnhancedClass = PropertyAbility(MyBaseClass, {
 *   name: 'advance',
 *   nonExported1stChar: '_'
 * });
 *
 * const instance = new EnhancedClass({ foo: 'bar' });
 * instance.getProperties(); // Access property management functionality
 * ```
 *
 * @remarks
 * - The returned constructor is NOT a new class but the original class with enhanced prototype
 * - Instance identity is preserved: `instanceof MyBaseClass` will still return true
 * - Prototype chain augmentation follows the pattern defined in the AbstractPropertyManager
 * - Method resolution order: Original class methods take precedence over property manager methods
 */
export function PropertyAbility<T=any>(Class: T, options?: IAbilityOptions): T & InternalPropertyManager;

export default PropertyAbility

export interface InternalPropertyManager {
  new(options: Record<string, any>): AbstractPropertyManager;
  prototype: InstanceType<typeof AbstractPropertyManager>;
}
