const CACHE_NAME = 'kaj-tiktok-downloader-v1';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { /* Network-first app; no media/API caching. */ });
