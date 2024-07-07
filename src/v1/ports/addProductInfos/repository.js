const dynamo = require('../../adapters/addProductsInfos/dynamoDB')

const insert = async (product) => {
  const data = await dynamo.insertItem(product)
  return data
}

module.exports = {
  insert
}
