const dynamo = require('../../adapters/dynamoDB')

const update = async (params) => {
  const data = await dynamo.updateItem(params)
  return data
}

const search = async (params) => {
  const data = await dynamo.getItem(params)
  return data.Item ? data.Item.image.S : null
}

module.exports = {
  update,
  search
}
