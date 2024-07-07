const { v4: uuidv4 } = require('uuid')

const createDynamoParams = (payload, imagePath) => ({
  TableName: 'tech-store-products',
  Item: {
    ID: { S: uuidv4() },
    name: { S: payload.name },
    description: { S: payload.description },
    image: { S: imagePath },
    price: { N: payload.price.toString() },
    sku: { S: `PRODUCT_${uuidv4()}` },
    category: { S: payload.category }
  }
})

module.exports = createDynamoParams
