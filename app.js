const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Handlebars = require('handlebars')
const cors = require('cors')
const htmlToPdf = require('./htmlToPdf')
const createTemplate = require('./template/handlebars')
// requiring the handlebars helpers
require('./registerHelpers')
// setting up multer for image upload
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
require('dotenv').config()
const upload = multer({ storage: storage })
app.use(bodyParser.json()) // for parsing data to json
app.use(cors({ origin: process.env.CORS_ORIGIN }))

const PORT = process.env.PORT || 5000
let imagePath = ''
// post request
app.post('/submit', async (req, res) => {
  try {
    const {
      personalDetails,
      achievements,
      edu,
      course,
      skill,
      projects,
      work,
      links,
      image
    } = req.body
    // console.log(
    //   name,
    //   email,
    //   phone,
    //   address,
    //   about,
    //   achievements,
    //   edu,
    //   skill,
    //   work,
    //   links,
    //   imagePath
    // )
    const { name, email, phone, address, dob, about, linktree } =
      personalDetails[0]

    // html template
    const template = createTemplate('temp1', {
      name,
      email,
      phone,
      dob,
      course,
      links,
      achievements,
      edu,
      projects,
      work,
      address,
      about,
      skill,
      linktree,
      imagePath
    })
    console.log('Request received')
    const pdfBuffer = await htmlToPdf(template)
    res.contentType('application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf')
    res.send(pdfBuffer)
  } catch (e) {
    console.error(e)
    res.status(500).send('Error generating pdf')
  }
})
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      // Handle case where no file is uploaded
      return res.status(400).json({ message: 'No image uploaded' })
    }
    imagePath = `/${req.file.path}`
    console.log(req.file)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error uploading image')
  }
})
app.listen(PORT, () => {
  console.log('Server is running on port 5000')
})
