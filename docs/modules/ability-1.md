[property-manager](../README.md) / [Exports](../modules.md) / ability

# Module: ability

## Table of contents

### References

- [default](ability-1.md#default)

### Functions

- [PropertyAbility](ability-1.md#propertyability)

## References

### default

Renames and re-exports [PropertyAbility](ability-1.md#propertyability)

## Functions

### PropertyAbility

▸ **PropertyAbility**(`targetClass`, `options?`): `Function`

A function that adds(injects) the ability of a specified ability class to a target class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetClass` | `Function` | The target class to which the ability will be added. |
| `options?` | `AbilityOptions` | An optional ability configuration object. |

#### Returns

`Function`

- An injected target class that takes a class and adds the ability to it using the specified
                      options.

#### Defined in

node_modules/custom-ability/lib/custom-ability.d.ts:30
