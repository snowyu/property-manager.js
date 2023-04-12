import AbstractPropertyManager, { PropDescriptors } from './abstract';

export class NormalPropertyManager extends AbstractPropertyManager {
  $attributes: PropDescriptors;

  /**
   * get all properties descriptor include inherited.
   */
  static getProperties(): PropDescriptors;

  static defineProperties(aTarget, aProperties:PropDescriptors, recreate?:boolean)
}

export default NormalPropertyManager
