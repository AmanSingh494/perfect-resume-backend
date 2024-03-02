const htmlTemplate = (name, email, phone) => {
  console.log('HAHAHAHAHAHA')
  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          body {
              background-color: brown;
              display: flex;
              justify-content: space-between;
          }
  
          .div1 {
              background-color: yellow;
          }
  
          .div2 {
              background-color: green;
          }
      </style>
  </head>
  
  <body>
      <div class="div1">
          <h1>Aman</h1>
          <h1>amanforwork1@mail</h1>
          <h1>9717599515</h1>
      </div>
      <div class="div1">
          <h1>Aman</h1>
          <h1>amanforwork1@mail</h1>
          <h1>9717599515</h1>
      </div>
      <div class="div1">
          <h1>Aman</h1>
          <h1>amanforwork1@mail</h1>
          <h1>9717599515</h1>
      </div>
      <div class="div2">
          <h1>Aman2</h1>
          <h1>amanforwork1@mail</h1>
          <h1>9717599515</h1>
      </div>
  
  </body>
  
  </html>

`
}
module.exports = htmlTemplate
