const { searchAllWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return success when fetching all products from DynamoDB', async () => {
    const mockDependencies = motherObject.success

    const result = await searchAllWrapper(mockDependencies).searchAllProductInfos()

    expect(result).toEqual([
      {
        ID: '6541ac45-7690-499b-a317-f088eb361a53',
        sku: 'PRODUCT_6ffa1d42-6aba-419a-aeb2-8dc4d6db4c93',
        name: 'iPhone 15',
        description: 'ÓTIMO',
        category: 'Smarthphone',
        image: 'https://tech-store-images-bucket.s3.amazonaws.com/imagens/69cd1b5e-4a0f-4591-8df2-2f5aca156eeb.jpg',
        price: '90000'
      },
      {
        ID: '6d5e899b-0405-4f72-9c75-8c8977fc26e5',
        sku: 'PRODUCT_4e3e23ce-2391-45e5-aaa5-f6b1bde83b3d',
        name: 'TERLEVISOR',
        description: 'FOTO NOVA',
        category: 'TV',
        image: 'https://tech-store-images-bucket.s3.amazonaws.com/imagens/19928bad-65cd-4ebb-8452-71e13e16c51b.jpg',
        price: '8900'
      },
      {
        ID: '8c1bbd20-e881-4699-90cb-dd2136a0ee6e',
        sku: 'PRODUCT_2dae2255-8536-49e1-9cc6-b9ce9c0234e7',
        name: 'TERLEVISOR',
        description: 'CELULAR BOM',
        category: 'TV',
        image: 'https://tech-store-images-bucket.s3.amazonaws.com/imagens/47f693e7-2e41-418e-bf38-8c70a10223cc.jpg',
        price: '1000'
      }
    ])
  })

  it('should return error when no products exist in DynamoDB', async () => {
    const mockDependencies = motherObject.productNotFoundDynamo

    const result = await searchAllWrapper(mockDependencies).searchAllProductInfos()

    expect(result).toEqual({
      statusCode: '400',
      message: 'DynamoDB not contains products'
    })
  })

  it('Should handle Dynamo search all error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(searchAllWrapper(mockDependencies)
      .searchAllProductInfos(mockDependencies.id)).rejects.toThrow('Dynamo search all product error')
  })
})
