const {
  DynamoDBClient,
  PutItemCommand,
  DeleteItemCommand
} = require('@aws-sdk/client-dynamodb')

const { v4: uuidv4 } = require('uuid')

const client = new DynamoDBClient({
  region: 'us-east-1'
})

const insertItem = async (params) => {
  try {
    const command = new PutItemCommand({
      TableName: 'tech-store-products',
      Item: {
        ID: { S: uuidv4() },
        productName: { S: 'Iphone' },
        image: { S: 'base64' },
        description: { S: 'bom' },
        amount: { S: '10.60' }
      }
    })
    const response = await client.send(command)

    return response
  } catch (err) {
    console.log(err)
  }
}

const deleteItem = async (params) => {
  const command = new DeleteItemCommand(params)
  const response = await client.send(command)

  return response
}

module.exports = { insertItem, deleteItem }
