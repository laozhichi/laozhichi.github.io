/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b012efb8737d02179d9a36506d0f9e17"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7cc586ae.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.b445cba1.js",
    "revision": "54fb6d95764e1a0121a73196f188bbbd"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.737ee6f1.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.e40715a5.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.108a7e30.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.dd47fe1a.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.298f61e3.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.2bffdee6.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.970031bf.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.b9c8f172.js",
    "revision": "2660b83bf7ebe52e60f24386300762cb"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "ffb09e9a5e4dcc3565fa066f23f99886"
  },
  {
    "url": "categories/index.html",
    "revision": "f850526016a9fcfddcd25987a0b00046"
  },
  {
    "url": "categories/java/index.html",
    "revision": "92b542952c13d501f1b6fde1f0b8cb0e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2c8002386f47ea404f2824301d9ad28c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "28c29d38d9a60606e940dfc8ccc4cf90"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "02577a7a1fc1977b65bcaff70fdf6bc3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "268351c51c6b57dc14709dd0c89c2a2e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "4cbb7272a0992bf87b60f1b5564a69f5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d6e8292283163759af7c78218dfd4bbe"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "016633f3326963befccd3e86b8253698"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5e068aa81b6d9f1f53e72de8e615518d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ab15dd1bb23182313a8f84e1a7e463b9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5f0fbb861bacfb0d53b5b9bd3156aa5e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "38a2b16a24136898128f43632b0139f4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4bb1458497e96c5b4b789795b2a9c441"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3293ca937681d19c120e69b1def8e032"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cdd0e6e81f6cc80b6a3e252a8384a10b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c1910132ef90efcf1b47cd9719b175a3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2271df0154665d4b39076df6acdc5f00"
  },
  {
    "url": "timeline/index.html",
    "revision": "6642220866198dce26d2ab19f8c7cc97"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "81a11f5ef0d6b93ab9b63b7ac66a30ec"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "08a4fb04fa110ee922e4e9628de7e06a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8179078e71a7e51df709a8f67c9817e2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "518f6f3357bdfa1f4c715171850f0af0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0bd139528ce1c56894719c74b80b3c8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
