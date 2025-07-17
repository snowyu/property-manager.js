import { isFunction, isObject } from 'util-ex';
import { defineProperty, getPrototypeOf } from 'inherits-ex';

const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;

function getJsonObjectAttrs(pm) {
  const pmIsCtor = isFunction(pm)
  if (pmIsCtor) {
    pm = new pm();
  }
  if (isObject(pm))  {
    const descriptors = getOwnPropertyDescriptors(pm);
    // const defaultOptions = descriptors.defaultOptions
    const nonExported1stChar = pm.nonExported1stChar || '$';
    delete descriptors.defaultOptions;
    delete descriptors.nonExported1stChar;
    const result = Object.keys(descriptors).reduce((o, k) => {
      const v = descriptors[k];
      if (v.enumerable && k.charAt(0) !== nonExported1stChar) {
        const defaultValue = (pmIsCtor) ? pm[k] : v.value;
        if (defaultValue !== undefined) {
          v.value = defaultValue
          v.type = normalizePropType(v)
        } else {
          v.type = 'string'
        }

        o[k] = v;
      }
      return o;
    }, {});
    return result;
  }
}

/**
 * Maps JavaScript primitive types and Array/Object constructors to their JSON Schema string equivalents.
 * @param {Function} type - The JavaScript type constructor (e.g., String, Number, Object, Array).
 * @returns {string|undefined} The corresponding JSON Schema type string, or undefined if not a recognized type.
 */
function getBasicType(type) {
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

function normalizePropType(prop) {
  let _type = prop.type
  if (_type && _type.$type) {
    _type = Array.isArray(_type) ? [_type.$type] : _type.$type;
  }
  if (!_type && prop.value !== undefined) {
    if (typeof prop.value === 'string') {
      _type = String;
    } else if (typeof prop.value === 'number') {
      _type = Number;
    } else if (typeof prop.value === 'boolean') {
      _type = Boolean;
    } else if (Array.isArray(prop.value)) {
      if (prop.value.length > 0) {
        const firstItem = prop.value[0];
        switch (typeof firstItem) {
        case 'string':
          _type = [String];
          break;
        case 'number':
          _type = [Number];
          break;
        case 'boolean':
          _type = [Boolean];
          break;
        case 'object':
          if (isObject(firstItem)) {
            _type = [firstItem.constructor];
          } else {
            _type = [String];
          }
          break;
        default:
          _type = [String];
      }
      } else {
        _type = [String];
      }
    } else if (isObject(prop.value)) {
      _type = prop.value.constructor;
    }
  }
  return _type;
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
  let attrs = proto.$attributes || (isFunction(pm.getProperties) ? pm.getProperties() : getJsonObjectAttrs(pm))
  if (attrs && typeof attrs === 'object') {
    attrs = {...attrs}
    if (!attrs._names) {
      defineProperty(attrs, '_names', Object.fromEntries(Object.keys(attrs).map(k => [k, k])))
    }

    for (const key in attrs._names) {
      const prop = {...attrs[key]}
      prop.type = normalizePropType(prop)

      attrs[key] = prop
    }
    return attrs;
  }
  throw new TypeError('The target is not a recognized PropertyManager!');
}

function toSchemaProp(prop) {
  const schemaProperty = {...prop};

  if (prop.value !== undefined) {
    schemaProperty.default = prop.value;
  }
  ['value', 'assigned', 'enumerable', 'exported', 'writable', 'required', 'configurable'].forEach(k => delete schemaProperty[k]);

  const propType = prop.type;

  if (Array.isArray(propType)) {
    schemaProperty.type = 'array';
    const itemType = propType[0];
    if (itemType && itemType.prototype && itemType.prototype.hasOwnProperty('$attributes')) {
      schemaProperty.items = toJsonSchema(itemType);
    } else {
      const typeString = getBasicType(itemType);
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
    const typeString = getBasicType(propType);
    if (typeString) {
      schemaProperty.type = typeString;
    }
  }
  return schemaProperty
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
    const schemaProperty = toSchemaProp(prop);

    if (prop.required) {
      required.push(propertyName);
    }


    schema.properties[propertyName] = schemaProperty;
  }

  if (required.length > 0) {
    schema.required = required;
  }

  return schema;
}