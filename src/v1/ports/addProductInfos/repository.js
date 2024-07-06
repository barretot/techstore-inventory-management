const dynamo = require('../../adapters/addProductsInfos/dynamoDB/postProducts')

const insert = async (productBody) => {
  const data = await dynamo.insertItem(productBody)
  return data
}

module.exports = {
  insert
}
