const HTTPHandler = require('../../../ports/httpHandler')

const postProductsRequest = async (payload) => {
  const product = await HTTPHandler.addProduct(payload)

  return {
    statusCode: 200,
    body: JSON.stringify({ product })
  }
}

const putProductsRequest = async (payload, id) => {
  const product = await HTTPHandler.putProduct(payload, id)

  return {
    statusCode: 200,
    body: JSON.stringify({ product })
  }
}

module.exports = { postProductsRequest, putProductsRequest }
