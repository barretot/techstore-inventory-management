const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const ajv = new Ajv()
addFormats(ajv)

const validate = (schema) => ajv.compile(schema)

const validator = (payload, schemaValidate) => {
  const valid = schemaValidate(payload)

  if (!valid) {
    const message = schemaValidate.errors.map((err) => `${err.instancePath} ${err.message}`).join('\n')
    return {
      isValid: false,
      error: message
    }
  }

  return { isValid: true }
}

module.exports = { validate, validator }
