importScripts('./cache-polyfill.js');

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('maxClick-sw1').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './src/css/style.css',
        './dist/bundle.js',
        './src/sound/blaster2.mp3',
        './src/images/level-0.jpg',
        './src/images/level-1.jpg',
        './src/images/level-2.jpg',
        './src/images/level-3.jpg',
        './src/images/level-4.jpg',
        './src/images/level-5.jpg',
        './src/images/level-6.jpg',
        './src/images/level-7.jpg',
        './src/images/level-8.jpg',
        './src/images/level-9.jpg',
        './src/images/level-10.jpg',
        './src/images/level-11.jpg',
        './src/images/level-12.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('maxClick-sw1').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
