import AbstractPropertyManager, { IPropDescriptor, SimpleType } from './abstract';

export default class AdvancePropertyManager extends AbstractPropertyManager {
  static defineProperties(aTarget, aProperties:IPropDescriptor|SimpleType, recreate?:boolean)
}
