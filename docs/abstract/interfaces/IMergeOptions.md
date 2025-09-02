[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [abstract](../README.md) / IMergeOptions

# Interface: IMergeOptions

Defined in: [src/abstract.d.ts:57](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L57)

## Extends

- [`IExportOptions`](IExportOptions.md)

## Properties

### exclude?

> `optional` **exclude**: `string` \| `string`[]

Defined in: [src/abstract.d.ts:30](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L30)

the exclude property name(s)

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`exclude`](IExportOptions.md#exclude)

***

### isExported?

> `optional` **isExported**: `boolean`

Defined in: [src/abstract.d.ts:58](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L58)

***

### overwrite?

> `optional` **overwrite**: `boolean`

Defined in: [src/abstract.d.ts:34](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L34)

Whether overwrite the dest property

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`overwrite`](IExportOptions.md#overwrite)

***

### skipDefault?

> `optional` **skipDefault**: `boolean`

Defined in: [src/abstract.d.ts:38](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L38)

skip if src property is default value.

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`skipDefault`](IExportOptions.md#skipdefault)

***

### skipExists?

> `optional` **skipExists**: `boolean`

Defined in: [src/abstract.d.ts:46](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L46)

skip if dest property value is exists(isn't undefined)

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`skipExists`](IExportOptions.md#skipexists)

***

### skipNull?

> `optional` **skipNull**: `boolean`

Defined in: [src/abstract.d.ts:50](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L50)

skip if src property value is null

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`skipNull`](IExportOptions.md#skipnull)

***

### skipReadOnly?

> `optional` **skipReadOnly**: `boolean`

Defined in: [src/abstract.d.ts:42](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L42)

skip if src property is readonly

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`skipReadOnly`](IExportOptions.md#skipreadonly)

***

### skipUndefined?

> `optional` **skipUndefined**: `boolean`

Defined in: [src/abstract.d.ts:54](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L54)

skip if src property value is undefined

#### Inherited from

[`IExportOptions`](IExportOptions.md).[`skipUndefined`](IExportOptions.md#skipundefined)
