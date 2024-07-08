const repository = require('../../ports/addProductInfos/repository')
const s3 = require('../../ports/addProductInfos/uploadImage')
const { isValidPayload } = require('../../ports/addProductInfos/validator')
const createDynamoParams = require('./mappers/createDynamoParams')
const createS3Params = require('./mappers/createS3Params')

const addProductInfos = async (payload) => {
  try {
    const isValid = await isValidPayload(payload)

    if (!isValid) {
      return isValid.message
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
      price: dynamoParams.Item.price.S,
      sku: dynamoParams.Item.sku.S,
      category: dynamoParams.Item.category.S
    }
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  addProductInfos
}
