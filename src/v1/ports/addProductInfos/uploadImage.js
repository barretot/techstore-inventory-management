const s3 = require('../../adapters/addProductsInfos/s3')

const upload = async (product) => {
  const data = await s3.upload(product)
  return data
}

module.exports = {
  upload
}
