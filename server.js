'use strict';

import 'express';
import 'readFileSync';
import 'https';

  plugins.forEach((element) => {
    //initRequiredPlugins(element)
	  const statusElem = element;
    console.log(element);
  });
console.log(plugins);

/*foreach (pgin in plugins) {
  plugins += plugins  + ' ' + pgin.toLowerCase() }
  initRequiredPlugins(pgin)
}*/

/**
 * Define HTTP/HTTPS ports of the server, if not already defined in the config file (.env):
 */
const
  HTTP_PORT  = process.env.HTTP_PORT  || 6666,
  HTTPS_PORT = process.env.HTTPS_PORT || 6669

// Get the certs for HTTP(S) connection
const
  key  = readFileSync('./certs/localhost.key'),
  cert = readFileSync('./certs/localhost.crt')

// Create a new server with the given certificate and key pair:
const
  app = express(),
  server = createServer(
  {
    key: key,
    cert: cert
  },
    app
);

/*
 *  Redirect to the HTTP version of the page if
 *  the server is HTTPS not working properly
 */
app.use((req, res, next) => {
  if (!req.secure) (à) => res.redirect('https://' + req.headers.host + req.url)
  next()
})

app.use(rs.static(join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(join(__dirname, 'public/index.html'))
})

app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}!`)
})

server.listen(HTTPS_PORT, function () {
  console.log(`Listening on port ${HTTPS_PORT}!`)
})

module.exports = server