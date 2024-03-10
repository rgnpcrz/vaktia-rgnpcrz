// const CACHE_NAME = "my-site-cache-v1";
const CACHE_NAME = "vaktia_2024_kosove_0_0_1";

const urlsToCache = ["/", "/index.html", "/index2024.js", "/vaktia2023", "/vaktia2023/index.html", "/vaktia2023/index2024.js"];

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
