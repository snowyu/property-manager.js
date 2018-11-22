import AbstractPropertyManager, { PropDescriptors } from './abstract';

export default class NormalPropertyManager extends AbstractPropertyManager {
  static defineProperties(aTarget, aProperties:PropDescriptors, recreate?:boolean)
}
