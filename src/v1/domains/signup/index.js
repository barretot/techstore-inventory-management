const repository = require('../../ports/signUp/repository')
const { createHash } = require('../../ports/signUp/hash')
const { isValidPayload } = require('../../ports/signUp/validator')
const createDynamoParams = require('./mappers/createDynamoParams')

const signUp = async (payload) => {
  try {
    const isValid = await isValidPayload(payload)

    if (!isValid) {
      return isValid.message
    }

    const passwordHash = await createHash(payload.password)

    const dynamoParams = createDynamoParams(payload, passwordHash)

    const product = await repository.insert(dynamoParams)

    return product
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  signUp
}
