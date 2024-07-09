const addProductWrapper = require('./addProductInfos')
const authenticateWrapper = require('./authenticate')
const authorizerWrapper = require('./authorizer')
const searchProductWrapper = require('./searchProductInfos')
const searchAllWrapper = require('./searchAllProductsInfos')
const signUpWrapper = require('./signUp')
const updateProductWrapper = require('./updateProductInfos')

module.exports = {
  addProductWrapper,
  authenticateWrapper,
  authorizerWrapper,
  searchProductWrapper,
  searchAllWrapper,
  signUpWrapper,
  updateProductWrapper
}
