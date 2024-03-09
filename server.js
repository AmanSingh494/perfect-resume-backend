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
    const { name, email, phone, address, about } = req.body
    console.log(name, email, phone, address, about)
    // html template
    const template = createTemplate('index', {
      name: 'Aman Singh',
      email: 'amanforwork1@gmail.com',
      phone: 9717599542,
      contactLinks: [
        'www.goggle.com',
        'www.pinterest.com',
        'www.goggle.com',
        'www.pinterest.com'
      ],
      qualifications: ['B.sc hons cs', 'B.tech Cs', 'Phd cs'],
      education: [
        'Ch. Chhabil Daas Public School',
        'Keshav Mahavidyalaya',
        'Delhi University'
      ],
      work: [
        {
          position: 'Software Developer',
          company: 'XYZ Company',
          years: '2018 - Present'
        },
        {
          position: 'Junior Developer',
          company: 'ABC Company',
          years: '2016 - 2018'
        }
      ],
      about: `I'm a passionate and dedicated software developer with over 4 years of professional experience. I specialize in building high-quality, scalable web applications and have a deep understanding of JavaScript and its frameworks. I'm always eager to learn new technologies and improve my skills. I believe in writing clean, efficient code and I'm experienced in working with agile methodologies. I'm a strong team player, but I'm also capable of working independently. I'm highly motivated, I love problem-solving and my ultimate goal is to make a significant impact through my work.`,
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js'
        // Add more skills as needed
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
