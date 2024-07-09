const { authenticateWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return token when email and password is ok', async () => {
    const mockDependencies = motherObject.success

    const result = await authenticateWrapper(mockDependencies).authenticate(mockDependencies.payload)

    expect(result).toEqual({
      user: {
        ID: 'e70744fe-d955-4f2a-b6a5-2bb07a0603c5',
        email: 'teste@teste.com'
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTE3'
    })
  })

  it('Should return an error when the user password does not match.', async () => {
    const mockDependencies = motherObject.passwordNotMatch

    const result = await authenticateWrapper(mockDependencies).authenticate(mockDependencies.payload)

    expect(result).toEqual({
      error: 400,
      message: 'Invalid credentials'
    })
  })

  it('Should handle Dynamo search by email user error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(authenticateWrapper(mockDependencies)
      .authenticate(mockDependencies.payload)).rejects.toThrow('Dynamo search by email user error')
  })
})
