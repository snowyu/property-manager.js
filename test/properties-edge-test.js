import { defineProperties, NormalPropertyManager } from '../src/index.js';

describe('defineProperties edge cases', () => {
  it('should throw TypeError when target is not a function or object', () => {
    expect(() => {
      defineProperties(null, { test: { value: 1 } });
    }).to.throw(TypeError, 'the target should be a ctor or object!');

    expect(() => {
      defineProperties(undefined, { test: { value: 1 } });
    }).to.throw(TypeError, 'the target should be a ctor or object!');
  });

  it('should handle defineProperties with recreate=true on a class without existing $attributes', () => {
    class TestPM extends NormalPropertyManager {}

    const result = defineProperties(TestPM, {
      name: { type: String, value: 'test' },
    }, true);

    expect(result).to.be.an('object');
    expect(result.name).to.be.an('object');
    expect(result.name.value).to.equal('test');
  });
});
