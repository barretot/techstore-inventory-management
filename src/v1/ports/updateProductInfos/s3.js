const s3 = require('../../adapters/s3')

const upload = async (product) => {
  const data = await s3.upload(product)
  return data
}

const deleteObject = async (key) => {
  const data = await s3.deleteObject(key)
  return data
}

module.exports = {
  deleteObject,
  upload
}
