const mapperDynamoResponse = (user) => ({
  ID: user.ID.S,
  email: user.email.S,
  password: user.password.S
})

module.exports = { mapperDynamoResponse }
