const { searchDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')

module.exports = ({
  repository,
  jwt,
  bcrypt
}) => {
  const authenticate = async (payload) => {
    try {
      const searchEmail = await repository.searchByEmail(
        searchDynamoParams(payload.email)
      )

      const user = mapperDynamoResponse(searchEmail.Items[0])

      if (!await bcrypt.comparePassword(payload.password, user.password)) {
        return { error: 400, message: 'Invalid credentials' }
      }

      const token = await jwt.generateToken({ id: user.ID, email: user.email })

      return {
        user: {
          ID: user.ID,
          email: user.email
        },
        token
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return { authenticate }
}
