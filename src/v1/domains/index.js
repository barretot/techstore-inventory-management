const { addProductInfos } = require('./addProductInfos')
const { updateProductInfos } = require('./updateProductInfos')
const { searchProductInfos } = require('./getProductInfos')
const { searchAllProductInfos } = require('./searchAllProductsInfos')
const { authorizer } = require('./authorizer')
const { authenticate } = require('./authenticate')
const { signUp } = require('./signup')

module.exports = {
  addProductInfos,
  updateProductInfos,
  searchProductInfos,
  searchAllProductInfos,
  authorizer,
  authenticate,
  signUp
}
