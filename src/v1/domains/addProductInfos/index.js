const repository = require('../../ports/addProductInfos/repository')

const addProductInfos = async (productInfos) => {
  try {
    const checkProductInfos = validation()

    // REGRA DE NEGOCIO

    const product = await repository.insert(productInfos)

    return product
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  addProductInfos
}
