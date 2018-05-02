var cacheStorageKey = "pwa";

var cacheList = ['/', 'index.html','icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheStorageKey).then(function (cache) {
      cache.addAll(cacheList);
    }).then(function () {
      self.skipWaiting();
    })
  )
})

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if (response != null) {
        return response;
      }
      return fetch(e.response);
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheNames) {
          return cacheNames !== cacheStorageKey;
        }).map(function (cacheNames) {
          return caches.delete(cacheNames);
        })
      )
    }).then(function(){
      return self.clients.claim();
    })
  )
})
