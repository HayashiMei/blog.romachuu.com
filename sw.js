importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.setConfig({ debug: false });

  workbox.googleAnalytics.initialize();
  workbox.precaching.precacheAndRoute([
  {
    "url": "2018/05/15/hello-world/index.html",
    "revision": "e7f84d0fed49682e5116dc58cce25e93"
  },
  {
    "url": "2018/05/28/github-page-bye-bye/index.html",
    "revision": "147b319a4c0d2f2f56224137406af185"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "1759d5918827221c547dc62db86f2304"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "e9df04759c8cc4a0f89bc35fb7e575bd"
  },
  {
    "url": "archives/index.html",
    "revision": "c4d1b82ddaba35711698b08d81ac1a12"
  },
  {
    "url": "categories/Diary/index.html",
    "revision": "394d894520a2c6aa4d5891ff2a2edbb0"
  },
  {
    "url": "categories/index.html",
    "revision": "fe81e856d750826190d7781e43d79943"
  },
  {
    "url": "css/main.css",
    "revision": "0e24852272345c31ad18353d99593451"
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
    "url": "index.html",
    "revision": "282a089370cac71a1b3a7b14fe30cd91"
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
    "url": "lib/font-awesome/bower.json",
    "revision": "188dd1a7583ffab4da32757242993f36"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "lib/font-awesome/HELP-US-OUT.txt",
    "revision": "a1e5be58e81e919ba2e579cd1c65283e"
  },
  {
    "url": "lib/jquery/index.js",
    "revision": "32015dd42e9582a80a84736f5d9a44d7"
  },
  {
    "url": "lib/ua-parser-js/dist/ua-parser.min.js",
    "revision": "a6e833266c4b41fabb9ba94a145322d8"
  },
  {
    "url": "lib/ua-parser-js/dist/ua-parser.pack.js",
    "revision": "6b627e4d61a7135952824bb9c1a4a134"
  },
  {
    "url": "lib/velocity/velocity.js",
    "revision": "0361fa6dcf4cf4d19c593cdab0937dd0"
  },
  {
    "url": "lib/velocity/velocity.min.js",
    "revision": "c1b8d079c7049879838d78e0b389965e"
  },
  {
    "url": "lib/velocity/velocity.ui.js",
    "revision": "f55d22cc592c9f8d4ffd3b41a6b90081"
  },
  {
    "url": "lib/velocity/velocity.ui.min.js",
    "revision": "444faf512fb24d50a5dec747cbbe39bd"
  },
  {
    "url": "manifest.json",
    "revision": "b1d22c57e5efcaff19c0c3b38aab7d6f"
  },
  {
    "url": "README.md",
    "revision": "ba0141cf03dd39c3421867806679b123"
  },
  {
    "url": "search.xml",
    "revision": "674f43082a4dfb056e893f2ed0b837e9"
  },
  {
    "url": "sitemap.xml",
    "revision": "d557e8887f26af0081d6c8b25ea72503"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "c0e8744f2fb793f26f93dd19bdae7a71"
  },
  {
    "url": "tags/index.html",
    "revision": "fbce5d08cd148a93e5febefba83f64b3"
  }
]);

  const cacheVersion = 'v20190904';

  workbox.routing.registerRoute(
    /\/(.*)\.html$/,
    new workbox.strategies.networkFirst({
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
