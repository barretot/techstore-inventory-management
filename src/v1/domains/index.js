const { addProductInfos } = require('./addProductInfos')
const { updateProductInfos } = require('./updateProductInfos')
const { searchProductInfos } = require('./getProductInfos')
const { searchAllProductInfos } = require('./searchAllProductsInfos')
const { verifyToken } = require('./verifyToken')

module.exports = {
  addProductInfos,
  updateProductInfos,
  searchProductInfos,
  searchAllProductInfos,
  verifyToken
}
