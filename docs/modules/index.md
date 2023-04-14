[property-manager](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [AbstractPropertyManager](index.md#abstractpropertymanager)
- [AdvancePropertyManager](index.md#advancepropertymanager)
- [ArrayPropertyManager](index.md#arraypropertymanager)
- [IAbilityMethods](index.md#iabilitymethods)
- [IAbilityOption](index.md#iabilityoption)
- [IAbilityOptions](index.md#iabilityoptions)
- [IExportOptions](index.md#iexportoptions)
- [IMergeOptions](index.md#imergeoptions)
- [IPropDescriptor](index.md#ipropdescriptor)
- [ISimplePropDescriptor](index.md#isimplepropdescriptor)
- [JSONArray](index.md#jsonarray)
- [JSONObject](index.md#jsonobject)
- [JSONValue](index.md#jsonvalue)
- [NormalPropertyManager](index.md#normalpropertymanager)
- [Primitive](index.md#primitive)
- [PropDescriptor](index.md#propdescriptor)
- [PropDescriptors](index.md#propdescriptors)
- [PropManagerType](index.md#propmanagertype)
- [PropType](index.md#proptype)
- [PropTypeDesc](index.md#proptypedesc)
- [Properties](index.md#properties)
- [PropertyAbility](index.md#propertyability)
- [SimplePropDescriptor](index.md#simplepropdescriptor)
- [SimplePropDescriptors](index.md#simplepropdescriptors)
- [SimplePropertyManager](index.md#simplepropertymanager)
- [SimpleType](index.md#simpletype)
- [arrayOf](index.md#arrayof)
- [assignValue](index.md#assignvalue)
- [default](index.md#default)

### Functions

- [defineProperties](index.md#defineproperties)

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

[src/properties/define-properties.d.ts:12](https://github.com/snowyu/property-manager.js/blob/95356d9/src/properties/define-properties.d.ts#L12)
