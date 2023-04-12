import AbstractPropertyManager, { PropDescriptors } from './abstract';
import Properties from './properties';

export class AdvancePropertyManager extends AbstractPropertyManager {
  $attributes: Properties;

  /**
   * get all properties descriptor include inherited.
   */
  static getProperties(): PropDescriptors;
  static defineProperties(aTarget, aProperties: PropDescriptors, recreate?:boolean)
}

export default AdvancePropertyManager
