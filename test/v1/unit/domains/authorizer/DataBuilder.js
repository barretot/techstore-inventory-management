class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        type: 'TOKEN',
        methodArn: 'arn:aws:execute-api:us-east-1:907257771839:e0nmq5qbac/dev/GET/products',
        authorizationToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      },
      jwt: {
        verifyToken: jest.fn().mockReturnValue({
          id: 'e70744fe-d955-4f2a-b6a5-2bb07a0603c5'
        })
      }
    }
  }

  success () {
    return this
  }

  invalidToken () {
    this.mockDependencies.payload.authorizationToken = ''
    return this
  }

  catchError () {
    this.mockDependencies.jwt.verifyToken.mockRejectedValue(new Error('JWT Verify token error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
