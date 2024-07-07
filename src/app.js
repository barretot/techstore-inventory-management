const {
  postProductsRequest,
  putProductsRequest,
  getProductsRequest,
  getAllProductsRequest,
  postJwtTokenRequest
} = require(
  './v1/adapters/requests/postProducts'
)

exports.addProductHandler = async (event) => {
  const response = await postProductsRequest(JSON.parse(event.body))
  return response
}

exports.updateProductHandler = async (event) => {
  const response = await putProductsRequest(
    JSON.parse(event.body),
    event.pathParameters.id
  )
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
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

exports.verifyTokenHandler = async (event) => {
  const response = await postJwtTokenRequest(event)
  return response
}
