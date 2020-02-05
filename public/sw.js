self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Installing service worker ...', event);
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        console.log('[ServiceWorker] Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/app.js',
          '/src/js/feed.js',
          '/src/js/promise.js',
          '/src/js/fetch.js',
          '/src/js/material.min.js',
          '/src/js/material.min.js.map',
          '/src/css/app.css',
          '/src/css/feed.css',
          '/src/images/main-image.jpg',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ]);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activate service worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[ServiceWorker] Fetching something ...', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(resp) {
        if (resp) {
          return resp;
        }

        return fetch(event.request);
      })
  );

});
