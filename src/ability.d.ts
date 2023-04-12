export interface IAbilityMethods {
  [name: string]: Function;
}

export type PropManagerType = 'simple' | 'advance' | 'normal' | 'abstract'
export type IAbilityOptions = IAbilityOption | PropManagerType
export interface IAbilityOption {
  name?: string;
  optionsPosition?: number;
  nonExported1stChar?: string;
  exclude?: string[]|string;
  include?: string[]|string;
  methods?: IAbilityMethods;
  classMethods?: IAbilityMethods;
  replacedMethods?: string[];
}

export function PropertyAbility(Class, options?: IAbilityOptions)

export default PropertyAbility
