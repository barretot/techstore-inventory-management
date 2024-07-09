const { searchDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')

module.exports = ({
  repository
}) => {
  const searchProductInfos = async (id) => {
    try {
      const product = await repository.search(
        searchDynamoParams(id)
      )

      if (!product.Item) {
        return { statusCode: '400', message: 'Product not found' }
      }

      return mapperDynamoResponse(product)
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    searchProductInfos
  }
}
