import { isFunction, isObject } from 'util-ex';
import { getPrototypeOf } from 'inherits-ex';

/**
 * Maps JavaScript primitive types and Array/Object constructors to their JSON Schema string equivalents.
 * @param {Function} type - The JavaScript type constructor (e.g., String, Number, Object, Array).
 * @returns {string|undefined} The corresponding JSON Schema type string, or undefined if not a recognized type.
 */
function getType(type) {
  switch (type) {
    case String:
      return 'string';
    case Number:
      return 'number';
    case Boolean:
      return 'boolean';
    case Object:
      return 'object';
    case Array:
      return 'array';
    default:
      return undefined;
  }
}

/**
 * Normalizes the attributes of a PropertyManager instance or class.
 * It extracts property descriptors, inferring types from default values if not explicitly defined.
 * @param {object|Function} pm - The PropertyManager instance or class.
 * @returns {object} An object containing normalized property attributes.
 * @throws {TypeError} If the target is not a recognized PropertyManager.
 */
export function normalizeAttributes(pm) {
  const proto = isFunction(pm) ? pm.prototype : getPrototypeOf(pm);
  const attrs = proto.$attributes || (isFunction(pm.getProperties) ? pm.getProperties() : undefined)

  if (proto.$attributes) {
    return proto.$attributes;
  }

  if (isFunction(proto.getProperties)) {
    const instance = isFunction(pm) ? new pm() : pm;
    const simpleProps = instance.getProperties();
    const normalized = { _names: {} };

    for (const key of Object.keys(simpleProps)) {
      if (key === 'defaultOptions') continue;

      const prop = { ...simpleProps[key] };
      normalized[key] = prop;
      normalized._names[key] = key;
      const _type = prop.type
      if (_type && _type.$type) {
        prop.type = Array.isArray(_type) ? [_type.$type] : _type.$type;
      }

      if (!prop.type && prop.value !== undefined) {
        if (typeof prop.value === 'string') {
          prop.type = String;
        } else if (typeof prop.value === 'number') {
          prop.type = Number;
        } else if (typeof prop.value === 'boolean') {
          prop.type = Boolean;
        } else if (Array.isArray(prop.value)) {
          if (prop.value.length > 0) {
            const firstItem = prop.value[0];
            switch (typeof firstItem) {
            case 'string':
              prop.type = [String];
              break;
            case 'number':
              prop.type = [Number];
              break;
            case 'boolean':
              prop.type = [Boolean];
              break;
            case 'object':
              if (isObject(firstItem)) {
                prop.type = [Object];
              } else {
                prop.type = [String];
              }
              break;
            default:
              prop.type = [String];
          }
          } else {
            prop.type = [String];
          }
        } else if (isObject(prop.value)) {
          prop.type = Object;
        }
      }
    }
    return normalized;
  }

  throw new TypeError('The target is not a recognized PropertyManager!');
}

/**
 * Converts a PropertyManager class or instance into a JSON Schema object.
 * It recursively processes nested PropertyManager types and handles various property attributes
 * like type, default value, description, and required status.
 * @param {object|Function} pm - The PropertyManager instance or class to convert.
 * @returns {object} A JSON Schema representation of the PropertyManager.
 */
export function toJsonSchema(pm) {
  const attributes = normalizeAttributes(pm);

  const schema = {
    type: 'object',
    properties: {},
  };
  const required = [];

  for (const key of Object.keys(attributes)) {
    const prop = attributes[key];
    if (!prop || prop.exported === false || prop.enumerable === false || (!prop.type && prop.value === undefined)) {
      continue;
    }

    const propertyName = attributes._names[key];
    const schemaProperty = {};

    if (prop.description) {
      schemaProperty.description = prop.description;
    }
    if (prop.required) {
      required.push(propertyName);
    }
    if (prop.value !== undefined) {
      schemaProperty.default = prop.value;
    }

    const propType = prop.type;

    if (Array.isArray(propType)) {
      schemaProperty.type = 'array';
      const itemType = propType[0];
      if (itemType && itemType.prototype && itemType.prototype.hasOwnProperty('$attributes')) {
        schemaProperty.items = toJsonSchema(itemType);
      } else {
        const typeString = getType(itemType);
        if (typeString) {
          schemaProperty.items = { type: typeString };
        } else {
          schemaProperty.items = {};
        }
      }
    } else if (propType && propType.prototype && propType.prototype.hasOwnProperty('$attributes')) {
      const nestedSchema = toJsonSchema(propType);
      Object.assign(schemaProperty, nestedSchema);
    } else {
      const typeString = getType(propType);
      if (typeString) {
        schemaProperty.type = typeString;
      }
    }
    schema.properties[propertyName] = schemaProperty;
  }

  if (required.length > 0) {
    schema.required = required;
  }

  return schema;
}