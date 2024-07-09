const dynamo = require('../../adapters/dynamoDB')

const search = async (params) => {
  const data = await dynamo.getItem(params)
  return data.Item ? data : { Item: false }
}

module.exports = {
  search
}
