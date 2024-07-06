const { addProductInfos } = require('../../domains/addProductInfos')

const addProduct = async (productBody) => {
  const product = await addProductInfos(productBody)
  return product
}

module.exports = {
  addProduct
}
