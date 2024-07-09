const dynamo = require('../../adapters/dynamoDB')

const insert = async (user) => {
  const data = await dynamo.insertItem(user)
  return data
}

const searchByEmail = async (params) => {
  const data = await dynamo.scan(params)
  return data.Items ? data : { item: [] }
}

module.exports = {
  insert,
  searchByEmail
}
