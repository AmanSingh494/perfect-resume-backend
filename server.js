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
    const name = await req.body.name
    const email = await req.body.email
    const phone = await req.body.phone
    console.log(name, email, phone)
    // html template
    const template = createTemplate('index', {
      name: 'Aman',
      contactLinks: [
        'www.goggle.com',
        'www.pinterest.com',
        'www.goggle.com',
        'www.pinterest.com'
      ],
      qualification: ['B.sc hons cs', 'B.tech Cs', 'Phd cs'],
      education: [
        'Ch. Chhabil Daas Public School',
        'Keshav Mahavidyalaya',
        'Delhi University'
      ]
    })
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
