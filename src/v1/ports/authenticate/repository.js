const dynamo = require('../../adapters/dynamoDB')

const searchByEmail = async (params) => {
  const data = await dynamo.scan(params)
  return data.Items ? data : { Item: false }
}

module.exports = {
  searchByEmail
}
