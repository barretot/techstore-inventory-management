const { generateJwtToken } = require('../../adapters/jwt')

const generateToken = async (request) => {
  const data = await generateJwtToken(request)
  return data
}

module.exports = {
  generateToken
}
