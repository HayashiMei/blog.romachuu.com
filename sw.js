importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.setConfig({ debug: false });

  workbox.googleAnalytics.initialize();
  workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "8aac372710ac5b165055292d7deba679"
  },
  {
    "url": "images/aki-megane.png",
    "revision": "a8b19207feb877dba138e5d1d183128a"
  },
  {
    "url": "images/algolia_logo.svg",
    "revision": "fd40b88ac5370a5353a50b8175c1f367"
  },
  {
    "url": "images/apple-touch-icon-next.png",
    "revision": "fce961f0bd3cd769bf9c605ae6749bc0"
  },
  {
    "url": "images/apple-touch-icon.png",
    "revision": "a2f70d55b44256e7a5620558032124e0"
  },
  {
    "url": "images/avatar.gif",
    "revision": "2bed513bc5f13733cf9a8a12c4e1a971"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "984d66299998fc5f20d0ab07256272fc"
  },
  {
    "url": "images/avatar.webp",
    "revision": "68df5fada55285fbd763689beb3d6bfe"
  },
  {
    "url": "images/cc-by-nc-nd.svg",
    "revision": "1c681acc4a150e7236254c464bb5a797"
  },
  {
    "url": "images/cc-by-nc-sa.svg",
    "revision": "12b4b29e8453be5b7828b524d3feabce"
  },
  {
    "url": "images/cc-by-nc.svg",
    "revision": "dd9cfe99ed839a4a548114f988d653f4"
  },
  {
    "url": "images/cc-by-nd.svg",
    "revision": "2d80546af20128215dc1e23ef42d06c2"
  },
  {
    "url": "images/cc-by-sa.svg",
    "revision": "c696b3db81cbbfba32f66c1dc88b909a"
  },
  {
    "url": "images/cc-by.svg",
    "revision": "6c4f8422b3725cb9f26b6c00e95fc88b"
  },
  {
    "url": "images/cc-zero.svg",
    "revision": "79deee77a07fcb79ff680ac0125eacb9"
  },
  {
    "url": "images/chrome-touch-icon.png",
    "revision": "edce5c252538d96a8ae74a6a76b1c13a"
  },
  {
    "url": "images/eriri-pen.png",
    "revision": "cd0d4853551995e1be0abc425b81e4f4"
  },
  {
    "url": "images/footer-megumi.png",
    "revision": "68a470c8d1c2ce76c18c818223e90580"
  },
  {
    "url": "images/footer-megumi.webp",
    "revision": "a6a3a491dea296571cf85100a48e8d4c"
  },
  {
    "url": "images/header-megumi-origin.jpg",
    "revision": "901305a14aa5aefaabfb24fd2ea4023b"
  },
  {
    "url": "images/header-megumi-origin.webp",
    "revision": "f28c12b05fc1083c347f535caa16af7f"
  },
  {
    "url": "images/icon-1x.png",
    "revision": "5ea6b007c457f588a7cd233316165a15"
  },
  {
    "url": "images/icon-2x.png",
    "revision": "8663f948631b2f5611d84dd94b8fe151"
  },
  {
    "url": "images/icon.png",
    "revision": "364b9b9f02118071c2ffdfec78c893cf"
  },
  {
    "url": "images/intro_sakura.png",
    "revision": "00867c8240e11fd7420991009e610a2a"
  },
  {
    "url": "images/loading.gif",
    "revision": "c2196de8ba412c60c22ab491af7b1409"
  },
  {
    "url": "images/logo.svg",
    "revision": "ddad9027e42111ccd5b466bc18188970"
  },
  {
    "url": "images/michiru-onigiri.png",
    "revision": "020052f3dbab3ac8e64679e345af0f00"
  },
  {
    "url": "images/placeholder.gif",
    "revision": "c2196de8ba412c60c22ab491af7b1409"
  },
  {
    "url": "images/post-bg.png",
    "revision": "fd897509fa5c94446ace3538e972bb33"
  },
  {
    "url": "images/post-bg.webp",
    "revision": "d8f66b6361c1a14cd74b50e8eb0ec320"
  },
  {
    "url": "images/quote-l.svg",
    "revision": "1238a4baccd02c6025ec85b58f4282d4"
  },
  {
    "url": "images/quote-r.svg",
    "revision": "85787c6fa27965c81f7be70252b43bed"
  },
  {
    "url": "images/sakura.png",
    "revision": "ceea2f469f86a11586fc1e6b7a16510e"
  },
  {
    "url": "images/sakura.webp",
    "revision": "efb17830733525a7b7de762d2f8af316"
  },
  {
    "url": "images/scroll-megumi.png",
    "revision": "d05476e54da97d149408db22be10a3ff"
  },
  {
    "url": "images/scroll.png",
    "revision": "9f26c6866916fad9e20427578dc60dbd"
  },
  {
    "url": "images/searchicon.png",
    "revision": "3d6b5c9d6d6c26a2b76a14b8fdf3438a"
  },
  {
    "url": "images/utaha-ranobe.png",
    "revision": "dbaf69c9fceac3ed5106f613dd012077"
  },
  {
    "url": "js/megumi.min.js",
    "revision": "5ff77552671f4038aa598ceb0878d56c"
  },
  {
    "url": "js/src/algolia-search.js",
    "revision": "f5fa392318805997089ceb3a925979ba"
  },
  {
    "url": "js/src/exturl.js",
    "revision": "2b444179b3145e5007b4d371dac07cd3"
  },
  {
    "url": "js/src/js.cookie.js",
    "revision": "6e9eb1f53afb135aedaf90739c867738"
  },
  {
    "url": "js/src/post-details.js",
    "revision": "f4986086aceedc850d3790bb06e66065"
  },
  {
    "url": "js/src/scroll-cookie.js",
    "revision": "890406ae3539e4721ef5f314542e5e46"
  },
  {
    "url": "js/src/scrollspy.js",
    "revision": "fafdd7ab6af233b701506c733910b7f5"
  },
  {
    "url": "index.html",
    "revision": "282a089370cac71a1b3a7b14fe30cd91"
  }
]);

  const cacheVersion = 'v20190904';

  workbox.routing.registerRoute(
    /(\/|(.*)(\.html|\/))$/,
    new workbox.strategies.NetworkFirst({
      cacheName: `html-${cacheVersion}`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 100,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\/css\/(.*)$/,
    new workbox.strategies.CacheFirst({
      cacheName: `css-${cacheVersion}`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 100,
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
          maxEntries: 100,
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
          maxEntries: 100,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(/(cdn\.jsdelivr\.net|.*\.loli\.net|cdn\.bootcss\.com)\/(.*)$/, new workbox.strategies.StaleWhileRevalidate());
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
