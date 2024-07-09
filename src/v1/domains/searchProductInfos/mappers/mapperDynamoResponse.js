const mapperDynamoResponse = (product) => ({
  ID: product.Item.ID.S,
  sku: product.Item.sku.S,
  name: product.Item.name.S,
  description: product.Item.description.S,
  category: product.Item.category.S,
  image: product.Item.image.S,
  price: product.Item.price.N
})

module.exports = { mapperDynamoResponse }
