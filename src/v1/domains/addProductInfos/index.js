const createDynamoParams = require('./mappers/createDynamoParams')
const createS3Params = require('./mappers/createS3Params')

module.exports = ({
  repository,
  s3,
  validator
}) => {
  const addProductInfos = async (payload) => {
    try {
      const validate = await validator.isValidPayload(payload)

      if (!validate.isValid) {
        return validate.error
      }

      const { params, imagePath } = createS3Params(payload)

      await s3.upload(params)

      const dynamoParams = createDynamoParams(payload, imagePath)

      await repository.insert(dynamoParams)

      return {
        ID: dynamoParams.Item.ID.S,
        name: dynamoParams.Item.name.S,
        description: dynamoParams.Item.description.S,
        image: dynamoParams.Item.image.S,
        price: dynamoParams.Item.price.N,
        sku: dynamoParams.Item.sku.S,
        category: dynamoParams.Item.category.S
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    addProductInfos
  }
}
