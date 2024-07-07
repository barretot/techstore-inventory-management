const { marshall } = require('@aws-sdk/util-dynamodb')

const searchDynamoParams = (id) => ({
  TableName: 'tech-store-products',
  Key: marshall({ ID: id })
})

module.exports = { searchDynamoParams }
