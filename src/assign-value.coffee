assignValue = (value, type) ->
  if typeof type is 'function' and not (value instanceof type)
    try
      value = type(value)
    catch err
      msg = err.message
      throw err unless msg.endsWith('\'new\'') or msg.endsWith(' a function')
      value = new type(value)
  value
module.exports = assignValue
module.exports.default = assignValue
