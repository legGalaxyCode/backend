const express = require('express'),
  app = express(),
  http = require('http').createServer(app),
  io = require('socket.io')(http)

const path = require('path')
const jade = require('jade')

const host = '127.0.0.1'
const port = 3001

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(express.static(__dirname))

app.get('/', (req, res) => res.render('index'))

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/projects', (req, res) => {
  res.render('projects')
})

http.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)

