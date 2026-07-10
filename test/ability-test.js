import {inherits} from 'inherits-ex';
import {_extend as extend, defineProperty} from 'util-ex';
import PropertyManager from '../src/ability.js';
import Simple from '../src/simple.js';
import Normal from '../src/normal.js';
import Advance from '../src/advance.js';
import testPropMan from './property-manager.js';

function checkProperty(aClass) {
  expect(aClass).toHaveProperty('defineProperties');
  checkBasicProperty(aClass);
}
function checkBasicProperty(aClass) {
  expect(aClass.prototype).toHaveProperty('assign');
  expect(aClass.prototype).toHaveProperty('assignPropertyTo');
  expect(aClass.prototype).toHaveProperty('initialize');
  expect(aClass.prototype).toHaveProperty('getProperties');
  expect(aClass.prototype).toHaveProperty('defineProperties');
  expect(aClass.prototype).toHaveProperty('assign');
}
function checkIsSame(aClass, aManager) {
  expect(aClass).to.have.property('defineProperties', aManager.defineProperties);
  checkBasicIsSame(aClass, aManager);
}
function checkBasicIsSame(aClass, aManager) {
  expect(aClass.prototype).to.have.property('getProperties', aManager.prototype.getProperties);
  expect(aClass.prototype).to.have.property('assignPropertyTo', aManager.prototype.assignPropertyTo);
  expect(aClass.prototype).to.have.property('defineProperties', aManager.prototype.defineProperties);
}

describe('PropertyManagerAbility', function() {
  it('should choose simple manager to a class', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    PropertyManager(A, 'simple');

    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);
  });
  it('should choose simple manager to a class with name option', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    PropertyManager(A, {
      name: 'simple'
    });

    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);
  });
  it('should disable initialize method of simple manager to be executed', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    A.prototype.initialize = function() {
      return 'ok';
    };

    PropertyManager(A, 'simple');

    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);

    const result = new A({
      attributes: {
        title: 'good'
      }
    });
    expect(result).to.not.have.property('title');
  });
  it('should choose normal manager to a class', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    PropertyManager(A, 'normal');

    checkProperty(A);
    checkIsSame(A, Normal);
  });
  it('should disable initialize method of normal manager to be executed', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    A.prototype.initialize = function() {
      return 'ok';
    };

    PropertyManager(A, 'normal');

    checkBasicProperty(A);
    checkBasicIsSame(A, Normal);
    const result = new A({
      attributes: {
        title: 'good'
      }
    });
    expect(result).to.not.have.property('title');
  });
  it('should choose advance manager to a class', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    PropertyManager(A, 'advance');

    checkProperty(A);
    checkIsSame(A, Advance);
  });
  it('should disable initialize method of normal manager to be executed', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    A.prototype.initialize = function() {
      return 'ok';
    };

    PropertyManager(A, 'advance');

    checkBasicProperty(A);
    checkBasicIsSame(A, Advance);
    const result = new A({
      attributes: {
        title: 'good'
      }
    });
    expect(result).to.not.have.property('title');
  });
  it('should use nonExported1stChar options', function() {
    function A() {
      this.initialize.apply(this, arguments);
    }

    PropertyManager(A, {
      nonExported1stChar: '_'
    });

    checkProperty(A);
    checkBasicIsSame(A, Normal);
    expect(A.prototype).to.have.property('nonExported1stChar', '_');
  });
});

// Full testPropMan suites at describe level for vitest compatibility
describe('PropertyManagerAbility - applied to class', function() {
  describe('SimpleAbilityA', function() {
    function A() { this.initialize.apply(this, arguments) }
    PropertyManager(A, 'simple');
    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);
    testPropMan('SimpleAbilityA', A);
  });
  describe('SimpleAbilityB (optionsPosition=2)', function() {
    function B() { this.initialize.apply(this, arguments) }
    B.prototype.initialize = function(my, sec) {};
    PropertyManager(B, { optionsPosition: 2, name: 'simple' });
    checkBasicProperty(B);
    checkBasicIsSame(B, Simple);
    testPropMan('SimpleAbilityB', B, 2);
  });
  describe('NormalAbilityA', function() {
    function A() { this.initialize.apply(this, arguments) }
    PropertyManager(A);
    checkProperty(A);
    checkIsSame(A, Normal);
    testPropMan('NormalAbilityA', A);
  });
  describe('NormalAbilityB (optionsPosition=2)', function() {
    function B() { this.initialize.apply(this, arguments) }
    B.prototype.initialize = function(my1, sec1) {
      this.my = my1;
      this.sec = sec1;
    };
    PropertyManager(B, { optionsPosition: 2 });
    checkProperty(B);
    checkIsSame(B, Normal);
    const b = new B('hi', 1222);
    expect(b).to.have.property('my', 'hi');
    expect(b).to.have.property('sec', 1222);
    testPropMan('NormalAbilityB', B, 2);
  });
  describe('AdvanceAbilityA', function() {
    function A() { this.initialize.apply(this, arguments) }
    PropertyManager(A, 'advance');
    checkProperty(A);
    checkIsSame(A, Advance);
    testPropMan('advanceAbilityA', A);
  });
  describe('AdvanceAbilityB (optionsPosition=2)', function() {
    function B() { this.initialize.apply(this, arguments) }
    B.prototype.initialize = function(my1, sec1) {
      this.my = my1;
      this.sec = sec1;
    };
    PropertyManager(B, { optionsPosition: 2, name: 'advance' });
    checkProperty(B);
    checkIsSame(B, Advance);
    const b = new B('hi', 1222);
    expect(b).to.have.property('my', 'hi');
    expect(b).to.have.property('sec', 1222);
    testPropMan('advanceAbilityB', B, 2);
  });
});
