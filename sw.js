self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("diskon-app").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});