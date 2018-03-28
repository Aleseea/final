const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var show = require('./server.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/allPatterns', show.handleAllPatterns)
  /*.get('/onePattern:id', show.handleSinglePattern)
  .get('/newPattern', show.newPattern)
  .get('/updatePattern:id', show.updatePattern)*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))