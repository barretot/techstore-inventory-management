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

    const product = await repository.insert(dynamoParams)

    return product
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  addProductInfos
}
