'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "167212dc611d886a6a12bdc9ee326a6a",
"version.json": "8984f887f924327d131173ce6c53a7e2",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "7c3411604e68fd1f54b5547103a00b79",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "e4d6330ab1c82d5464d5a37fdacaf2b3",
"main.dart.mjs": "940b42eea9dab945604e3ff38e96cd37",
"icons/Icon-192.png": "b455b55b1040ceca398c4b198dcc119a",
"icons/Icon-maskable-192.png": "b455b55b1040ceca398c4b198dcc119a",
"icons/Icon-maskable-512.png": "8490500d8810da79563af5700b9ac573",
"icons/Icon-512.png": "8490500d8810da79563af5700b9ac573",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"main.dart.wasm": "e29ab9dd32587ed2e0f75c62568ca05f",
"assets/images/contact.svg": "dace2daf4531400b174c69ee7a042033",
"assets/images/resume.svg": "68289692c55363961ab4101d8a6796b1",
"assets/images/code.png": "69bbbf250a43425cec63a85e374dd955",
"assets/images/gmail.svg": "f68c94938e4f7dfb81349be34942b7d3",
"assets/images/bitcoin.png": "6c5cc4beae29bc94ea9d19b71a5e7e41",
"assets/images/game.png": "25cfa94735390435ec39bd4becf38858",
"assets/images/github.svg": "e9a25655dbd4e3976ca94d3794cf88a6",
"assets/images/apple_logo.png": "a14ce1b83a318b16fec33cec67038382",
"assets/images/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/images/spring_logo.png": "1e12b870211aac51ccdb6410cd7f66bc",
"assets/images/firestore.png": "8d0e6e99884e6d0cda574046fe71bfd4",
"assets/images/gaming.png": "8903b866c90866ba97d37a6f19329747",
"assets/images/github.png": "f8c053bc783d1e5092300c6850dfe0e1",
"assets/images/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/images/music.png": "6bcc1188e411dff37533a65529b022d7",
"assets/images/background.jpeg": "7c2f6be90af78fc19ed03a503050640d",
"assets/images/google_cloud_platform.png": "292fb5eece48c2fa48ee991ecd883429",
"assets/images/soccer.png": "453950b954a7cc1f76ea9a56311e0d3a",
"assets/images/avatar.jpg": "742688fb15a89e6c50d7046608616f81",
"assets/images/mysql.png": "4c10de8a2fdea9c703c8194e8e73cee3",
"assets/images/facebook.svg": "6b48d59dd8509eb0464305c6dbfe07de",
"assets/images/skills.svg": "43620602004dabe7848041b5a667dfc5",
"assets/images/about.svg": "05c712429d7f84947cd192f97960bd42",
"assets/images/money.png": "dc146c6ab630706713f98eb988ce4082",
"assets/images/football.png": "646729766242d03e01c1b33325f4b3a9",
"assets/images/reading.png": "2f9553c0527d060255f9ad0817d53e89",
"assets/images/linkedin.svg": "c7f5077172cff817aef38803051bdb3a",
"assets/images/android_logo.png": "abe88c8c3b4bb67601abde25cb57dc56",
"assets/images/gmail_logo.png": "66fcd17ebd446ca6b5cce1a098d0c248",
"assets/images/facebook.png": "f6438788e60012a98ccb06039b1cc2c5",
"assets/images/mongodb.png": "28ec40a4d2332648f920ff506571a7d7",
"assets/images/linked_in.png": "d5af2aaefaf2a305e0398e99aade5c2a",
"assets/images/coding.png": "c14b8c097d3f4c8b970f8b4f8a944342",
"assets/images/nodejs.png": "356aea45f1757b8a8a12cea151933c47",
"assets/AssetManifest.json": "b0d11ac56ce528f7191b18690fa64fb1",
"assets/NOTICES": "328098a4e91964ec7f134ecf962b45aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b01cef701cdca03ec001f8609d168f8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3aaaf9ed360a11dfd9bcfc2543528c68",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
