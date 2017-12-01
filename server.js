var express = require('express')
var app = express()
var PORT = 3000

app.use(express.static('src'))

app.listen(PORT, function() {
  console.log('app is run at: ', PORT)
})
