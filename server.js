const express = require('express')
const app = express()
const PORT = 1234



app.listen(PORT, function(){
  console.log(`SERVER UP - ${PORT}`)
})