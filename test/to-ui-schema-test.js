import { AdvancePropertyManager, defineProperties, toUISchema } from '../src/index.js';
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

describe('toUISchema', () => {
  it('should convert a PropertyManager to a uiSchema with basic properties', () => {
    class MyForm extends AdvancePropertyManager {}
    defineProperties(MyForm, {
      name: { type: String, value: 'Test Name' },
      age: { type: Number, writable: false, exported: true, },
      isActive: { type: Boolean },
    });

    MyForm.$uiSchema = {
      "ui:order": ["name", "isActive", "age", "*"],
      name: {
        "ui:widget": "text",
        "ui:help": "Enter your name",
      },
    };

    const uiSchema = toUISchema(MyForm);

    const expectedUiSchema = {
      "ui:order": ["name", "isActive", "age", "*"],
      age: {
        "ui:readonly": true,
      },
      name: {
        "ui:widget": "text",
        "ui:help": "Enter your name",
      },
    };

    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should handle nested PropertyManagers and their uiSchema', () => {
    class Address extends AdvancePropertyManager {}
    defineProperties(Address, {
      street: { type: String },
      city: { type: String, writable: false, exported: true },
    });

    Address.$uiSchema = {
      street: { "ui:placeholder": "Street Name" },
    };

    class Person extends AdvancePropertyManager {}
    defineProperties(Person, {
      name: { type: String },
      address: { type: Address },
    });

    Person.$uiSchema = {
      name: { "ui:autofocus": true },
      address: {
        "ui:title": "Contact Address",
      },
    };

    const uiSchema = toUISchema(Person);

    const expectedUiSchema = {
      name: { "ui:autofocus": true },
      address: {
        "ui:title": "Contact Address",
        street: { "ui:placeholder": "Street Name" },
        city: { "ui:readonly": true },
      },
    };

    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should handle arrays of PropertyManagers and their uiSchema', () => {
    class Item extends AdvancePropertyManager {}
    defineProperties(Item, {
      id: { type: Number, writable: false, exported: true },
      description: { type: String },
    });

    Item.$uiSchema = {
      description: { "ui:widget": "textarea" },
    };

    class Order extends AdvancePropertyManager {}
    defineProperties(Order, {
      orderId: { type: String },
      items: { type: [Item] },
    });

    Order.$uiSchema = {
      items: {
        "ui:options": {
          addable: true,
          removable: true,
        },
      },
    };

    const uiSchema = toUISchema(Order);

    const expectedUiSchema = {
      items: {
        "ui:options": {
          addable: true,
          removable: true,
        },
        items: { // This 'items' refers to the uiSchema for each item in the array
          id: { "ui:readonly": true },
          description: { "ui:widget": "textarea" },
        },
      },
    };

    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should prioritize explicit uiSchema over derived properties', () => {
    class OverrideTest extends AdvancePropertyManager {}
    defineProperties(OverrideTest, {
      myProp: { type: String, "ui:widget": "password" },
    });

    OverrideTest.$uiSchema = {
      myProp: { "ui:readonly": true }, // Explicitly set to false
    };

    const uiSchema = toUISchema(OverrideTest);

    const expectedUiSchema = {
      myProp: { "ui:readonly": true, "ui:widget": "password" },
    };

    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });

  it('should not include properties with exported: false or enumerable: false', () => {
    class HiddenProps extends AdvancePropertyManager {}
    defineProperties(HiddenProps, {
      visibleProp: { type: String, "ui:widget": "password" },
      hiddenExported: { type: String, exported: false },
      hiddenEnumerable: { type: String, enumerable: false },
    });

    const uiSchema = toUISchema(HiddenProps);

    const expectedUiSchema = {
      visibleProp: {"ui:widget": "password"},
    };

    assert.deepEqual(sortObjectKeys(uiSchema), sortObjectKeys(expectedUiSchema));
  });
});
