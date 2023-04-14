[property-manager](../README.md) / [Exports](../modules.md) / ability

# Module: ability

## Table of contents

### References

- [default](ability.md#default)

### Interfaces

- [IAbilityMethods](../interfaces/ability.IAbilityMethods.md)
- [IAbilityOption](../interfaces/ability.IAbilityOption.md)

### Type Aliases

- [IAbilityOptions](ability.md#iabilityoptions)
- [PropManagerType](ability.md#propmanagertype)

### Functions

- [PropertyAbility](ability.md#propertyability)

## References

### default

Renames and re-exports [PropertyAbility](ability.md#propertyability)

## Type Aliases

### IAbilityOptions

Ƭ **IAbilityOptions**: [`IAbilityOption`](../interfaces/ability.IAbilityOption.md) \| [`PropManagerType`](ability.md#propmanagertype)

#### Defined in

[src/ability.d.ts:6](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/ability.d.ts#L6)

___

### PropManagerType

Ƭ **PropManagerType**: ``"simple"`` \| ``"advance"`` \| ``"normal"`` \| ``"abstract"``

#### Defined in

[src/ability.d.ts:5](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/ability.d.ts#L5)

## Functions

### PropertyAbility

▸ **PropertyAbility**(`Class`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Class` | `any` |
| `options?` | [`IAbilityOptions`](ability.md#iabilityoptions) |

#### Returns

`any`

#### Defined in

[src/ability.d.ts:18](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/ability.d.ts#L18)
