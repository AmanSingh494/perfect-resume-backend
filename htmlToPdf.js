const fs = require('fs')
//puppeteer
const puppeteer = require('puppeteer')
require('dotenv').config()
//setting up puppeeter
const htmlToPdf = async (template) => {
  // launching a headless chrome browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath:
      process.env.NODE_ENV === 'production'
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath()
  })
  // Create a new page
  const page = await browser.newPage()
  // setting up html page
  const html = template
  await page.setContent(html)
  // Wait for the page to load (optional)
  await page.waitForSelector('body')
  // Configure PDF generation options (optional)
  const pdfOptions = {
    format: 'A4', // Change format if needed (e.g., 'Letter')

    printBackground: true
  }
  // Generate the PDF
  const pdfBuffer = await page.pdf(pdfOptions)

  // Close the browser
  await browser.close()
  return pdfBuffer
}
module.exports = htmlToPdf
