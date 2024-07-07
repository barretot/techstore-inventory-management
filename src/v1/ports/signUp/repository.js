const dynamo = require('../../adapters/dynamoDB')

const insert = async (user) => {
  const data = await dynamo.insertItem(user)
  return data
}

module.exports = {
  insert
}
