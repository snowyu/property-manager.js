import AbstractPropertyManager from './abstract';

export default interface NormalPropertyManager extends AbstractPropertyManager {
  static defineProperties(aTarget, aProperties, recreate?:boolean)
}
