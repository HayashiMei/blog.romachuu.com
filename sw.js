importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  const cacheVersion = 'v20190904';

  workbox.setConfig({ debug: false });
  workbox.core.setCacheNameDetails({
    prefix: 'blog.romachuu.com',
    suffix: 'v20190904',
  });

  workbox.routing.registerRoute(
    /\/css\/(.*)$/,
    new workbox.strategies.CacheFirst({
      cacheName: `css-${cacheVersion}`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\/js\/(.*)$/,
    new workbox.strategies.CacheFirst({
      cacheName: `js-${cacheVersion}`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\/images\/(.*)$/,
    new workbox.strategies.CacheFirst({
      cacheName: `images-${cacheVersion}`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(/(cdn\.jsdelivr\.net|.*\.loli\.net|cdn\.bootcss\.com|(www|ssl)\.google-analytics\.com)\/(.*)$/, new workbox.strategies.StaleWhileRevalidate());

  workbox.routing.registerRoute(/\/*$/, new workbox.strategies.NetworkFirst());
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
