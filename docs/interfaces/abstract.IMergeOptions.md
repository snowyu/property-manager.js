[property-manager](../README.md) / [Exports](../modules.md) / [abstract](../modules/abstract.md) / IMergeOptions

# Interface: IMergeOptions

[abstract](../modules/abstract.md).IMergeOptions

## Hierarchy

- [`IExportOptions`](abstract.IExportOptions.md)

  ↳ **`IMergeOptions`**

## Table of contents

### Properties

- [exclude](abstract.IMergeOptions.md#exclude)
- [isExported](abstract.IMergeOptions.md#isexported)
- [overwrite](abstract.IMergeOptions.md#overwrite)
- [skipDefault](abstract.IMergeOptions.md#skipdefault)
- [skipExists](abstract.IMergeOptions.md#skipexists)
- [skipNull](abstract.IMergeOptions.md#skipnull)
- [skipReadOnly](abstract.IMergeOptions.md#skipreadonly)
- [skipUndefined](abstract.IMergeOptions.md#skipundefined)

## Properties

### exclude

• `Optional` **exclude**: `string` \| `string`[]

the exclude property name(s)

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[exclude](abstract.IExportOptions.md#exclude)

#### Defined in

[src/abstract.d.ts:30](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L30)

___

### isExported

• `Optional` **isExported**: `boolean`

#### Defined in

[src/abstract.d.ts:58](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L58)

___

### overwrite

• `Optional` **overwrite**: `boolean`

Whether overwrite the dest property

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[overwrite](abstract.IExportOptions.md#overwrite)

#### Defined in

[src/abstract.d.ts:34](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L34)

___

### skipDefault

• `Optional` **skipDefault**: `boolean`

skip if src property is default value.

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[skipDefault](abstract.IExportOptions.md#skipdefault)

#### Defined in

[src/abstract.d.ts:38](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L38)

___

### skipExists

• `Optional` **skipExists**: `boolean`

skip if dest property value is exists(isn't undefined)

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[skipExists](abstract.IExportOptions.md#skipexists)

#### Defined in

[src/abstract.d.ts:46](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L46)

___

### skipNull

• `Optional` **skipNull**: `boolean`

skip if src property value is null

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[skipNull](abstract.IExportOptions.md#skipnull)

#### Defined in

[src/abstract.d.ts:50](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L50)

___

### skipReadOnly

• `Optional` **skipReadOnly**: `boolean`

skip if src property is readonly

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[skipReadOnly](abstract.IExportOptions.md#skipreadonly)

#### Defined in

[src/abstract.d.ts:42](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L42)

___

### skipUndefined

• `Optional` **skipUndefined**: `boolean`

skip if src property value is undefined

#### Inherited from

[IExportOptions](abstract.IExportOptions.md).[skipUndefined](abstract.IExportOptions.md#skipundefined)

#### Defined in

[src/abstract.d.ts:54](https://github.com/snowyu/property-manager.js/blob/121fb68/src/abstract.d.ts#L54)
