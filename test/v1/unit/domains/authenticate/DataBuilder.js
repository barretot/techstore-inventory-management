const dynamoAdminUserMock = require('./mocks/dynamoAdminUserMock.json')

class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        email: 'teste@teste.com',
        password: '12345678'
      },
      id: '6541ac45-7690-499b-a317-f088eb361a53',
      repository: {
        searchByEmail: jest.fn().mockReturnValue(dynamoAdminUserMock)
      },
      bcrypt: {
        comparePassword: jest.fn().mockResolvedValue(true)
      },
      jwt: {
        generateToken: jest.fn().mockReturnValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTE3')
      }
    }
  }

  success () {
    return this
  }

  passwordNotMatch () {
    this.mockDependencies.bcrypt.comparePassword = jest.fn().mockReturnValue(false)
    this.mockDependencies.validator = {
      isValidPayload: jest.fn().mockReturnValue({
        isValid: false,
        error: 'error'
      })
    }
    return this
  }

  catchError () {
    this.mockDependencies.repository.searchByEmail.mockRejectedValue(new Error('Dynamo search by email user error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
