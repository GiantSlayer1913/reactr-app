'use strict'

const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

// Server Port
const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

// Instance of express
const app = express()

// Development set not equal to production
const dev = app.get('env') !== 'production'

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))

// Send request to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

const server = createServer(app)

server.listen(PORT, err => {
  if (err) {throw err}

  console.log('Server started on localhost port!')
})
