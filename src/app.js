const {
  postProductsRequest,
  putProductsRequest,
  getProductsRequest,
  getAllProductsRequest,
  postAuthorizerRequest,
  postSignUpRequest,
  postAuthenticateRequest
} = require('./v1/adapters/requests/products')

exports.addProductHandler = async (event) => {
  const response = await postProductsRequest(JSON.parse(event.body))
  return response
}

exports.updateProductHandler = async (event) => {
  const response = await putProductsRequest(JSON.parse(event.body), event.pathParameters.id)

  return response
}

exports.searchProductHandler = async (event) => {
  const response = await getProductsRequest(
    event.pathParameters.id
  )
  return response
}

exports.searchAllProductsHandler = async (event) => {
  const response = await getAllProductsRequest()
  return response
}

exports.authenticateHandler = async (event) => {
  const response = await postAuthenticateRequest(JSON.parse(event.body))
  return response
}

exports.authorizerHandler = async (event) => {
  const response = await postAuthorizerRequest(event)
  return response
}

exports.signUpHandler = async (event) => {
  const response = await postSignUpRequest(JSON.parse(event.body))
  return response
}
