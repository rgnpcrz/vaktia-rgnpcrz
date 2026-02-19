// const CACHE_NAME = "vaktia_2025_kosove_3_0_7";
// const CACHE_NAME = "vaktia_2025_kosove_3_0_8";
const CACHE_NAME = "vaktia_2026_kosove_3_1_0";
const urlsToCache = [
  "/", // Root path
  "/index.html",
  "/offline.html",
  "/styles.css",
  "/index2025.js",
  "/index2026.js",
  "/img/favicon.ico",
  "/img/favicon.png",
  "/img/apple-touch-icon.png", // Apple Touch Icon
  "/img/icon-192x192.png", // PWA Icon
  "/img/icon-512x512.png", // PWA Icon
  "/manifest2.json",
  "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500&display=swap",
];

// Install the service worker
// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return Promise.all(
        urlsToCache.map(function (url) {
          return cache.add(url).catch(function (error) {
            console.error("Failed to cache:", url, error);
          });
        })
      );
    })
  );
});

// Fetch the resources
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }

        // Not in cache - fetch from the network
        return fetch(event.request).then(function (response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          // Clone the response to cache it
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
      .catch(function () {
        // If both cache and network fail, show a generic fallback
        return caches.match("/offline.html"); // Offline fallback page
      })
  );
});

// Activate the service worker
self.addEventListener("activate", function (event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// const CACHE_NAME = "vaktia_2025_kosove_1_0_1";
// const urlsToCache = ["/", "/index.html", "/styles.css", "/index2025.js", "/img/favicon.png", "/manifest2.json", "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500&display=swap"];

// // Install the service worker
// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Fetch the resources
// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(function (response) {
//         // Cache hit - return the response from the cached version
//         if (response) {
//           return response;
//         }

//         // Not in cache - fetch from the network
//         return fetch(event.request).then(function (response) {
//           // Check if we received a valid response
//           if (!response || response.status !== 200 || response.type !== "basic") {
//             return response;
//           }

//           // Clone the response to cache it
//           const responseToCache = response.clone();

//           caches.open(CACHE_NAME).then(function (cache) {
//             cache.put(event.request, responseToCache);
//           });

//           return response;
//         });
//       })
//       .catch(function () {
//         // If both cache and network fail, show a generic fallback
//         return caches.match("/offline.html"); // You can create an offline.html page for better UX
//       })
//   );
// });

// // Activate the service worker
// self.addEventListener("activate", function (event) {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
