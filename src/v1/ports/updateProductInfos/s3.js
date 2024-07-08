const s3 = require('../../adapters/s3')

const deleteObject = async (key) => {
  const data = await s3.deleteObject(key)
  return data
}

module.exports = {
  deleteObject
}
