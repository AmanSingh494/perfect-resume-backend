const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const htmlToPdf = require('./htmlToPdf')
const createTemplate = require('./template/handlebars')

app.use(bodyParser.json()) // for parsing data to json
app.use(cors({ origin: 'http://localhost:3000' }))

// post request
app.post('/submit', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      about,
      achievements,
      edu,
      skill,
      work,
      links
    } = req.body
    console.log(
      name,
      email,
      phone,
      address,
      about,
      achievements,
      edu,
      skill,
      work,
      links
    )
    // html template
    const template = createTemplate('index', {
      name,
      email,
      phone,
      links,
      achievements,
      edu,
      work,
      address,
      about,
      skill
    })
    console.log(template)
    const pdfBuffer = await htmlToPdf(template)
    res.contentType('application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf')
    res.send(pdfBuffer)
  } catch (e) {
    console.error(e)
    res.status(500).send('Error generating pdf')
  }
})
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
