const { createDynamoParams, searchDynamoParams } = require('./mappers/createDynamoParams')

module.exports = ({
  repository,
  bcrypt,
  validator
}) => {
  const signUp = async (payload) => {
    try {
      const validate = await validator.isValidPayload(payload)

      if (!validate.isValid) {
        return validate.error
      }

      const user = await repository.searchByEmail(
        searchDynamoParams(payload.email)
      )

      if (user.Items.length > 0) {
        return { statusCode: 400, message: 'User already exists' }
      }

      const passwordHash = await bcrypt.createHash(payload.password)

      const dynamoParams = createDynamoParams(payload, passwordHash)

      await repository.insert(dynamoParams)

      return {
        statusCode: 200,
        user: {
          ID: dynamoParams.Item.ID.S,
          name: dynamoParams.Item.name.S,
          email: dynamoParams.Item.email.S
        }
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return { signUp }
}
