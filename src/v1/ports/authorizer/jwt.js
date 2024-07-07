const { generateJwtToken, verify } = require('../../adapters/jwt')

const generateToken = async (request) => {
  const data = await generateJwtToken(request)
  return data
}

const verifyToken = async (request) => {
  const data = await verify(request)
  return data
}

module.exports = {
  generateToken,
  verifyToken
}
