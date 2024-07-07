const dynamo = require('../../adapters/dynamoDB')
const searchAll = async (params) => {
  const data = await dynamo.scan(params)
  return data.Items ? data : { items: [] }
}

module.exports = {
  searchAll
}
