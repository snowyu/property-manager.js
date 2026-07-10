import Properties from '../src/properties/index.js';

describe('Properties index edge cases', () => {
  it('should handle validatePropertyValue with no matching property name', () => {
    const props = Properties({
      str: { type: String },
    });

    expect(() => {
      props.validatePropertyValue('nonExistent', 'value');
    }).to.throw(TypeError, 'no such property name:nonExistent');
  });

  it('should handle validatePropertyValue with raiseError=false', () => {
    const props = Properties({
      str: { type: String },
    });

    const result = props.validatePropertyValue('str', 'hello', null, false);
    expect(result).to.be.true;
  });

  it('should handle validatePropertyValue with raiseError as boolean attr param', () => {
    const props = Properties({
      str: { type: String },
    });

    const result = props.validatePropertyValue('str', 'hello', false);
    expect(result).to.be.true;
  });

  it('should handle getName for property with name attribute', () => {
    const props = Properties({
      internalName: { name: 'externalName', type: String },
    });

    // getRealAttrName should map 'externalName' to 'internalName'
    const result = props.getRealAttrName('externalName');
    expect(result).to.equal('internalName');
  });

  it('should handle initializeTo with non-string assigned value (smart assign)', () => {
    const props = Properties({
      num: {
        value: 1,
        assigned: '__num',
        writable: false,
      },
    });

    const result = {};
    props.initializeTo(result);
    expect(result.__num).to.equal(1);
    expect(result.num).to.equal(1);
  });

  it('should handle assignPropertyTo with string assigned value', () => {
    const props = Properties({
      data: {
        value: 'test',
        assigned: '_data',
      },
    });

    const result = {};
    props.initializeTo(result);
    expect(result._data).to.equal('test');

    // Now test assignPropertyTo with the string assigned path
    // The first call goes to name='data' because dest doesn't have vAttrName yet
    const dest = {};
    props.assignPropertyTo(dest, result, 'data', 'newvalue');
    expect(dest.data).to.equal('newvalue');
  });

  it('should handle assignPropertyTo with name=name property', () => {
    const props = Properties({
      name: { name: '名', type: String },
    });

    const dest = {};
    const src = { name: 'testName' };
    props.assignPropertyTo(dest, src, 'name', 'testName');
    expect(dest.name).to.equal('testName');
  });

  it('should handle mergeTo with src being a Properties instance', () => {
    const props1 = Properties({
      a: { value: 1 },
      b: { value: 2 },
    });

    const props2 = Properties({
      c: { value: 3 },
    });

    // merge props1 into props2
    props2.mergeTo(props1, props2);
    expect(props2).to.have.property('a');
    expect(props2).to.have.property('b');
    expect(props2).to.have.property('c');
  });

  it('should handle extend with null nonExported1stChar', () => {
    const props1 = Properties({
      a: { value: 1 },
    });

    const extended = props1.extends({ b: { value: 2 } }, null);
    expect(extended).to.have.property('a');
    expect(extended).to.have.property('b');
  });

  it('should handle merge with attrs that are regular objects', () => {
    const props = Properties({});

    // merge with a regular object (not Properties instance)
    props.merge({ test: { value: 123 } });
    expect(props).to.have.property('test');
    expect(props.test.value).to.equal(123);
  });

  it('should handle initialize with null/undefined options', () => {
    // This should not throw
    const props = Properties(null);
    expect(props).to.be.an('object');
  });
});
