[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [to-json-schema](../README.md) / toJsonSchema

# Function: toJsonSchema()

> **toJsonSchema**(`pm`): `any`

Defined in: [src/to-json-schema.js:172](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/to-json-schema.js#L172)

Converts a PropertyManager class or instance into a JSON Schema object.
It recursively processes nested PropertyManager types and handles various property attributes
like type, default value, description, and required status.

## Parameters

### pm

`any`

The PropertyManager instance or class to convert.

## Returns

`any`

A JSON Schema representation of the PropertyManager.
