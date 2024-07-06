const HTTPHandler = require('../../../ports/addProductInfos/httpHandler')

const postProductsRequest = async (productBody) => {
  const product = await HTTPHandler.addProduct(productBody)

  return {
    statusCode: 200,
    body: JSON.stringify({ product })
  }
}

module.exports = postProductsRequest
