const { searchAllDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')

module.exports = ({
  repository
}) => {
  const searchAllProductInfos = async () => {
    try {
      const products = await repository.searchAll(
        searchAllDynamoParams()
      )

      if (!products.Items.length) {
        return { statusCode: '400', message: 'DynamoDB not contains products' }
      }

      return mapperDynamoResponse(products)
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    searchAllProductInfos
  }
}
