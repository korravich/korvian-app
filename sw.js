// service worker แบบเบาที่สุด: ไม่แคชอะไร แค่ให้เบราว์เซอร์มองว่าเป็นแอปที่ติดตั้งได้
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
