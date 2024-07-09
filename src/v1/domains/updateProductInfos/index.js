const { searchDynamoParams, updateDynamoParams } = require('./mappers/createDynamoParams')
const { addS3Params, deleteS3Params } = require('./mappers/createS3Params')
const { getImageKey } = require('./utils')

module.exports = ({
  repository,
  s3,
  validator
}) => {
  const updateProductInfos = async (payload, id) => {
    try {
      const validate = await validator.isValidPayload(payload)

      if (!validate.isValid) {
        return validate.error
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

      await repository.update(updateParams)

      return {
        id,
        message: 'Product updated'
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    updateProductInfos
  }
}
