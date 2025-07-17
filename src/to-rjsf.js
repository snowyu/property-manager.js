import { toJsonSchema } from './to-json-schema';
import { toUISchema } from './to-ui-schema';

/**
 * Converts a PropertyManager instance's schema to RJSF compatible format.
 * @param {object|Function} pm - The PropertyManager instance or class to convert.
 * @returns {{schema: object, uiSchema: object}} - Returns an object containing RJSF schema and uiSchema.
 */
export function toRjsf(pm) {
  const schema = toJsonSchema(pm);
  const uiSchema = toUISchema(pm);
  return { schema, uiSchema };
}
