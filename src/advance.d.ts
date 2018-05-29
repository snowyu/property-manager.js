import AbstractPropertyManager from './abstract';

export default interface AdvancePropertyManager extends AbstractPropertyManager {
  static defineProperties(aTarget, aProperties, recreate?:boolean)
}
