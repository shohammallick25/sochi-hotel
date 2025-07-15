const CACHE_NAME = "sochi-cache-v1";
const urlsToCache = [
  "/sochi-hotel/",
  "/sochi-hotel/index.html",
  "/sochi-hotel/css/style.css",
  "/sochi-hotel/image/3.png",
  // Add more assets if needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
