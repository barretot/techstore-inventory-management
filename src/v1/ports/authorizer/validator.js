const { validate, validator } = require('../../adapters/validator')

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    pasword: { type: 'string', format: 'password' }
  },
  required: ['name', 'email', 'pasword'],
  additionalProperties: false
}

const schemaValidate = validate(schema)

const isValidPayload = (payload) => validator(payload, schemaValidate)

module.exports = { isValidPayload }
