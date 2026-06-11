const CACHE_NAME = '88x31-images-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || data.type !== 'CACHE_URLS' || !Array.isArray(data.urls)) {
        return;
    }

    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await Promise.all(data.urls.map(async (url) => {
            try {
                const existing = await cache.match(url);
                if (existing) {
                    return;
                }

                const response = await fetch(url, { mode: 'cors' });
                if (response.ok) {
                    await cache.put(url, response.clone());
                }
            } catch (_) {
                // Ignore bad URLs or transient network failures.
            }
        }));
    })());
});

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    if (!url.startsWith('https://raw.githubusercontent.com/transicle/88x31/main/assets/')) {
        return;
    }

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(event.request);
        if (cached) {
            return cached;
        }

        const response = await fetch(event.request);
        if (response.ok) {
            cache.put(event.request, response.clone());
        }
        return response;
    })());
});
