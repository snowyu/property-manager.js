import { assignValue } from '../src/index.js';

describe('assignValue', () => {
  it('should re-throw error when type constructor throws an unrelated error', () => {
    function StrictType(value) {
      throw new Error('something went wrong');
    }
    expect(() => assignValue('test', StrictType)).to.throw('something went wrong');
  });

  it('should catch error ending with "new" and retry with new operator', () => {
    // Only throw when called without 'new'
    function NeedsNew(value) {
      if (!(this instanceof NeedsNew)) {
        throw new Error('Class constructor NeedsNew cannot be invoked without \'new\'');
      }
      this.value = value;
    }
    NeedsNew.prototype.test = function() {};
    const result = assignValue('hello', NeedsNew);
    expect(result).toBeInstanceOf(NeedsNew);
    expect(result.value).to.equal('hello');
  });

  it('should catch error ending with " a function" and retry with new operator', () => {
    // Only throw when called without 'new'
    function NeedsNew2(value) {
      if (!(this instanceof NeedsNew2)) {
        throw new TypeError('this is not a function');
      }
      this.value = value;
    }
    NeedsNew2.prototype.test = function() {};
    const result = assignValue('world', NeedsNew2);
    expect(result).toBeInstanceOf(NeedsNew2);
    expect(result.value).to.equal('world');
  });

  it('should return the value as-is when type is not a function', () => {
    const result = assignValue('hello', 'string');
    expect(result).to.equal('hello');
  });

  it('should return the value as-is when value is already instance of type', () => {
    class MyClass {}
    const instance = new MyClass();
    const result = assignValue(instance, MyClass);
    expect(result).to.equal(instance);
  });

  it('should transform value via type function when it succeeds', () => {
    const result = assignValue('123', Number);
    expect(result).to.equal(123);
  });
});
