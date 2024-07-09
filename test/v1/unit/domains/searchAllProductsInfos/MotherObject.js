const DataBuilder = require('./DataBuilder')

const motherObject = {
  success: new DataBuilder().success().build(),
  productNotFoundDynamo: new DataBuilder().productNotFoundDynamo().build(),
  catchError: new DataBuilder().catchError().build()
}

module.exports = motherObject
