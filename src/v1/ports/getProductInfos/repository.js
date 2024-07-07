const dynamo = require('../../adapters/dynamoDB')

const search = async (params) => {
  const data = await dynamo.getItem(params)
  return data.Item ? data : { item: [] }
}

const searchAll = async (params) => {
  const data = await dynamo.scan(params)
  return data.Items ? data : { items: [] }
}

module.exports = {
  search,
  searchAll
}
