const { validate, validator } = require('../../adapters/validator')

const schema = {
  type: 'object',
  properties: {
    description: { type: 'string' },
    image: { type: 'string', format: 'byte' },
    price: { type: 'number' }
  },
  additionalProperties: false
}

const schemaValidate = validate(schema)

const isValidPayload = (payload) => validator(payload, schemaValidate)

module.exports = { isValidPayload }
