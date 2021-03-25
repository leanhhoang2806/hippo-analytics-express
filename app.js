const express = require('express')
const app = express()

const { createUser } = require('./services/authentication/authentication-service.js');
const port = 8080

app.get('/', (req, res) => {
  const user = createUser()
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})