const searchProductDynamo = require('./mocks/searchProductDynamo.json')

class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        description: 'FOTO NOVA',
        image: 'newImageBase64',
        price: 8900

      },
      id: '6541ac45-7690-499b-a317-f088eb361a53',
      repository: {
        search: jest.fn().mockReturnValue(searchProductDynamo)
      }
    }
  }

  success () {
    return this
  }

  productNotFoundDynamo () {
    this.mockDependencies.repository.search = jest.fn().mockReturnValue({ Item: false })
    this.mockDependencies.validator = {
      isValidPayload: jest.fn().mockReturnValue({
        isValid: false,
        error: 'error'
      })
    }
    return this
  }

  catchError () {
    this.mockDependencies.repository.search.mockRejectedValue(new Error('Dynamo search product error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
