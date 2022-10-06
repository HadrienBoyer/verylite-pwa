const CACHE_NAME = 'sw-cache-example';
const pwaCache = [
  '/',
  '/index.html',
  '/js/pwa.webmanifest',
  '/js/pwa.js',
  '/js/status.js',
  '/images/apple-touch.png',
  '/images/splash-screen.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(pwaCache)
      })
      .then(self.skipWaiting())
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request);
        }))
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})
