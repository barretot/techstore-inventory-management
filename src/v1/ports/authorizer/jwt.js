const { verify } = require('../../adapters/jwt')

const verifyToken = async (request) => {
  const data = await verify(request)
  return data
}

module.exports = {
  verifyToken
}
