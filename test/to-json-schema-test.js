import { AdvancePropertyManager, defineProperties, toJsonSchema } from '../src/index.js';
import { assert } from 'chai';

class Address extends AdvancePropertyManager {
  constructor(options) {
    super(options);
  }
}
defineProperties(Address, {
  street: { type: String, value: 'Unknown Street', description: 'The street name' },
  city: { type: String, value: 'Unknown City', required: true }
});

class Tag extends AdvancePropertyManager {
  constructor(options) {
    super(options);
  }
}
defineProperties(Tag, {
  name: { type: String, value: 'default' }
});

class Person extends AdvancePropertyManager {
  constructor(options) {
    super(options);
  }
}
defineProperties(Person, {
  name: { type: String, value: 'N/A' },
  address: {
    type: Address,
    value: {}
  },
  aliases: { type: [String] },
  tags: { type: [Tag], value: [] }
});

describe('toJsonSchema', () => {
  it('should convert a PropertyManager to a JSON schema', () => {
    const schema = toJsonSchema(Person);

    const expectedSchema = {
      type: 'object',
      properties: {
        name: { type: 'string', default: 'N/A' },
        address: {
          type: 'object',
          default: {},
          properties: {
            street: { type: 'string', default: 'Unknown Street', description: 'The street name' },
            city: { type: 'string', default: 'Unknown City' }
          },
          required: ['city']
        },
        aliases: { type: 'array', items: { type: 'string' } },
        tags: {
          type: 'array',
          default: [],
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', default: 'default' }
            }
          }
        }
      }
    };
    assert.deepEqual(schema, expectedSchema);
  });

  it('should handle various property types and attributes', () => {
    class Product extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Product, {
      productId: { type: Number, required: true, title: 'Product ID', description: 'Unique product identifier' },
      price: { type: Number, value: 0.0, description: 'Product price' },
      available: { type: Boolean, value: true },
      colors: { type: [String], value: ['red', 'blue'] },
      details: { type: Object, value: { weight: '1kg' } },
    });

    const schema = toJsonSchema(Product);

    const expectedSchema = {
      type: 'object',
      properties: {
        productId: { type: 'number', title: 'Product ID', description: 'Unique product identifier' },
        price: { type: 'number', default: 0.0, description: 'Product price' },
        available: { type: 'boolean', default: true },
        colors: { type: 'array', default: ['red', 'blue'], items: { type: 'string' } },
        details: { type: 'object', default: { weight: '1kg' } },
      },
      required: ['productId'],
    };

    assert.deepEqual(schema, expectedSchema);
  });

  it('should handle nested arrays of PropertyManagers', () => {
    class Option extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Option, {
      key: { type: String, required: true },
      value: { type: String },
    });

    class Config extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Config, {
      name: { type: String },
      options: { type: [Option], value: [] },
    });

    const schema = toJsonSchema(Config);

    const expectedSchema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        options: {
          type: 'array',
          default: [],
          items: {
            type: 'object',
            properties: {
              key: { type: 'string' },
              value: { type: 'string' },
            },
            required: ['key'],
          },
        },
      },
    };

    assert.deepEqual(schema, expectedSchema);
  });

  it('should handle deeply nested PropertyManagers', () => {
    class Grandchild extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Grandchild, {
      data: { type: String, value: 'grandchild data' },
    });

    class Child extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Child, {
      childName: { type: String },
      grandchild: { type: Grandchild, value: {} },
    });

    class Parent extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Parent, {
      parentName: { type: String },
      child: { type: Child, value: {} },
    });

    const schema = toJsonSchema(Parent);

    const expectedSchema = {
      type: 'object',
      properties: {
        parentName: { type: 'string' },
        child: {
          type: 'object',
          default: {},
          properties: {
            childName: { type: 'string' },
            grandchild: {
              type: 'object',
              default: {},
              properties: {
                data: { type: 'string', default: 'grandchild data' },
              },
            },
          },
        },
      },
    };

    assert.deepEqual(schema, expectedSchema);
  });

  it('should exclude properties with exported: false or enumerable: false', () => {
    class HiddenProps extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(HiddenProps, {
      visibleProp: { type: String, value: 'I am visible' },
      hiddenExported: { type: String, value: 'I am hidden', exported: false },
      hiddenEnumerable: { type: String, value: 'I am also hidden', enumerable: false },
    });

    const schema = toJsonSchema(HiddenProps);

    const expectedSchema = {
      type: 'object',
      properties: {
        visibleProp: { type: 'string', default: 'I am visible' },
      },
    };

    assert.deepEqual(schema, expectedSchema);
  });

  it('should exclude properties with no explicit type and no value', () => {
    class NoTypeNoValue extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(NoTypeNoValue, {
      propWithType: { type: String },
      propWithValue: { value: 'some value' },
      propNoTypeNoValue: {},
    });

    const schema = toJsonSchema(NoTypeNoValue);

    const expectedSchema = {
      type: 'object',
      properties: {
        propWithType: { type: 'string' },
        propWithValue: { type: 'string', default: 'some value' },
      },
    };

    assert.deepEqual(schema, expectedSchema);
  });

  it('should handle properties with null or undefined default values', () => {
    class NullUndefinedDefaults extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(NullUndefinedDefaults, {
      nullProp: { type: String, value: null },
      undefinedProp: { type: String, value: undefined },
      noDefaultProp: { type: String },
    });

    const schema = toJsonSchema(NullUndefinedDefaults);

    const expectedSchema = {
      type: 'object',
      properties: {
        nullProp: { type: 'string', default: null },
        undefinedProp: { type: 'string' },
        noDefaultProp: { type: 'string' },
      },
    };

    assert.deepEqual(schema, expectedSchema);
  });
});
