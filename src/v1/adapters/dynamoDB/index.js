const {
  DynamoDBClient,
  PutItemCommand,
  DeleteItemCommand,
  UpdateItemCommand,
  GetItemCommand,
  ScanCommand
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
    throw new Error(err)
  }
}

const deleteItem = async (params) => {
  const command = new DeleteItemCommand(params)
  const response = await client.send(command)

  return response
}

const updateItem = async (params) => {
  try {
    const command = new UpdateItemCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

const getItem = async (params) => {
  try {
    const command = new GetItemCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

const scan = async (params) => {
  try {
    const command = new ScanCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { insertItem, deleteItem, updateItem, getItem, scan }
