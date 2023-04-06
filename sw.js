const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = ["/", "/index.html", "/index.js", "/vaktia2023", "/vaktia2023/index.html", "/vaktia2023/index.js"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
