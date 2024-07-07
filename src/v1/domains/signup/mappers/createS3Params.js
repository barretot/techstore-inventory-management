const { v4: uuidv4 } = require('uuid')

const createS3Params = (payload) => {
  const params = {
    Bucket: 'tech-store-images-bucket',
    Key: `imagens/${uuidv4()}.jpg`,
    Body: Buffer.from(payload.image, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  }

  return {
    params,
    imagePath: `https://tech-store-images-bucket.s3.amazonaws.com/${params.Key}`
  }
}

module.exports = createS3Params
