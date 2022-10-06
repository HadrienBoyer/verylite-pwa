const express = require('express')
const path    = require('path')
const fs      = require('fs')
const https   = require('https')

// Define HTTP/HTTPS ports of the server:
const
  httpPort  = 8501,
  httpsPort = 8502

// Get the certs for HTTP(S) connection
const
  key = fs.readFileSync('./certs/localhost.key'),
  cert = fs.readFileSync('./certs/localhost.crt')

// Create a new server with the given certificate and key pair:
const
  app = express(),
  server = https.createServer(
  {
    key: key,
    cert: cert
  }
  , app
);

app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})

server.listen(httpsPort, function () {
  console.log(`Listening on port ${httpsPort}!`)
})