const domains = require('../../domains')

const addProduct = async (payload) => {
  const product = await domains.addProductInfos(payload)
  return product
}

const putProduct = async (payload, id) => {
  const product = await domains.updateProductInfos(payload, id)
  return product
}

const getProduct = async (id) => {
  const product = await domains.searchProductInfos(id)
  return product
}

const getAllProducts = async () => {
  const product = await domains.searchAllProductInfos()
  return product
}

const postJwtToken = async (event) => {
  const product = await domains.verifyToken(event)
  return product
}

module.exports = {
  addProduct,
  putProduct,
  getProduct,
  getAllProducts,
  postJwtToken
}
