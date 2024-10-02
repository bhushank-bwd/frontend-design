const CACHE_NAME = "demo/v2"; // different version can used
const CACHE_FILES = [
  "./index.html",
  "./photo.png",
  "./script.js",
  "./style.css",
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});
self.addEventListener("activate", (e) => {
  // clean up useless cache
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key != CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        console.log("returning from network");
        return res;
      })
      .catch(() => {
        console.log("returning from cache");
        return caches.match(e.request).then((file) => file);
      })
  );
});
