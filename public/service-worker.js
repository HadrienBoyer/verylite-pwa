'use strict';

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
const procEnv = process.env;
const
  CACHE_NAME = procEnv.CACHE_NAME || 'sw-verylite-pwa--cache',
  pwaCache = [
    '/',
    '/index.html',
    '/js/pwa.webmanifest',
    '/js/pwa.js',
    '/js/status.js',
    '/js/components.js',
    '/images/apple-touch.png',
    '/images/favicon.ico'
  ];

const caches = pwaCache;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(pwaCache))
      .then(self.skipWaiting())
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.open(CACHE_NAME)
        .then((cache) => cache.match(event.request))
      )
  )}
)

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          } else {
            console.log('[ServiceWorker] Creating new cache', key);
          }
        }))
      })
      .then(() => self.clients.claim())
  )}
)
