const repository = require('../../ports/getProductInfos/repository')
const { searchDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')

const searchProductInfos = async (id) => {
  try {
    const product = await repository.search(searchDynamoParams(id))

    return mapperDynamoResponse(product)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  searchProductInfos
}
