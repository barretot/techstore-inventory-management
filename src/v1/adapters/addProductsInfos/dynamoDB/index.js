const {
  DynamoDBClient,
  PutItemCommand,
  DeleteItemCommand
} = require('@aws-sdk/client-dynamodb')

const client = new DynamoDBClient({
  region: 'us-east-1'
})

const insertItem = async (params) => {
  try {
    const command = new PutItemCommand(params)
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
