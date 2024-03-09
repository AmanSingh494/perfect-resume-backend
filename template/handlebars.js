const handleBars = require('handlebars')
const fs = require('fs')
const createTemplate = (file, data) => {
  const source = () => {
    const html = fs.readFileSync(`./template/${file}.html`, 'utf-8')
    return html
  }
  const template = handleBars.compile(source())

  const html = template(data)
  return html
}
module.exports = createTemplate
