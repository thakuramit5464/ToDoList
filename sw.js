var cacheName = "ftm";
var version = 1.0;
var filesToCache = [
  // infrastructure files ----------------------------------------------------------------------------------------------
  "./index.html",
  "./CSS/corner.css",
  "./CSS/main.css",
  //--------------------------------------------------------------------------------------------------------------------
  // app files ---------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
];

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (res) {
      res.addEventListener("updatefound", () => {
        caches.delete(cacheName);
        console.log("Service Worker update detected!");
        caches.open(cacheName).then(function (cache) {
          console.log("sw: writing files into cache");
          return cache.addAll(filesToCache);
        });
      });
      fetch("./ftm_english.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res.json().then((data) => {
          for (let i = 0; i < 10; i++) {
            data.Levels[i].Puzzles.forEach((element) => {
              cacheNewFiles(element.prompt.PromptAudio);
            });
          }
        })
      );
      // getPWARegistration();
      console.log("sw: registration ok");
    })
    .catch(function (err) {
      console.error(err);
    });
}

// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("sw: writing files into cache");
      return cache.addAll(filesToCache);
    })
  );
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("activate", function (event) {
  console.log("sw: service worker ready and activated", event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    // test if the request is cached
    caches
      .match(event.request)
      .then(function (response) {
        // 1) if response cached, it will be returned from browser cache
        // 2) if response not cached, fetch resource from network
        return response || fetch(event.request);
      })
      .catch(function (err) {
        // if response not cached and network not available an error is thrown => return fallback image
        return caches.match("favicon.png");
      })
  );
});

function cacheNewFiles(ftc) {
  caches.open(cacheName).then(function (cache) {
    console.log("sw: adding new files");
    return cache.add(ftc);
  });
}
