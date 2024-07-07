const { hash, compare } = require('../../adapters/bcrypt')

const createHash = (password) => {
  const data = hash(password)
  return data
}

const comparePassword = async (password, userPassword) => {
  const data = await compare(password, userPassword)

  return data
}

module.exports = {
  createHash,
  comparePassword
}
