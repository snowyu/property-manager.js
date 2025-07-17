import { AdvancePropertyManager, defineProperties, toRjsf } from '../src/index.js';
import { assert } from 'chai';

// Helper to sort object keys for consistent deepEqual comparison
const sortObjectKeys = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }
  const sortedKeys = Object.keys(obj).sort();
  const newObj = {};
  for (const key of sortedKeys) {
    newObj[key] = sortObjectKeys(obj[key]);
  }
  return newObj;
};

describe('toRjsf', () => {
  it('should return an object with schema and uiSchema properties', () => {
    class MyModel extends AdvancePropertyManager {}
    defineProperties(MyModel, {
      field1: { type: String, value: 'default' },
      field2: { type: Number, writable: false, exported: true },
    });

    MyModel.$uiSchema = {
      field1: { "ui:widget": "textarea" },
    };

    const rjsfOutput = toRjsf(MyModel);

    assert.isObject(rjsfOutput);
    assert.property(rjsfOutput, 'schema');
    assert.property(rjsfOutput, 'uiSchema');
  });

  it('should correctly combine schema and uiSchema for a simple model', () => {
    class SimpleModel extends AdvancePropertyManager {}
    defineProperties(SimpleModel, {
      name: { type: String, required: true },
      age: { type: Number, writable: false, exported: true },
    });

    SimpleModel.$uiSchema = {
      "ui:order": ["name", "age", "*"],
      name: { "ui:autofocus": true },
    };

    const { schema, uiSchema } = toRjsf(SimpleModel);

    const expectedSchema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
      },
      required: ['name'],
    };

    const expectedUiSchema = {
      "ui:order": ["name", "age", "*"],
      name: { "ui:autofocus": true },
      age: { "ui:readonly": true },
    };

    assert.deepEqual(sortObjectKeys(schema), sortObjectKeys(expectedSchema));
    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should correctly combine schema and uiSchema for nested models', () => {
    class NestedAddress extends AdvancePropertyManager {}
    defineProperties(NestedAddress, {
      street: { type: String },
      zip: { type: String, writable: false, exported: true },
    });
    NestedAddress.$uiSchema = {
      street: { "ui:placeholder": "Street" },
    };

    class NestedPerson extends AdvancePropertyManager {}
    defineProperties(NestedPerson, {
      personName: { type: String },
      personAddress: { type: NestedAddress },
    });
    NestedPerson.$uiSchema = {
      personName: { "ui:help": "Full name" },
      personAddress: {
        "ui:title": "Address Info",
      },
    };

    const { schema, uiSchema } = toRjsf(NestedPerson);

    const expectedSchema = {
      type: 'object',
      properties: {
        personName: { type: 'string' },
        personAddress: {
          type: 'object',
          properties: {
            street: { type: 'string' },
            zip: { type: 'string' },
          },
        },
      },
    };

    const expectedUiSchema = {
      personName: { "ui:help": "Full name" },
      personAddress: {
        "ui:title": "Address Info",
        street: { "ui:placeholder": "Street" },
        zip: { "ui:readonly": true },
      },
    };

    assert.deepEqual(sortObjectKeys(schema), sortObjectKeys(expectedSchema));
    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should correctly combine schema and uiSchema for arrays of models', () => {
    class NestedItem extends AdvancePropertyManager {}
    defineProperties(NestedItem, {
      itemId: { type: Number, writable: false, exported: true },
      itemName: { type: String },
    });
    NestedItem.$uiSchema = {
      itemName: { "ui:widget": "textarea" },
    };

    class NestedOrder extends AdvancePropertyManager {}
    defineProperties(NestedOrder, {
      orderNumber: { type: String },
      orderItems: { type: [NestedItem] },
    });
    NestedOrder.$uiSchema = {
      orderItems: {
        "ui:options": {
          orderable: false,
        },
      },
    };

    const { schema, uiSchema } = toRjsf(NestedOrder);

    const expectedSchema = {
      type: 'object',
      properties: {
        orderNumber: { type: 'string' },
        orderItems: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              itemId: { type: 'number' },
              itemName: { type: 'string' },
            },
          },
        },
      },
    };

    const expectedUiSchema = {
      orderItems: {
        "ui:options": {
          orderable: false,
        },
        items: {
          itemId: { "ui:readonly": true },
          itemName: { "ui:widget": "textarea" },
        },
      },
    };

    assert.deepEqual(sortObjectKeys(schema), sortObjectKeys(expectedSchema));
    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });
});
