const updateProductInfos = async (payload, id) => {
  try {
    return {
      payload,
      id
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  updateProductInfos
}
