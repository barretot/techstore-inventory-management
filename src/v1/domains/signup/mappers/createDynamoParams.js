const { v4: uuidv4 } = require('uuid')

const createDynamoParams = (payload, passwordHash) => ({
  TableName: 'tech-store-admins',
  Item: {
    ID: { S: uuidv4() },
    name: { S: payload.name },
    email: { S: payload.email },
    password: { S: passwordHash }
  }
})

module.exports = createDynamoParams
