[property-manager](../README.md) / [Exports](../modules.md) / [abstract](../modules/abstract.md) / IPropDescriptor

# Interface: IPropDescriptor

[abstract](../modules/abstract.md).IPropDescriptor

## Hierarchy

- [`ISimplePropDescriptor`](abstract.ISimplePropDescriptor.md)

  ↳ **`IPropDescriptor`**

## Table of contents

### Properties

- [alias](abstract.IPropDescriptor.md#alias)
- [assign](abstract.IPropDescriptor.md#assign)
- [assigned](abstract.IPropDescriptor.md#assigned)
- [clone](abstract.IPropDescriptor.md#clone)
- [configurable](abstract.IPropDescriptor.md#configurable)
- [enumerable](abstract.IPropDescriptor.md#enumerable)
- [exported](abstract.IPropDescriptor.md#exported)
- [get](abstract.IPropDescriptor.md#get)
- [name](abstract.IPropDescriptor.md#name)
- [required](abstract.IPropDescriptor.md#required)
- [set](abstract.IPropDescriptor.md#set)
- [skipDefault](abstract.IPropDescriptor.md#skipdefault)
- [type](abstract.IPropDescriptor.md#type)
- [value](abstract.IPropDescriptor.md#value)
- [writable](abstract.IPropDescriptor.md#writable)

## Properties

### alias

• `Optional` **alias**: `string` \| `string`[]

#### Defined in

[src/abstract.d.ts:20](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L20)

___

### assign

• `Optional` **assign**: (`value?`: `any`, `dest?`: `any`, `src?`: `any`, `name?`: `any`, `options?`: [`IMergeOptions`](abstract.IMergeOptions.md)) => `any`

#### Type declaration

▸ (`value?`, `dest?`, `src?`, `name?`, `options?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |
| `dest?` | `any` |
| `src?` | `any` |
| `name?` | `any` |
| `options?` | [`IMergeOptions`](abstract.IMergeOptions.md) |

##### Returns

`any`

#### Defined in

[src/abstract.d.ts:17](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L17)

___

### assigned

• `Optional` **assigned**: `string` \| `boolean`

#### Defined in

[src/abstract.d.ts:18](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L18)

___

### clone

• `Optional` **clone**: `boolean`

#### Defined in

[src/abstract.d.ts:21](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L21)

___

### configurable

• `Optional` **configurable**: `boolean`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[configurable](abstract.ISimplePropDescriptor.md#configurable)

#### Defined in

[src/abstract.d.ts:5](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L5)

___

### enumerable

• `Optional` **enumerable**: `boolean`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[enumerable](abstract.ISimplePropDescriptor.md#enumerable)

#### Defined in

[src/abstract.d.ts:6](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L6)

___

### exported

• `Optional` **exported**: `boolean`

#### Defined in

[src/abstract.d.ts:19](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L19)

___

### get

• `Optional` **get**: `Function`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[get](abstract.ISimplePropDescriptor.md#get)

#### Defined in

[src/abstract.d.ts:9](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L9)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/abstract.d.ts:15](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L15)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[src/abstract.d.ts:22](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L22)

___

### set

• `Optional` **set**: `Function`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[set](abstract.ISimplePropDescriptor.md#set)

#### Defined in

[src/abstract.d.ts:10](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L10)

___

### skipDefault

• `Optional` **skipDefault**: `boolean`

#### Defined in

[src/abstract.d.ts:23](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L23)

___

### type

• `Optional` **type**: [`PropTypeDesc`](../modules/abstract.md#proptypedesc)

#### Defined in

[src/abstract.d.ts:16](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L16)

___

### value

• `Optional` **value**: `any`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[value](abstract.ISimplePropDescriptor.md#value)

#### Defined in

[src/abstract.d.ts:7](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L7)

___

### writable

• `Optional` **writable**: `boolean`

#### Inherited from

[ISimplePropDescriptor](abstract.ISimplePropDescriptor.md).[writable](abstract.ISimplePropDescriptor.md#writable)

#### Defined in

[src/abstract.d.ts:8](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L8)
