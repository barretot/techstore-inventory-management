const getImageKey = (imagePath) => {
  const regex = /\/([^/]+\/[^/]+)$/

  return imagePath.match(regex)[1]
}

module.exports = { getImageKey }
