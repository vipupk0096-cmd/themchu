const CACHE_NAME = 'stamping-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Cài đặt và lưu cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Phản hồi khi không có mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});