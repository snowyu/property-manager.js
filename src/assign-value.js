export function assignValue(value, type) {
  if (typeof type === 'function' && !(value instanceof type)) {
    try {
      value = type(value);
    } catch (err) {
      const msg = err.message;
      if (!(msg.endsWith('\'new\'') || msg.endsWith(' a function'))) {
        throw err;
      }
      // eslint-disable-next-line new-cap
      value = new type(value);
    }
  }
  return value;
}

export default assignValue;
