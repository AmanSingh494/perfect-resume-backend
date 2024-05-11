const { chromium } = require('playwright')
const fs = require('fs')

async function generatePDF(template) {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  const html = template
  await page.setContent(html)
  await page.waitForSelector('body')
  const pdfOptions = {
    format: 'A4',
    printBackground: true
  }
  const pdfBuffer = await page.pdf(pdfOptions)
  fs.writeFileSync('output.pdf', pdfBuffer)
  await browser.close()
  return pdfBuffer
}

module.exports = generatePDF
