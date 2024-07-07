const verifyToken = async (id) => {
  try {
    // const product = await repository.search(searchDynamoParams(id))

    return 'test'
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  verifyToken
}
