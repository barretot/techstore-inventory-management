const { hash } = require('../../adapters/bcrypt')

const createHash = (password) => {
  const data = hash(password)
  return data
}

module.exports = {
  createHash
}
