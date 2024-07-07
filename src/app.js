const { postProductsRequest, putProductsRequest } = require(
  './v1/adapters/addProductsInfos/requests/postProducts'
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
  return response
}
