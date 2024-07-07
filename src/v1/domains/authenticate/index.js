const repository = require('../../ports/authenticate/repository')
const { searchDynamoParams } = require('./mappers/createDynamoParams')
const { mapperDynamoResponse } = require('./mappers/mapperDynamoResponse')
const { generateToken } = require('../../ports/authenticate/jwt')
const { comparePassword } = require('../../ports/authenticate/hash')

const authenticate = async (payload) => {
  try {
    const product = await repository.searchByEmail(
      searchDynamoParams(payload.email)
    )

    const user = mapperDynamoResponse(product.Items[0])

    if (!await comparePassword(payload.password, user.password)) {
      return { message: 'Invalid credentials' }
    }

    const token = await generateToken({ id: user.ID, email: user.email })

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

module.exports = {
  authenticate
}
