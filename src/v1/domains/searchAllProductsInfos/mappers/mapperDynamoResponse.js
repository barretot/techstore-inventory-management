const mapperDynamoResponse = (products) => products.Items.map(items => ({
  ID: items.ID.S,
  sku: items.sku.S,
  name: items.name.S,
  description: items.description.S,
  category: items.category.S,
  image: items.image.S,
  price: items.price.N
}))

module.exports = { mapperDynamoResponse }
