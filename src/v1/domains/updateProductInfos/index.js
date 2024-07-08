const repository = require('../../ports/putProductInfos/repository')
const s3 = require('../../ports/updateProductInfos/s3')
const { isValidPayload } = require('../../ports/putProductInfos/validator')
const { searchDynamoParams, updateDynamoParams } = require('./mappers/createDynamoParams')
const { addS3Params, deleteS3Params } = require('./mappers/createS3Params')
const { getImageKey } = require('./utils')

const updateProductInfos = async (payload, id) => {
  try {
    const isValid = await isValidPayload(payload)

    if (!isValid) {
      return isValid.message
    }

    const atualImagePath = await repository.search(
      searchDynamoParams(id)
    )

    const imageKey = getImageKey(atualImagePath)

    await s3.deleteObject(
      deleteS3Params(imageKey)
    )

    const { params, imagePath } = addS3Params(payload)

    await s3.upload(params)

    const updateParams = updateDynamoParams(payload, imagePath, id)

    const product = await repository.update(updateParams)

    return product
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  updateProductInfos
}
