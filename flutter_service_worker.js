'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8984f887f924327d131173ce6c53a7e2",
"index.html": "19b73f74f302e5bee9f48c453ebe7ff5",
"/": "19b73f74f302e5bee9f48c453ebe7ff5",
"main.dart.js": "b03762b77c3d187331c01e85cbb9cd2b",
"favicon.png": "e4d6330ab1c82d5464d5a37fdacaf2b3",
"icons/Icon-192.png": "b455b55b1040ceca398c4b198dcc119a",
"icons/Icon-512.png": "8490500d8810da79563af5700b9ac573",
"manifest.json": "90afde5d986ab9ac5e0b15528dd4d673",
".git/config": "0b9f4b52b1962345edab1663ff05f59c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/d66596c5cbd580982fd1322d90e40cf1aecb5e": "9e177e3f26ed93d5fcf50ea1ffe65400",
".git/objects/0c/dee0fb8c7dd8ab7c54c6e77c45d214d39572e2": "20080733d4393c62a51e541a23cf8cf0",
".git/objects/57/f54475f3d6d4934e932600fc9bfc801c1931ef": "8a951a7ba90a2b3e4a1fe5dedb8d6402",
".git/objects/3b/32a96fc2ac639f5b3ca0d3b9c9f07766eca281": "562f016256502e238f0e9355013770e8",
".git/objects/6a/df1f1150dd930021d8d9b7ee196751c7108cb1": "5e82690691b9814dbb7d9a8f3caea250",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/c2943c7b4ab74179b98501a77753bc65980e46": "c8dfbf4059ac38b201b35d8aa2ec4fd5",
".git/objects/0b/b969e7650bbba28a6a9b9d5dbea7002085ce52": "ec36e3489c1d2164fa3a7b441127af59",
".git/objects/b5/0db31ae318ccf1280f544b67df4e82fd0cd6a2": "c64096be050a021dd5055d08ec67c148",
".git/objects/d1/731c1d9fcade22b23419253b70567eb2590d5f": "3385aec2d2651c9bd5d4a42844262d22",
".git/objects/ae/1f72d476cd1559dacfb818e95037f243049d29": "3a32a683f9248b5147da70b08cb81fc7",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f3/948a07f6602cecf2b5929028a2cc0338bd40a8": "72382ba3b52d9a269f6739030519c825",
".git/objects/c7/269c7c9cfead7eba0b814705553b96aea479f2": "1c477e14e7b6d07077d8544749dc25cc",
".git/objects/c7/daacaa30df68d2300cf08f1b1d292d00903729": "2a0bafae63396c35a974b50106931700",
".git/objects/c0/cc2c3b2b8a8881d7e7dd28874f0f0c7a320307": "1181d774b748b5aa252379439a981c8f",
".git/objects/ee/f49eea490f0c8613df59ab6d06707d82a4fe95": "130396e0f20a05cf4a70836c2ef1cf2e",
".git/objects/ee/e4b6c967910a78b51de41f78c387d78c1af56c": "4889b07d1237da2c75ffd1caf582e894",
".git/objects/fd/c4b8f6527c6abb15b5ca6bae753ff1e9eb3c8f": "1a819d96d305845adaa670da7d53baca",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/aef55518a50725cae7eda5d0621c96cf1c99da": "13841191b325af88955c53ad8ad3f6b7",
".git/objects/7b/35fc209c91d0f5b7ed5b51916ffa6ca2a6f77f": "db25d08cc001cf89c68cf21bfd916f9f",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/75/42f01b47d443dfbf939bbbfb9de26d39fe2f0e": "48f7936af79a887cda183b72849b6fcd",
".git/objects/72/35fb412289ae76b58838e43f5207889c4de42f": "c3418f64544de24bc10748d98a263e9e",
".git/objects/2a/b46313f327c67246e2c93d0a7868f7da1cc2c0": "b84b0034c3de8c0b17512117c801b6a8",
".git/objects/43/5a5cdc12841d2916a99b1db9d6390e56a6bc05": "968712ba096c9dfe5b4861f08472c9d8",
".git/objects/38/bbfbebd9fee1de579a0dd116facd7bef5923c0": "19138eb64ad87050285ca1467132628e",
".git/objects/01/985942c0e4e8a22d35a25686366559b62a2f91": "4f42ae3f06e24cbd45092d6083e75314",
".git/objects/b1/7eec8d5d69bcfbf36645f54982ead286b193a0": "8014856c03ee4a61082d9b73fc4a1fd1",
".git/objects/a9/b3234458ac72d7709e1c610cde863f6f2f8a17": "1dd24a90808aead9a22f11ec2cb86243",
".git/objects/d5/8244a5400133c15b0a9a002fa23bc62e6b9a09": "677ffd165b67b690d84d72c55554eb80",
".git/objects/b7/79c8197c5684383bc2969f5b9ee3a212b91604": "4910963cdf332e34606205676b044481",
".git/objects/c4/2890f5390b84d8ed627a3239b0266ccbf3028c": "d0f906060160f1197a8531610f3461c7",
".git/objects/f1/606b57c6b541ebcb883b6ddbaf697a98fc2297": "345a8d99ef8c7246c5acb46024865904",
".git/objects/f8/a4f244aaa1314fd11d8c3acd2d01862236da8a": "6cff39e0d1f92497ca86c86de57bdc8d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e76a3f890ac255898d14b0027f74c5e207b084": "e1e63624bae5a208af2396804707469f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/ad0356d543be4a703913e7c2c933e126c7d7d8": "a9c2ceb07414c37d0b31a1745e52b560",
".git/objects/48/3b938ea366a054f11da4c3953e86765ab7d072": "7fbd3bd898f1437a12acf42295810a34",
".git/objects/4a/6a5ab49336cff108a2c93994341ed6e7a04b70": "e2b44c157e8913f4343bd60e23e1636d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/dda94339ef1f1b705f6dea1393c097588a0dc7": "27b9d3c0b6b9f8e5fe8e3ba40ba21886",
".git/objects/85/3b2d9044cff0b33bbed67bcb55939551708b4f": "589bb472f1f8a681f6ada9d499e9fc83",
".git/objects/85/43aeeb592f41f3563b0cb781a8a25acef770cd": "3f16716ae5efcdd63f6208911847e8b2",
".git/objects/71/b6f98ff2e01ea61f3cb2f691a8f63f26f36484": "39308133a242f477257b6c24528b202b",
".git/objects/1c/92e304b2a9f619722d14183e73e47ceada04d7": "9fe044942202b54a2d5b8ce63dfc51a4",
".git/objects/82/fe58ca8e47a08193494c4b9c0cfd6e6763b930": "94ba743865989fc5f6486812aadb610c",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/13/1bc9c323a17a69efdd15eea8abe02f40d9dc4d": "c0b233ff805547e23c50269249545308",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/index": "a6e06d13f63194b7661191385f1af972",
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
"assets/AssetManifest.json": "83dda0111e937333fbe04a291a8e2095",
"assets/NOTICES": "51b8ad1009fd86649f5acffdc4c32150",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "9b88a32540e00a9a0ea8c6198b0e7e86",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "2c8bb2b57bd6108d55833896a6d1d235",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
