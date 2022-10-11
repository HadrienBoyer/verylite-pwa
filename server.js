'use strict';

// import express from 'express'
// import fs from 'fs'
// import https from 'https'
// import path from 'path'

const
  express = require('express'),
  fs      = require('fs'),
  https   = require('https'),
  path    = require('path')  // path to httpsPort

/**
 * Define HTTP/HTTPS ports of the server, if not already defined in the config file (.env):
 */
const
  HTTP_PORT  = process.env.HTTP_PORT  || 8851,
  HTTPS_PORT = process.env.HTTPS_PORT || 8852

// Get the certs for HTTP(S) connection
const
  key  = fs.readFileSync('./certs/localhost.key'),
  cert = fs.readFileSync('./certs/localhost.crt')

// Create a new server with the given certificate and key pair:
const app = express()
const server = https.createServer(
{
  key: key,
  cert: cert
},
  app
)

/*
 *  Redirect to the HTTP version of the page if
 *  the server is HTTPS not working properly
 */
app.use((req, res, next) => {
  if (!req.secure) () => res.redirect('https://' + req.headers.host + req.url)
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}!`)
})

server.listen(HTTPS_PORT, function () {
  console.log(`Listening on port ${HTTPS_PORT}!`)
})

//module.exports = server