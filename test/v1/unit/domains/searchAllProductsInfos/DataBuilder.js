const searchAllProductsDynamo = require('./mocks/searchAllProductsDynamo.json')

class DataBuilder {
  constructor () {
    this.mockDependencies = {
      repository: {
        searchAll: jest.fn().mockReturnValue(searchAllProductsDynamo)
      }
    }
  }

  success () {
    return this
  }

  productNotFoundDynamo () {
    this.mockDependencies.repository.searchAll = jest.fn().mockReturnValue({ Items: [] })
    this.mockDependencies.validator = {
      isValidPayload: jest.fn().mockReturnValue({
        isValid: false,
        error: 'error'
      })
    }
    return this
  }

  catchError () {
    this.mockDependencies.repository.searchAll.mockRejectedValue(new Error('Dynamo search all product error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
