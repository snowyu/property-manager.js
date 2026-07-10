import { AdvancePropertyManager, defineProperties, toJsonSchema } from '../src/index.js';

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
    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
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

    expect(schema).to.deep.equal(expectedSchema);
  });

  it('should handle array type with first item being an object that has $attributes', () => {
    class NestedItem extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(NestedItem, {
      id: { type: Number },
      name: { type: String },
    });

    class Container extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Container, {
      items: { type: [NestedItem], value: [] },
    });

    const schema = toJsonSchema(Container);

    expect(schema.properties.items).to.have.property('items');
    expect(schema.properties.items.items.properties).to.have.property('id');
    expect(schema.properties.items.items.properties).to.have.property('name');
  });

  it('should handle array type with non-$attributes item type', () => {
    class Container extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(Container, {
      // array of plain strings
      tags: { type: [String] },
      // array of numbers
      scores: { type: [Number] },
      // array of booleans
      flags: { type: [Boolean] },
      // array with non-standard type
      customList: { type: [Array] },
    });

    const schema = toJsonSchema(Container);

    expect(schema.properties.tags.type).to.equal('array');
    expect(schema.properties.tags.items).to.deep.equal({ type: 'string' });
    expect(schema.properties.scores.items).to.deep.equal({ type: 'number' });
    expect(schema.properties.flags.items).to.deep.equal({ type: 'boolean' });
  });

  it('should handle normalizePropType with empty arrays and various item types', () => {
    // Test empty array - should infer as [String]
    class TestModel extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(TestModel, {
      emptyArr: { value: [] },
      objArr: { value: [{ a: 1 }] },
      boolArr: { value: [true, false] },
      numArr: { value: [1, 2, 3] },
    });

    const schema = toJsonSchema(TestModel);

    expect(schema.properties.emptyArr.items).to.deep.equal({ type: 'string' });
    expect(schema.properties.objArr.type).to.equal('array');
    expect(schema.properties.boolArr.items).to.deep.equal({ type: 'boolean' });
    expect(schema.properties.numArr.items).to.deep.equal({ type: 'number' });
  });

  it('should handle properties with $type notation for type inference', () => {
    // This tests the $type unwrapping in normalizePropType
    // When a type has a $type property (e.g., from ArrayPropertyManager), it gets unwrapped
    class TestModel extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(TestModel, {
      typedField: {
        type: { $type: String },
      },
    });

    const schema = toJsonSchema(TestModel);
    // $type is extracted: _type = _type.$type = String, then getBasicType(String) = 'string'
    expect(schema.properties.typedField.type).to.equal('string');
  });

  it('should handle nested Object type property with toSchemaProp', () => {
    class TestModel extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    defineProperties(TestModel, {
      data: { type: Object }, // Object type, prototype has no $attributes
    });

    const schema = toJsonSchema(TestModel);
    expect(schema.properties.data.type).to.equal('object');
  });

  it('should handle property with type that is not basic and has no prototype.$attributes', () => {
    class TestModel extends AdvancePropertyManager {
      constructor(options) {
        super(options);
      }
    }
    // Custom type that is not a basic type but has no $attributes on prototype
    class CustomType {}
    defineProperties(TestModel, {
      custom: { type: CustomType },
    });

    const schema = toJsonSchema(TestModel);
    // getBasicType(CustomType) returns undefined
    // No $attributes on prototype, so no typeString assigned to schemaProperty.type
    // But the spread of prop includes the original type: CustomType which is in there
    // The check is that schema doesn't have a recognized string type
    expect(schema.properties.custom).to.not.have.property('default');
    // The type exists but it's still CustomType (unrecognized)
    expect(schema.properties.custom.type).to.equal(CustomType);
  });
});
