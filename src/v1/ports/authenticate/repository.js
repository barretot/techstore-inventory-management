const dynamo = require('../../adapters/dynamoDB')

const searchByEmail = async (params) => {
  const data = await dynamo.scan(params)
  return data.Items ? data : { item: [] }
}

module.exports = {
  searchByEmail
}
