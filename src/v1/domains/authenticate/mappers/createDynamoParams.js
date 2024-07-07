const { marshall } = require('@aws-sdk/util-dynamodb')

const searchDynamoParams = (email) => ({
  TableName: 'tech-store-admins',
  FilterExpression: 'email = :email',
  ExpressionAttributeValues: marshall({
    ':email': email
  })
})

module.exports = { searchDynamoParams }
