const fs = require('fs')
//puppeteer
const puppeteer = require('puppeteer')

//setting up puppeeter
const htmlToPdf = async (template) => {
  // launching a headless chrome browser
  const browser = await puppeteer.launch({ headless: true })
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
  // Write the PDF to a file (optional)
  fs.writeFileSync('output.pdf', pdfBuffer)

  // Close the browser
  await browser.close()
  return pdfBuffer
}
module.exports = htmlToPdf
