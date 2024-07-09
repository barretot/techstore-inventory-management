const { authorizerWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should authorize the use of the route when the token is passed and validated', async () => {
    const mockDependencies = motherObject.success

    const result = await authorizerWrapper(mockDependencies).authorizer(mockDependencies.payload)

    expect(result).toHaveProperty('principalId')
    expect(result).toHaveProperty('policyDocument')
    expect(result.policyDocument.Statement[0].Effect).toEqual('Allow')
  })

  it('Should return unauthorized when the token is invalid', async () => {
    const mockDependencies = motherObject.invalidToken

    const result = await authorizerWrapper(mockDependencies).authorizer(mockDependencies.payload)

    expect(result).toHaveProperty('principalId')
    expect(result).toHaveProperty('policyDocument')
    expect(result.policyDocument.Statement[0].Effect).toEqual('Deny')
  })

  it('Should handle JWT Verify token error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(authorizerWrapper(mockDependencies)
      .authorizer(mockDependencies.payload)).rejects.toThrow('JWT Verify token error')
  })
})
