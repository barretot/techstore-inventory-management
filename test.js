const bcrypt = require('bcrypt');

(async function () {
  const teste = await bcrypt.compare('123456', '$2b$10$g8FrQV58x3nfdtj2hXl9FuuwKE4Y/y40kcBe1r8f0BZjQDVXLiuqi')

  console.log(teste)
})()
