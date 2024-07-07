const jwt = require('jsonwebtoken')

const configJwt = {
  secret: 'f2da0647eceff5090dd3cf822a90883e' // TestandoTechStoreJsonWebToken
}

const generateJwtToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email
  }

  return jwt.sign(
    payload,
    configJwt.secret,
    { expiresIn: 86400 }
  )
}

const verify = (token) => jwt.verify(token, configJwt.secret)

module.exports = { generateJwtToken, verify }
