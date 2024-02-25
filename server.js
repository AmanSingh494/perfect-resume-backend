const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing data to json

// post request
app.post('/submit', async (req, res) => {
  const name = await req.body.name
  const email = await req.body.email
  const phone = await req.body.phone
  console.log(name, email, phone)
  res.send('Got data successfully')
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
