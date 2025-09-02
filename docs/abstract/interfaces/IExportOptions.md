[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [abstract](../README.md) / IExportOptions

# Interface: IExportOptions

Defined in: [src/abstract.d.ts:26](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L26)

## Extended by

- [`IMergeOptions`](IMergeOptions.md)

## Properties

### exclude?

> `optional` **exclude**: `string` \| `string`[]

Defined in: [src/abstract.d.ts:30](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L30)

the exclude property name(s)

***

### overwrite?

> `optional` **overwrite**: `boolean`

Defined in: [src/abstract.d.ts:34](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L34)

Whether overwrite the dest property

***

### skipDefault?

> `optional` **skipDefault**: `boolean`

Defined in: [src/abstract.d.ts:38](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L38)

skip if src property is default value.

***

### skipExists?

> `optional` **skipExists**: `boolean`

Defined in: [src/abstract.d.ts:46](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L46)

skip if dest property value is exists(isn't undefined)

***

### skipNull?

> `optional` **skipNull**: `boolean`

Defined in: [src/abstract.d.ts:50](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L50)

skip if src property value is null

***

### skipReadOnly?

> `optional` **skipReadOnly**: `boolean`

Defined in: [src/abstract.d.ts:42](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L42)

skip if src property is readonly

***

### skipUndefined?

> `optional` **skipUndefined**: `boolean`

Defined in: [src/abstract.d.ts:54](https://github.com/snowyu/property-manager.js/blob/0a9d329d6dc8235fcbd7381e69042a60653674b6/src/abstract.d.ts#L54)

skip if src property value is undefined
