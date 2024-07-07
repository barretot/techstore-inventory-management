const {
  S3Client,
  PutObjectCommand
} = require('@aws-sdk/client-s3')

const client = new S3Client({
  region: 'us-east-1'
})

const upload = async (params) => {
  try {
    const command = new PutObjectCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    console.log(err)
  }
}

module.exports = { upload }
