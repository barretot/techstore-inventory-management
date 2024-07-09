const {
  addProductWrapper,
  updateProductWrapper,
  searchProductWrapper,
  searchAllWrapper,
  authorizerWrapper,
  authenticateWrapper,
  signUpWrapper
} = require('../domains')

const {
  addProductInfosDependencies,
  updateProductInfosDependencies,
  authenticateDependencies,
  authorizerDependencies,
  searchAllProductInfosDependencies,
  searchProductInfosDependencies,
  signUpDependencies
} = require('../ports')

const addProduct = async (payload) => await addProductWrapper({
  repository: addProductInfosDependencies.repository,
  s3: addProductInfosDependencies.s3,
  validator: addProductInfosDependencies.validator
}).addProductInfos(payload)

const putProduct = async (payload, id) => await updateProductWrapper({
  repository: updateProductInfosDependencies.repository,
  s3: updateProductInfosDependencies.s3,
  validator: updateProductInfosDependencies.validator
}).updateProductInfos(payload, id)

const getProduct = async (id) => {
  const product = await searchProductWrapper({
    repository: searchProductInfosDependencies.repository
  }).searchProductInfos(id)
  return product
}

const getAllProducts = async () => await searchAllWrapper({
  repository: searchAllProductInfosDependencies.repository
}).searchAllProductInfos()

const postAuthorizer = async (event) => await authorizerWrapper({
  jwt: authorizerDependencies.jwt
}).authorizer(event)

const postAuthenticate = async (event) => await authenticateWrapper({
  repository: authenticateDependencies.repository,
  jwt: authenticateDependencies.jwt,
  bcrypt: authenticateDependencies.hash
}).authenticate(event)

const postSignUp = async (event) => await signUpWrapper({
  repository: signUpDependencies.repository,
  bcrypt: signUpDependencies.hash,
  validator: signUpDependencies.validator
}).signUp(event)

module.exports = {
  addProduct,
  putProduct,
  getProduct,
  getAllProducts,
  postAuthorizer,
  postSignUp,
  postAuthenticate
}
