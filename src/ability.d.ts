export interface IAbilityMethods {
  [name: string]: Function;
}

type PropManagerType = 'simple' | 'advance' | 'normal'
type IAbilityOptions = IAbilityOption | PropManagerType
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

export default function(Class, options?: IAbilityOptions)
