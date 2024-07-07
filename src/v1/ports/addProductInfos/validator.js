const { validator } = require('../../adapters/addProductsInfos/validator')

const validate = (payload) => {
  const data = validator(payload)
  return data
}

module.exports = validate
