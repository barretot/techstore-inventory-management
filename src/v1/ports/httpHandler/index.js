const domains = require('../../domains')

const addProduct = async (payload) => {
  const product = await domains.addProductInfos(payload)
  return product
}

const putProduct = async (payload, id) => {
  const product = await domains.updateProductInfos(payload, id)
  return product
}

module.exports = {
  addProduct,
  putProduct
}
