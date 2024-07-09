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
        search: jest.fn().mockReturnValue('https://tech-store-images-bucket.s3.amazonaws.com/imagens/69cd1b5e-4a0f-4591-8df2-2f5aca156eeb.jpg'),
        update: jest.fn().mockReturnValue(true)
      },
      s3: {
        upload: jest.fn().mockReturnValue(true),
        deleteObject: jest.fn().mockReturnValue(true)
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

  catchError () {
    this.mockDependencies.s3.deleteObject.mockRejectedValue(new Error('S3 delete object error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
