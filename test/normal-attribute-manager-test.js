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

import Manager from '../src/normal';

import test from './property-manager';

test('NormalPropertyManager', Manager);
