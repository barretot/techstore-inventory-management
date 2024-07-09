const { validate, validator } = require('../../adapters/validator')

const schema = {
  type: 'object',
  properties: {
    description: { type: 'string' },
    image: { type: 'string', format: 'byte' },
    price: { type: 'number' }
  },
  required: ['description', 'image', 'price'],
  additionalProperties: false
}

const schemaValidate = validate(schema)
console.log(schemaValidate)

const isValidPayload = (payload) => validator(payload, schemaValidate)

module.exports = { isValidPayload }
