'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b7c1207e7ad461952edd1d5c4def2954",
"index.html": "50b73c9c7a3b7e6408e4ccc20b29d563",
"/": "50b73c9c7a3b7e6408e4ccc20b29d563",
"main.dart.js": "b53188deb6c96cb0d06a9572a862334a",
"favicon.png": "e4d6330ab1c82d5464d5a37fdacaf2b3",
"icons/Icon-192.png": "b455b55b1040ceca398c4b198dcc119a",
"icons/Icon-512.png": "8490500d8810da79563af5700b9ac573",
"manifest.json": "90afde5d986ab9ac5e0b15528dd4d673",
".git/config": "eeefd5268865e9e5608998f59a287d21",
".git/objects/61/5ce68e149bbfa74ac1a2a693cd2cb4ed768d5d": "6de864aba7706579f5f08af6d48e5c8e",
".git/objects/0c/dee0fb8c7dd8ab7c54c6e77c45d214d39572e2": "20080733d4393c62a51e541a23cf8cf0",
".git/objects/0c/205dccc0f7064562c9f49a9f6bad4f33af964f": "dff1a9d58193b19273f0390849d43b71",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/02/d404930b7c7c10c7c4e6f0ee5742ae611a41a1": "3aa0bd210858ca379e7936dbbe3a8e31",
".git/objects/ac/1271dcf7abea9a48e8182c36e1dc89910665ef": "a111da566725da93595c15d04d2cdf03",
".git/objects/ae/1f72d476cd1559dacfb818e95037f243049d29": "3a32a683f9248b5147da70b08cb81fc7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/aaab17c1d12e01587f34fa878a1470db745d51": "8b1efffa7cf48728a169150986431d9c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f3/948a07f6602cecf2b5929028a2cc0338bd40a8": "72382ba3b52d9a269f6739030519c825",
".git/objects/eb/324047b156fc87b0facba41d49249037acbcac": "eeada1c66236bdc471c293cc2dd9b7f4",
".git/objects/c7/daacaa30df68d2300cf08f1b1d292d00903729": "2a0bafae63396c35a974b50106931700",
".git/objects/c7/13ee79d5175c8a06a0f4a01ddcde15cf2f80ad": "68feb7a868f20c8d18864a49f4dad55e",
".git/objects/c0/cc2c3b2b8a8881d7e7dd28874f0f0c7a320307": "1181d774b748b5aa252379439a981c8f",
".git/objects/fd/c4b8f6527c6abb15b5ca6bae753ff1e9eb3c8f": "1a819d96d305845adaa670da7d53baca",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/2e62bf5d4709d0ee28cb2e9870019b11357a8c": "6e335b51a6945e8dc6e3e72cb6147fc9",
".git/objects/fe/a42eb68840dbdbaf7e7bf55a1bb6e48a8c4afb": "11f35ec987925b19ce6180aa44683c90",
".git/objects/fb/e43e84ab2f3597f86b1aed1f8c5f455d8e03cc": "5f6856ed830d38ab356540870d177826",
".git/objects/ec/9651f3fcf68a3777946dcb79675a3af73afba5": "aba61de9f5c92e46ab7171cc77417f1e",
".git/objects/27/aef55518a50725cae7eda5d0621c96cf1c99da": "13841191b325af88955c53ad8ad3f6b7",
".git/objects/17/d74f443bd51a281cec26b7467413c4b18f33d1": "0e53456e898ba3317df514010a309e6d",
".git/objects/10/4758f61200a9a3ec88e1b13a14d5555c1265c1": "c44c46b40b830f03a16953659385bf16",
".git/objects/26/82fbdbda840660c4ba2d5a45a13e6c604b260c": "46bcb4b3b09d96dcbb8c43698b7e859b",
".git/objects/75/42f01b47d443dfbf939bbbfb9de26d39fe2f0e": "48f7936af79a887cda183b72849b6fcd",
".git/objects/72/63cd7bb6639e99bf144d8aa476fb9509dbf401": "9e18efb7d8ff8e67717d596720ed97df",
".git/objects/2a/b46313f327c67246e2c93d0a7868f7da1cc2c0": "b84b0034c3de8c0b17512117c801b6a8",
".git/objects/2f/a148148c98d763c06a5155b724b4921d062ea6": "3a25f9661a8c804d196c75aac15583f3",
".git/objects/43/806c89ac42140d38988c4ee70157a6ba9221a0": "57bd31b29e95c1e4b9771e850fb1da9a",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/38/826d1da304cbb08380c4041657b1f34ece7f6e": "6148f33376f0d08cb414ca3b7c7d8879",
".git/objects/01/985942c0e4e8a22d35a25686366559b62a2f91": "4f42ae3f06e24cbd45092d6083e75314",
".git/objects/d3/346f5998dd2367977dd0b49db44036160b1dc3": "7b348f290752f0d959332b2b7197c819",
".git/objects/a9/b3234458ac72d7709e1c610cde863f6f2f8a17": "1dd24a90808aead9a22f11ec2cb86243",
".git/objects/d5/1c785a5512c39f430c3b37a43cdfbd03fab5bb": "bac5290e3b533c21bf336eaff4a68cdd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/09ac34d446d83e50740f99cd9fb3ea8376bc69": "907d083460a1a8666eab9ccf268a773c",
".git/objects/a1/d90c7b4f372ca3e10df07d6eb8265b0c980c1e": "ac4680e922dd0d4e54b108ec5957306e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/f2eebdb71e3d87c91026272c808d16aad1c82b": "833944f076faa43ed82a05ca1fe9b73f",
".git/objects/f0/69a86f837805e9573c9974ff3721eec5afb7cc": "9ae1ff63424392b2545e213b7245ad80",
".git/objects/fa/b2e2f8e40e51c63e4336cd6ea7f0f38b44cde5": "0f960578169c87ba51fc32fe80362bcc",
".git/objects/c5/fc6e63da892d45fcfbf155ece29f37570eefad": "917a697d88be9adfc9abc0074da7968e",
".git/objects/f1/606b57c6b541ebcb883b6ddbaf697a98fc2297": "345a8d99ef8c7246c5acb46024865904",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e76a3f890ac255898d14b0027f74c5e207b084": "e1e63624bae5a208af2396804707469f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/48/3b938ea366a054f11da4c3953e86765ab7d072": "7fbd3bd898f1437a12acf42295810a34",
".git/objects/23/798c76a78f5054e34fe70041b359edc201de1a": "24afe9688da5cc846a809f44613fafaa",
".git/objects/15/dda94339ef1f1b705f6dea1393c097588a0dc7": "27b9d3c0b6b9f8e5fe8e3ba40ba21886",
".git/objects/82/fe58ca8e47a08193494c4b9c0cfd6e6763b930": "94ba743865989fc5f6486812aadb610c",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/7f/27edce2d7d6d95317055ef0406217c4c5faf6c": "0ea5b34444dc1f6eb8ae6ee87bbb0609",
".git/objects/7a/7412144bfbac33d7e68c4f0c1f8cf03f6d344b": "9fd4f8da455651ebbf200f056981fb31",
".git/objects/22/fdc92b122b10fbbac7df432ef06931d6301736": "6b34ee272b61abd1efe46f2d61c0af39",
".git/objects/25/084505d3b8d501d8c4863aa20e31742255a6f5": "f3221d373235c1978e0ceccd4bdb8b11",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0b6c906c00fa2a3b205eae57acee78f9",
".git/logs/refs/heads/master": "0b6c906c00fa2a3b205eae57acee78f9",
".git/logs/refs/remotes/origin/master": "b990a9bd70e94e410369b9dec67c1a7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "5f7e391ce2200e612d33b4c41bc67535",
".git/refs/remotes/origin/master": "5f7e391ce2200e612d33b4c41bc67535",
".git/index": "db19c4badad6f212b6b8d92003c5696f",
".git/COMMIT_EDITMSG": "b04a9d2ba90f1941cbc71299d2021fe5",
".git/FETCH_HEAD": "3c5640c91c1fb803a5c0bd858914754a",
"assets/images/apple_logo.png": "a14ce1b83a318b16fec33cec67038382",
"assets/images/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/images/spring_logo.png": "1e12b870211aac51ccdb6410cd7f66bc",
"assets/images/firestore.png": "8d0e6e99884e6d0cda574046fe71bfd4",
"assets/images/github.png": "f8c053bc783d1e5092300c6850dfe0e1",
"assets/images/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/images/google_cloud_platform.png": "292fb5eece48c2fa48ee991ecd883429",
"assets/images/mysql.png": "4c10de8a2fdea9c703c8194e8e73cee3",
"assets/images/android_logo.png": "abe88c8c3b4bb67601abde25cb57dc56",
"assets/images/gmail_logo.png": "66fcd17ebd446ca6b5cce1a098d0c248",
"assets/images/facebook.png": "f6438788e60012a98ccb06039b1cc2c5",
"assets/images/mongodb.png": "28ec40a4d2332648f920ff506571a7d7",
"assets/images/linked_in.png": "d5af2aaefaf2a305e0398e99aade5c2a",
"assets/images/nodejs.png": "356aea45f1757b8a8a12cea151933c47",
"assets/AssetManifest.json": "0bcd5f74d95629ea79cd86ffc40e99d4",
"assets/NOTICES": "78e3e3d4dea2fafacc69848b88e1ce66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
