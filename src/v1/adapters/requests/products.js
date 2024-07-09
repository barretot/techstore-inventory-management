const HTTPHandler = require('../../controllers')

const postProductsRequest = async (payload) => {
  const product = await HTTPHandler.addProduct(payload)

  return { body: JSON.stringify({ product }) }
}

const putProductsRequest = async (payload, id) => {
  const product = await HTTPHandler.putProduct(payload, id)

  return {
    body: JSON.stringify({
      product
    })
  }
}

const getProductsRequest = async (id) => {
  const product = await HTTPHandler.getProduct(id)

  return { body: JSON.stringify({ product }) }
}

const getAllProductsRequest = async () => {
  const products = await HTTPHandler.getAllProducts()

  return { body: JSON.stringify(products) }
}

const postAuthenticateRequest = async (event) => {
  const result = await HTTPHandler.postAuthenticate(event)

  return { body: JSON.stringify(result) }
}

const postAuthorizerRequest = async (event) => {
  const result = await HTTPHandler.postAuthorizer(event)

  return result
}

const postSignUpRequest = async (event) => {
  const result = await HTTPHandler.postSignUp(event)

  return { body: JSON.stringify(result) }
}

module.exports = {
  postProductsRequest,
  putProductsRequest,
  getProductsRequest,
  getAllProductsRequest,
  postAuthorizerRequest,
  postSignUpRequest,
  postAuthenticateRequest
}
