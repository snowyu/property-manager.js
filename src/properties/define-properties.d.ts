import Properties from './index.js'
import {PropDescriptors} from '../abstract'

/**
 * Define properties on the $attributes of the target object/class(prototype).
 *
 * @param {Function|object} aTarget the target class or object
 * @param {PropDescriptors} aProperties the attribute descriptors
 * @param {boolean} [recreate] Whether recreating the $attributes
 * @returns {Properties} the defined attributes
 */
export function defineProperties(aTarget: Function|object, aProperties: PropDescriptors, recreate?: boolean): Properties

export default defineProperties
