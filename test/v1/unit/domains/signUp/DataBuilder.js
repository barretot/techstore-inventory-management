class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        name: 'User test',
        email: 'teste@teste.com',
        password: '123456'
      },
      repository: {
        searchByEmail: jest.fn().mockReturnValue({ Items: [] }),
        insert: jest.fn().mockReturnValue(false)
      },
      bcrypt: {
        createHash: jest.fn().mockReturnValue('$2b$10$XjEhNMyhkaM19nO6E')
      },
      validator: {
        isValidPayload: jest.fn().mockReturnValue({
          isValid: true
        })
      }
    }
  }

  success () {
    return this
  }

  payloadIsInvalid () {
    this.mockDependencies.validator = {
      isValidPayload: jest.fn().mockReturnValue({
        isValid: false,
        error: 'error'
      })
    }
    return this
  }

  userExists () {
    this.mockDependencies.repository.searchByEmail = jest.fn().mockReturnValue({ Items: ['one'] })
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
