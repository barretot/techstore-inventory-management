const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand
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
    throw new Error(err)
  }
}

const deleteObject = async (params) => {
  try {
    const command = new DeleteObjectCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { upload, deleteObject }
