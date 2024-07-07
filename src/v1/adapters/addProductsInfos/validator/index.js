const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const ajv = new Ajv()
addFormats(ajv)

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

const validate = ajv.compile(schema)

const validator = (payload) => {
  const valid = validate(payload)

  if (!valid) {
    const message = validate.errors.map((err) => `${err.instancePath} ${err.message}`).join('\n')
    return {
      isValid: false,
      error: message
    }
  }

  return { isValid: true }
}

module.exports = { schema, validator }
