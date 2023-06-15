[property-manager](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [AbstractPropertyManager](index-1.md#abstractpropertymanager)
- [AdvancePropertyManager](index-1.md#advancepropertymanager)
- [ArrayPropertyManager](index-1.md#arraypropertymanager)
- [IAbilityMethods](index-1.md#iabilitymethods)
- [IAbilityOption](index-1.md#iabilityoption)
- [IAbilityOptions](index-1.md#iabilityoptions)
- [IExportOptions](index-1.md#iexportoptions)
- [IMergeOptions](index-1.md#imergeoptions)
- [IPropDescriptor](index-1.md#ipropdescriptor)
- [ISimplePropDescriptor](index-1.md#isimplepropdescriptor)
- [JSONArray](index-1.md#jsonarray)
- [JSONObject](index-1.md#jsonobject)
- [JSONValue](index-1.md#jsonvalue)
- [NormalPropertyManager](index-1.md#normalpropertymanager)
- [Primitive](index-1.md#primitive)
- [PropDescriptor](index-1.md#propdescriptor)
- [PropDescriptors](index-1.md#propdescriptors)
- [PropManagerType](index-1.md#propmanagertype)
- [PropType](index-1.md#proptype)
- [PropTypeDesc](index-1.md#proptypedesc)
- [Properties](index-1.md#properties)
- [PropertyAbility](index-1.md#propertyability)
- [SimplePropDescriptor](index-1.md#simplepropdescriptor)
- [SimplePropDescriptors](index-1.md#simplepropdescriptors)
- [SimplePropertyManager](index-1.md#simplepropertymanager)
- [SimpleType](index-1.md#simpletype)
- [arrayOf](index-1.md#arrayof)
- [assignValue](index-1.md#assignvalue)
- [default](index-1.md#default)

### Functions

- [defineProperties](index-1.md#defineproperties)

## References

### AbstractPropertyManager

Re-exports [AbstractPropertyManager](../classes/abstract.AbstractPropertyManager.md)

___

### AdvancePropertyManager

Re-exports [AdvancePropertyManager](../classes/advance.AdvancePropertyManager.md)

___

### ArrayPropertyManager

Re-exports [ArrayPropertyManager](../classes/array.ArrayPropertyManager.md)

___

### IAbilityMethods

Re-exports [IAbilityMethods](../interfaces/ability.IAbilityMethods.md)

___

### IAbilityOption

Re-exports [IAbilityOption](../interfaces/ability.IAbilityOption.md)

___

### IAbilityOptions

Re-exports [IAbilityOptions](ability.md#iabilityoptions)

___

### IExportOptions

Re-exports [IExportOptions](../interfaces/abstract.IExportOptions.md)

___

### IMergeOptions

Re-exports [IMergeOptions](../interfaces/abstract.IMergeOptions.md)

___

### IPropDescriptor

Re-exports [IPropDescriptor](../interfaces/abstract.IPropDescriptor.md)

___

### ISimplePropDescriptor

Re-exports [ISimplePropDescriptor](../interfaces/abstract.ISimplePropDescriptor.md)

___

### JSONArray

Re-exports [JSONArray](../interfaces/array.JSONArray.md)

___

### JSONObject

Re-exports [JSONObject](../interfaces/array.JSONObject.md)

___

### JSONValue

Re-exports [JSONValue](array.md#jsonvalue)

___

### NormalPropertyManager

Re-exports [NormalPropertyManager](../classes/normal.NormalPropertyManager.md)

___

### Primitive

Re-exports [Primitive](array.md#primitive)

___

### PropDescriptor

Re-exports [PropDescriptor](abstract.md#propdescriptor)

___

### PropDescriptors

Re-exports [PropDescriptors](abstract.md#propdescriptors)

___

### PropManagerType

Re-exports [PropManagerType](ability.md#propmanagertype)

___

### PropType

Re-exports [PropType](abstract.md#proptype)

___

### PropTypeDesc

Re-exports [PropTypeDesc](abstract.md#proptypedesc)

___

### Properties

Re-exports [Properties](../classes/properties.Properties.md)

___

### PropertyAbility

Re-exports [PropertyAbility](ability.md#propertyability)

___

### SimplePropDescriptor

Re-exports [SimplePropDescriptor](abstract.md#simplepropdescriptor)

___

### SimplePropDescriptors

Re-exports [SimplePropDescriptors](abstract.md#simplepropdescriptors)

___

### SimplePropertyManager

Re-exports [SimplePropertyManager](../classes/simple.SimplePropertyManager.md)

___

### SimpleType

Re-exports [SimpleType](abstract.md#simpletype)

___

### arrayOf

Re-exports [arrayOf](array.md#arrayof)

___

### assignValue

Re-exports [assignValue](assign_value.md#assignvalue)

___

### default

Renames and re-exports [NormalPropertyManager](../classes/normal.NormalPropertyManager.md)

## Functions

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): [`Properties`](../classes/properties.Properties.md)

Define properties on the $attributes of the target object/class(prototype).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aTarget` | `object` \| `Function` | the target class or object |
| `aProperties` | [`PropDescriptors`](abstract.md#propdescriptors) | the attribute descriptors |
| `recreate?` | `boolean` | Whether recreating the $attributes |

#### Returns

[`Properties`](../classes/properties.Properties.md)

the defined attributes

#### Defined in

[src/properties/define-properties.d.ts:12](https://github.com/snowyu/property-manager.js/blob/d0c8aad/src/properties/define-properties.d.ts#L12)
