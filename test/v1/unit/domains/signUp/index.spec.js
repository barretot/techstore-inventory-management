const { signUpWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return success when insert new admin user', async () => {
    const mockDependencies = motherObject.success

    const result = await signUpWrapper(mockDependencies).signUp(mockDependencies.payload)

    expect(result.user).toHaveProperty('ID')
    expect(result.user).toHaveProperty('name')
    expect(result.user).toHaveProperty('email')
  })

  it('Should return error when payload is invalid', async () => {
    const mockDependencies = motherObject.payloadIsInvalid

    const result = await signUpWrapper(mockDependencies).signUp(mockDependencies.payload)

    expect(result).toEqual('error')
  })

  it('Should return an error when the user exists in DynamoDB', async () => {
    const mockDependencies = motherObject.userExists

    const result = await signUpWrapper(mockDependencies).signUp(mockDependencies.payload)

    expect(result).toEqual({
      statusCode: 400,
      message: 'User already exists'
    })
  })

  it('Should handle Dynamo search by email user error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(signUpWrapper(mockDependencies).signUp(mockDependencies.payload)).rejects.toThrow('Dynamo search by email user error')
  })
})
