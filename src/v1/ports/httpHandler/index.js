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

const postAuthorizer = async (event) => {
  const product = await domains.authorizer(event)
  return product
}

const postAuthenticate = async (event) => {
  const product = await domains.authenticate(event)
  return product
}

const postSignUp = async (event) => {
  const product = await domains.signUp(event)
  return product
}

module.exports = {
  addProduct,
  putProduct,
  getProduct,
  getAllProducts,
  postAuthorizer,
  postSignUp,
  postAuthenticate
}
