const postProductsRequest = require(
  './v1/adapters/addProductsInfos/requests/postProducts'
)

exports.lambdaHandler = async (event) => {
  const response = await postProductsRequest(event)
  return response
}
