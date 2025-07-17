import { isFunction, isObject } from 'util-ex';
import { normalizeAttributes } from './to-json-schema';

/**
 * Converts a PropertyManager class or instance into a RJSF uiSchema object.
 * It recursively processes nested PropertyManager types and handles various property attributes
 * like writable status.
 * @param {object|Function} pm - The PropertyManager instance or class to convert.
 * @returns {object} A RJSF uiSchema representation of the PropertyManager.
 */
export function toUISchema(pm) {
  const attributes = normalizeAttributes(pm);
  const uiSchema = {};

  // Get static $uiSchema from the class if it exists
  const staticUiSchema = isFunction(pm) ? pm.$uiSchema : pm.constructor.$uiSchema;
  if (staticUiSchema) {
    Object.assign(uiSchema, staticUiSchema);
  }

  for (const key of Object.keys(attributes)) {
    const prop = attributes[key];
    const propertyName = attributes._names[key];

    // If the property is not meant to be exported or enumerable, remove it from uiSchema if it exists
    if (!prop || prop.exported === false || prop.enumerable === false) {
      if (uiSchema.hasOwnProperty(propertyName)) {
        delete uiSchema[propertyName];
      }
      continue;
    }

    let propUiSchema = uiSchema[propertyName];

    if (!propUiSchema) {
      propUiSchema = {};
    }

    Object.keys(prop).reduce((result, key) => {
      if (key.startsWith('ui:')) {
        result[key] = prop[key];
        delete prop[key];
      }
      return result;
    }, propUiSchema)

    // Map writable to ui:readonly
    if (prop.writable === false) {
      propUiSchema['ui:readonly'] = true;
    }

    const propType = prop.type;
    if (Array.isArray(propType)) {
      const itemType = propType[0];
      if (itemType && itemType.prototype && itemType.prototype.hasOwnProperty('$attributes')) {
        const nestedUiSchema = toUISchema(itemType);
        if (Object.keys(nestedUiSchema).length > 0) {
          if (!propUiSchema.items) {
            propUiSchema.items = {};
          }
          Object.assign(propUiSchema.items, nestedUiSchema);
        }
      }
    } else if (propType && propType.prototype && propType.prototype.hasOwnProperty('$attributes')) {
      const nestedUiSchema = toUISchema(propType);
      if (Object.keys(nestedUiSchema).length > 0) {
        Object.assign(propUiSchema, nestedUiSchema);
      }
    }

    // Only assign propUiSchema if it has content, or if it's a new entry
    if (Object.keys(propUiSchema).length > 0) {
      uiSchema[propertyName] = propUiSchema;
    } else if (uiSchema.hasOwnProperty(propertyName) && Object.keys(uiSchema[propertyName]).length === 0) {
      // If it's an empty object that was already there, delete it
      delete uiSchema[propertyName];
    }
  }

  return uiSchema;
}

function getUISchemaForType(itemType) {
  if (itemType) {
    let attrs = itemType.$attributes || itemType.getProperties
  }
}
