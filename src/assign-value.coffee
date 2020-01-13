assignValue = (value, type) ->
  if typeof type is 'function'
    try
      value = type(value)
    catch err
      throw err unless err.message.endsWith('\'new\'')
      value = new type(value)
  value
module.exports = assignValue
module.exports.default = assignValue
