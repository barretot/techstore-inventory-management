const { compare } = require('../../adapters/bcrypt')

const comparePassword = async (password, userPassword) => {
  const data = await compare(password, userPassword)

  return data
}

module.exports = {
  comparePassword
}
