const { marshall } = require('@aws-sdk/util-dynamodb')

const updateDynamoParams = (payload, newImagePath, id) => ({
  TableName: 'tech-store-products',
  Key: { ID: { S: id } },
  UpdateExpression: 'SET #description = :newDescription, #image = :newImage, #price = :newPrice',
  ExpressionAttributeNames: {
    '#description': 'description',
    '#image': 'image',
    '#price': 'price'
  },
  ExpressionAttributeValues: marshall({
    ':newDescription': payload.description,
    ':newImage': newImagePath,
    ':newPrice': payload.price
  }),
  ReturnValues: 'ALL_NEW'
})

const searchDynamoParams = (id) => ({
  TableName: 'tech-store-products',
  Key: marshall({ ID: id })
})

module.exports = { updateDynamoParams, searchDynamoParams }
