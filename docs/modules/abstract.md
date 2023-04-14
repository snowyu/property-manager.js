[property-manager](../README.md) / [Exports](../modules.md) / abstract

# Module: abstract

## Table of contents

### References

- [default](abstract.md#default)

### Classes

- [AbstractPropertyManager](../classes/abstract.AbstractPropertyManager.md)

### Interfaces

- [IExportOptions](../interfaces/abstract.IExportOptions.md)
- [IMergeOptions](../interfaces/abstract.IMergeOptions.md)
- [IPropDescriptor](../interfaces/abstract.IPropDescriptor.md)
- [ISimplePropDescriptor](../interfaces/abstract.ISimplePropDescriptor.md)

### Type Aliases

- [PropDescriptor](abstract.md#propdescriptor)
- [PropDescriptors](abstract.md#propdescriptors)
- [PropType](abstract.md#proptype)
- [PropTypeDesc](abstract.md#proptypedesc)
- [SimplePropDescriptor](abstract.md#simplepropdescriptor)
- [SimplePropDescriptors](abstract.md#simplepropdescriptors)
- [SimpleType](abstract.md#simpletype)

## References

### default

Renames and re-exports [AbstractPropertyManager](../classes/abstract.AbstractPropertyManager.md)

## Type Aliases

### PropDescriptor

Ƭ **PropDescriptor**: [`SimpleType`](abstract.md#simpletype) \| [`IPropDescriptor`](../interfaces/abstract.IPropDescriptor.md)

#### Defined in

[src/abstract.d.ts:63](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L63)

___

### PropDescriptors

Ƭ **PropDescriptors**: `Object`

#### Index signature

▪ [name: `string`]: [`PropDescriptor`](abstract.md#propdescriptor)

#### Defined in

[src/abstract.d.ts:64](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L64)

___

### PropType

Ƭ **PropType**: `string` \| `Function`

#### Defined in

[src/abstract.d.ts:1](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L1)

___

### PropTypeDesc

Ƭ **PropTypeDesc**: [`PropType`](abstract.md#proptype) \| [`PropType`](abstract.md#proptype)[]

#### Defined in

[src/abstract.d.ts:2](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L2)

___

### SimplePropDescriptor

Ƭ **SimplePropDescriptor**: [`SimpleType`](abstract.md#simpletype) \| [`ISimplePropDescriptor`](../interfaces/abstract.ISimplePropDescriptor.md)

#### Defined in

[src/abstract.d.ts:61](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L61)

___

### SimplePropDescriptors

Ƭ **SimplePropDescriptors**: `Object`

#### Index signature

▪ [name: `string`]: [`SimplePropDescriptor`](abstract.md#simplepropdescriptor)

#### Defined in

[src/abstract.d.ts:62](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L62)

___

### SimpleType

Ƭ **SimpleType**: `string` \| `number` \| `boolean` \| `any`[] \| ``null`` \| `undefined`

#### Defined in

[src/abstract.d.ts:60](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.d.ts#L60)
