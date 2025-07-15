import { SimplePropertyManager, toJsonSchema } from '../src/index.js';
import { assert } from 'chai';

class SimplePerson extends SimplePropertyManager {
  constructor(options) {
    super();
    this.name = 'N/A';
    this.age = 0;
    this.tags = ['a', 'b'];
    this.emptyTags = [];
    this.active = true;
    this.address = { street: '123 Main St' };
    this.defineProperties(options);
  }
}

describe('toJsonSchema for SimplePropertyManager', () => {
  it('should convert a SimplePropertyManager to a JSON schema', () => {
    const schema = toJsonSchema(SimplePerson);

    const expectedSchema = {
      type: 'object',
      properties: {
        name: { type: 'string', default: 'N/A' },
        age: { type: 'number', default: 0 },
        tags: { type: 'array', default: ['a', 'b'], items: { type: 'string' } },
        emptyTags: { type: 'array', default: [], items: { type: 'string' } },
        active: { type: 'boolean', default: true },
        address: { type: 'object', default: { street: '123 Main St' } },
      },
    };

    // We need to manually remove the defaultOptions from the comparison
    if (schema.properties.defaultOptions) {
      delete schema.properties.defaultOptions;
    }

    assert.deepEqual(schema, expectedSchema);
  });
});
