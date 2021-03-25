const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const { createUser } = require('./services/authentication/authentication-service.js');
const port = 8080

app.post('/createUser', (req, res) => {
  const user = createUser()
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})