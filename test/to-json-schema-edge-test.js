import { AdvancePropertyManager, defineProperties, toJsonSchema } from '../src/index.js';

describe('toJsonSchema edge cases', () => {
  it('should handle normalizePropType with null items in array (typeof object but not isObject)', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    // Array with null first item: typeof null === 'object' but isObject(null) is false
    // This hits the `else { _type = [String] }` branch in normalizePropType
    defineProperties(Model, {
      items: { value: [null] },
    });

    const schema = toJsonSchema(Model);
    expect(schema.properties.items.type).to.equal('array');
    expect(schema.properties.items.items).to.deep.equal({ type: 'string' });
  });

  it('should handle array with first item of unknown type', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    // Symbol type is not string, number, boolean, or object - hits the `default` case
    defineProperties(Model, {
      mixed: { value: [Symbol('test')] },
    });

    const schema = toJsonSchema(Model);
    expect(schema.properties.mixed.type).to.equal('array');
  });

  it('should handle toSchemaProp with custom type having no basic type and no $attributes', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    class CustomNoAttrs {}
    defineProperties(Model, {
      customField: { type: CustomNoAttrs, value: new CustomNoAttrs() },
    });

    const schema = toJsonSchema(Model);
    // CustomNoAttrs has no $attributes on prototype and is not a basic type
    // The else branch in toSchemaProp should not set any type
    expect(schema.properties.customField.default).to.be.instanceOf(CustomNoAttrs);
  });

  it('should handle a property with prop being null/undefined in the attributes loop', () => {
    // Using a SimplePropertyManager approach to get getJsonObjectAttrs invoked
    // with a constructed instance that may have edge-case properties
    class SimpleModel {
      constructor() {
        this.name = 'test';
        this.defaultOptions = {};
      }
    }
    SimpleModel.prototype.constructor = SimpleModel;
    SimpleModel.prototype.$attributes = null;

    // Use Object.defineProperty to make $attributes non-own
    // This forces normalizeAttributes to use getJsonObjectAttrs path

    const schema = toJsonSchema(SimpleModel);
    expect(schema).to.have.property('type', 'object');
  });

  it('should handle nested PropertyManager type in else if branch of toSchemaProp', () => {
    class NestedType extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    defineProperties(NestedType, {
      key: { type: String },
      value: { type: String },
    });

    class Container extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    defineProperties(Container, {
      nested: { type: NestedType },
    });

    const schema = toJsonSchema(Container);
    expect(schema.properties.nested.type).to.equal('object');
    expect(schema.properties.nested.properties.key.type).to.equal('string');
    expect(schema.properties.nested.properties.value.type).to.equal('string');
  });

  it('should handle object type firstItem in array (isObject and has constructor)', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    class CustomObj {
      constructor() { this.x = 1; }
    }
    defineProperties(Model, {
      objs: { value: [new CustomObj()] },
    });

    const schema = toJsonSchema(Model);
    // typeof firstItem === 'object' and isObject(firstItem) is true
    // So _type = [firstItem.constructor], which is [CustomObj]
    expect(schema.properties.objs.type).to.equal('array');
  });

  it('should handle toJsonSchema with required fields', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    defineProperties(Model, {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      optional: { type: String },
    });

    const schema = toJsonSchema(Model);
    expect(schema.required).to.deep.equal(['id', 'name']);
    expect(schema.properties.id.type).to.equal('number');
    expect(schema.properties.name.type).to.equal('string');
    expect(schema.properties.optional.type).to.equal('string');
  });

  it('should handle toJsonSchema with no required fields', () => {
    class Model extends AdvancePropertyManager {
      constructor(options) { super(options); }
    }
    defineProperties(Model, {
      name: { type: String },
    });

    const schema = toJsonSchema(Model);
    expect(schema).to.not.have.property('required');
  });
});
