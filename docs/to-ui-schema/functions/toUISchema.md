[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [to-ui-schema](../README.md) / toUISchema

# Function: toUISchema()

> **toUISchema**(`pm`): `any`

Defined in: [src/to-ui-schema.js:11](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/to-ui-schema.js#L11)

Converts a PropertyManager class or instance into a RJSF uiSchema object.
It recursively processes nested PropertyManager types and handles various property attributes
like writable status.

## Parameters

### pm

`any`

The PropertyManager instance or class to convert.

## Returns

`any`

A RJSF uiSchema representation of the PropertyManager.
