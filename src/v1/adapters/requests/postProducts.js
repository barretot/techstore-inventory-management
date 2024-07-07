const HTTPHandler = require('../../ports/httpHandler')

const postProductsRequest = async (payload) => {
  const product = await HTTPHandler.addProduct(payload)

  return {
    statusCode: 200,
    body: JSON.stringify({ product })
  }
}

const putProductsRequest = async (payload, id) => {
  await HTTPHandler.putProduct(payload, id)

  return {
    statusCode: 200,
    body: JSON.stringify({
      id,
      message: 'Product updated'
    })
  }
}

const getProductsRequest = async (id) => {
  const product = await HTTPHandler.getProduct(id)

  return {
    statusCode: 200,
    body: JSON.stringify({ product })
  }
}

const getAllProductsRequest = async () => {
  const products = await HTTPHandler.getAllProducts()

  return {
    statusCode: 200,
    body: JSON.stringify(products)
  }
}

const postAuthenticateRequest = async (event) => {
  const result = await HTTPHandler.postAuthenticate(event)

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}

const postAuthorizerRequest = async (event) => {
  const result = await HTTPHandler.postAuthorizer(event)

  return result
}

const postSignUpRequest = async (event) => {
  const result = await HTTPHandler.postSignUp(event)

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
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
