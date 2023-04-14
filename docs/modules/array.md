[property-manager](../README.md) / [Exports](../modules.md) / array

# Module: array

## Table of contents

### References

- [default](array.md#default)

### Classes

- [ArrayPropertyManager](../classes/array.ArrayPropertyManager.md)

### Interfaces

- [JSONArray](../interfaces/array.JSONArray.md)
- [JSONObject](../interfaces/array.JSONObject.md)

### Type Aliases

- [JSONValue](array.md#jsonvalue)
- [Primitive](array.md#primitive)

### Functions

- [arrayOf](array.md#arrayof)

## References

### default

Renames and re-exports [ArrayPropertyManager](../classes/array.ArrayPropertyManager.md)

## Type Aliases

### JSONValue

Ƭ **JSONValue**: [`Primitive`](array.md#primitive) \| [`JSONObject`](../interfaces/array.JSONObject.md) \| [`JSONArray`](../interfaces/array.JSONArray.md)

#### Defined in

[src/array.d.ts:12](https://github.com/snowyu/property-manager.js/blob/95356d9/src/array.d.ts#L12)

___

### Primitive

Ƭ **Primitive**: `bigint` \| `boolean` \| ``null`` \| `number` \| `string` \| `symbol` \| `undefined`

#### Defined in

[src/array.d.ts:3](https://github.com/snowyu/property-manager.js/blob/95356d9/src/array.d.ts#L3)

## Functions

### arrayOf

▸ **arrayOf**(`type`): (`value`: `any`) => [`ArrayPropertyManager`](../classes/array.ArrayPropertyManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`PropType`](abstract.md#proptype) |

#### Returns

`fn`

▸ (`value`): [`ArrayPropertyManager`](../classes/array.ArrayPropertyManager.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

[`ArrayPropertyManager`](../classes/array.ArrayPropertyManager.md)

#### Defined in

[src/array.d.ts:35](https://github.com/snowyu/property-manager.js/blob/95356d9/src/array.d.ts#L35)
