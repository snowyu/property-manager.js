import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

import inherits from 'inherits-ex/lib/inherits';
import extend from 'util-ex/lib/_extend';
import defineProperty from 'util-ex/lib/defineProperty';
import PropertyManager from '../src/ability';
import Simple from '../src/simple';
import Normal from '../src/normal';
import Advance from '../src/advance';
import testPropMan from './property-manager-es6';

describe('PropertyManagerAbility ES6', function() {
  var checkBasicIsSame, checkBasicProperty, checkIsSame, checkProperty;
  checkProperty = function(aClass) {
    aClass.should.have.ownProperty('defineProperties');
    checkBasicProperty(aClass);
  };
  checkBasicProperty = function(aClass) {
    aClass.prototype.should.have.ownProperty('assign');
    aClass.prototype.should.have.ownProperty('assignPropertyTo');
    aClass.prototype.should.have.ownProperty('initialize');
    aClass.prototype.should.have.ownProperty('getProperties');
    aClass.prototype.should.have.ownProperty('defineProperties');
    aClass.prototype.should.have.ownProperty('assign');
  };
  checkIsSame = function(aClass, aManager) {
    aClass.should.be.have.property('defineProperties', aManager.defineProperties);
    checkBasicIsSame(aClass, aManager);
  };
  checkBasicIsSame = function(aClass, aManager) {
    aClass.prototype.should.be.have.property('getProperties', aManager.prototype.getProperties);
    aClass.prototype.should.be.have.property('assignPropertyTo', aManager.prototype.assignPropertyTo);
    aClass.prototype.should.be.have.property('defineProperties', aManager.prototype.defineProperties);
  };

  it('should choose simple manager to a class', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, 'simple');

    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);
  });
  it('should choose simple manager to a class with name option', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, {
      name: 'simple'
    });

    checkBasicProperty(A);
    return checkBasicIsSame(A, Simple);
  });
  it('should disable initialize method of simple manager to be executed', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
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
    result.should.not.have.property('title');
  });
  it('should choose normal manager to a class', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, 'normal');

    checkProperty(A);
    checkIsSame(A, Normal);
  });
  it('should disable initialize method of normal manager to be executed', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
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
    result.should.not.have.property('title');
  });
  it('should choose advance manager to a class', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, 'advance');

    checkProperty(A);
    checkIsSame(A, Advance);
  });
  it('should disable initialize method of normal manager to be executed', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
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
    result.should.not.have.property('title');
  });
  it('should use nonExported1stChar options', function() {
    class A {
      constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, {
      nonExported1stChar: '_'
    });

    checkProperty(A);
    checkBasicIsSame(A, Normal);
    A.prototype.should.be.have.property('nonExported1stChar', '_');
  });
  it('should apply the simple ability to a class', function() {
    class A {
      // constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, 'simple');

    checkBasicProperty(A);
    checkBasicIsSame(A, Simple);
    testPropMan('SimpleAbilityA', A);
  });
  it('should apply the simple ability to a class with optionsPosition', function() {
    class B {
      // constructor() {this.initialize.apply(this, arguments)}
    }

    B.prototype.initialize = function(my, sec) {};

    PropertyManager(B, {
      optionsPosition: 2,
      name: 'simple'
    });

    checkBasicProperty(B);
    checkBasicIsSame(B, Simple);
    testPropMan('SimpleAbilityB', B, 2);
  });
  it('should apply the normal ability to a class', function() {
    function A() {
      // this.initialize.apply(this, arguments);
    }

    PropertyManager(A);

    checkProperty(A);
    checkIsSame(A, Normal);
    testPropMan('NormalAbilityA', A);
  });
  it('should apply the normal ability to a class with optionsPosition', function() {
    class B {
      constructor() {this.initialize.apply(this, arguments)}
    }

    B.prototype.initialize = function(my1, sec1) {
      this.my = my1;
      this.sec = sec1;
    };

    PropertyManager(B, {
      optionsPosition: 2
    });

    checkProperty(B);
    checkIsSame(B, Normal);
    const b = new B('hi', 1222);
    b.should.have.property('my', 'hi');
    b.should.have.property('sec', 1222);
    testPropMan('NormalAbilityB', B, 2);
  });
  it('should apply the advance ability to a class', function() {
    class A {
      // constructor() {this.initialize.apply(this, arguments)}
    }

    PropertyManager(A, 'advance');

    checkProperty(A);
    checkIsSame(A, Advance);
    testPropMan('advanceAbilityA', A);
  });
  it('should apply the advance ability to a class with optionsPosition', function() {
    class B {
      constructor() {this.initialize.apply(this, arguments)}
    }

    B.prototype.initialize = function(my1, sec1) {
      this.my = my1;
      this.sec = sec1;
    };

    PropertyManager(B, {
      optionsPosition: 2,
      name: 'advance'
    });

    checkProperty(B);
    checkIsSame(B, Advance);
    const b = new B('hi', 1222);
    b.should.have.property('my', 'hi');
    b.should.have.property('sec', 1222);
    testPropMan('advanceAbilityB', B, 2);
  });
});
