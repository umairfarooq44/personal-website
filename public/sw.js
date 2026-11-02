// Clean-up for visitors who still have the old Gatsby site's offline service worker.
// Browsers re-check this file on each visit; this version deletes the old caches,
// unregisters itself and reloads open tabs so they show the current site.
// Safe to delete this file a few months after November 2026.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      windows.forEach((client) => client.navigate(client.url));
    })(),
  );
});
