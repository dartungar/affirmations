// service worker because we need it to make it A2HS-compliant in Chrome

let cacheName = "affirmationsCache-v1";
let filesToCache = ["./icons/main-icon.png"];

self.addEventListener("install", (e) => {
  console.log("service worker installing");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("caching...");
      //return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // just to make Chrome error go away. we don't really need to fetch anything from the internet
});
