[property-manager](../README.md) / [Exports](../modules.md) / [abstract](../modules/abstract.md) / IExportOptions

# Interface: IExportOptions

[abstract](../modules/abstract.md).IExportOptions

## Hierarchy

- **`IExportOptions`**

  ↳ [`IMergeOptions`](abstract.IMergeOptions.md)

## Table of contents

### Properties

- [exclude](abstract.IExportOptions.md#exclude)
- [overwrite](abstract.IExportOptions.md#overwrite)
- [skipDefault](abstract.IExportOptions.md#skipdefault)
- [skipExists](abstract.IExportOptions.md#skipexists)
- [skipNull](abstract.IExportOptions.md#skipnull)
- [skipReadOnly](abstract.IExportOptions.md#skipreadonly)
- [skipUndefined](abstract.IExportOptions.md#skipundefined)

## Properties

### exclude

• `Optional` **exclude**: `string` \| `string`[]

the exclude property name(s)

#### Defined in

[src/abstract.d.ts:30](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L30)

___

### overwrite

• `Optional` **overwrite**: `boolean`

Whether overwrite the dest property

#### Defined in

[src/abstract.d.ts:34](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L34)

___

### skipDefault

• `Optional` **skipDefault**: `boolean`

skip if src property is default value.

#### Defined in

[src/abstract.d.ts:38](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L38)

___

### skipExists

• `Optional` **skipExists**: `boolean`

skip if dest property value is exists(isn't undefined)

#### Defined in

[src/abstract.d.ts:46](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L46)

___

### skipNull

• `Optional` **skipNull**: `boolean`

skip if src property value is null

#### Defined in

[src/abstract.d.ts:50](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L50)

___

### skipReadOnly

• `Optional` **skipReadOnly**: `boolean`

skip if src property is readonly

#### Defined in

[src/abstract.d.ts:42](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L42)

___

### skipUndefined

• `Optional` **skipUndefined**: `boolean`

skip if src property value is undefined

#### Defined in

[src/abstract.d.ts:54](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L54)
