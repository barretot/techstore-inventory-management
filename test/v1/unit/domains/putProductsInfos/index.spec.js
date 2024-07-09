const { updateProductWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return success when it is a valid payload and product updated', async () => {
    const mockDependencies = motherObject.success

    const result = await updateProductWrapper(mockDependencies).updateProductInfos(
      mockDependencies.payload,
      mockDependencies.id
    )

    expect(result).toEqual({
      id: '6541ac45-7690-499b-a317-f088eb361a53',
      message: 'Product updated'
    })
  })

  it('Should return error when payload is invalid', async () => {
    const mockDependencies = motherObject.payloadIsInvalid

    const result = await updateProductWrapper(mockDependencies).updateProductInfos(
      mockDependencies.payload,
      mockDependencies.id
    )

    expect(result).toEqual('error')
  })

  it('Should handle S3 delete object error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(updateProductWrapper(mockDependencies).updateProductInfos(
      mockDependencies.payload, mockDependencies.id)).rejects.toThrow('S3 delete object error')
  })
})
