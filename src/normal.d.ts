import AbstractPropertyManager, { IPropDescriptor, SimpleType } from './abstract';

export default class NormalPropertyManager extends AbstractPropertyManager {
  static defineProperties(aTarget, aProperties:IPropDescriptor|SimpleType, recreate?:boolean)
}
