const { validate, validator } = require('../../adapters/validator')

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    image: { type: 'string', format: 'byte' },
    price: { type: 'number' },
    sku: { type: 'string' },
    category: { type: 'string', enum: ['Smarthphone', 'TV', 'Acessories', 'Gadget'] }
  },
  required: ['name', 'description', 'image', 'price', 'sku', 'category'],
  additionalProperties: false
}

const schemaValidate = validate(schema)

const isValidPayload = (payload) => validator(payload, schemaValidate)

module.exports = { isValidPayload }
