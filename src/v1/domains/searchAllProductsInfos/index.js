const repository = require('../../ports/getProductInfos/repository')
const { searchAllDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')

const searchAllProductInfos = async () => {
  try {
    const products = await repository.searchAll(
      searchAllDynamoParams()
    )

    return mapperDynamoResponse(products)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  searchAllProductInfos
}
