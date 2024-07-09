const { searchProductWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return success when fetching a product from DynamoDB', async () => {
    const mockDependencies = motherObject.success

    const result = await searchProductWrapper(mockDependencies).searchProductInfos(mockDependencies.payload, mockDependencies.id)

    expect(result).toEqual({
      ID: '6541ac45-7690-499b-a317-f088eb361a53',
      sku: 'PRODUCT_6ffa1d42-6aba-419a-aeb2-8dc4d6db4c93',
      name: 'iPhone 15',
      description: 'CEL BOM',
      category: 'Smarthphone',
      image: 'imageUrl',
      price: '90000'
    })
  })

  it('Should return error when get product from DynamoDB', async () => {
    const mockDependencies = motherObject.productNotFoundDynamo

    const result = await searchProductWrapper(mockDependencies).searchProductInfos(mockDependencies.id)

    expect(result).toEqual({
      statusCode: '400',
      message: 'Product not found'
    })
  })

  it('Should handle Dynamo search product error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(searchProductWrapper(mockDependencies)
      .searchProductInfos(mockDependencies.id)).rejects.toThrow('Dynamo search product error')
  })
})
