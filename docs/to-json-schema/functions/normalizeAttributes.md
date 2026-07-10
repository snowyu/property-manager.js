[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [to-json-schema](../README.md) / normalizeAttributes

# Function: normalizeAttributes()

> **normalizeAttributes**(`pm`): `any`

Defined in: [src/to-json-schema.js:110](https://github.com/snowyu/property-manager.js/blob/a4165aa460f3661cfed38e259993ae481926bfa0/src/to-json-schema.js#L110)

Normalizes the attributes of a PropertyManager instance or class.
It extracts property descriptors, inferring types from default values if not explicitly defined.

## Parameters

### pm

`any`

The PropertyManager instance or class.

## Returns

`any`

An object containing normalized property attributes.

## Throws

If the target is not a recognized PropertyManager.
