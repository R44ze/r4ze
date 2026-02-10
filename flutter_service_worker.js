'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "7c28073b39f916063e4ef2c721c0f9ca",
"/": "7c28073b39f916063e4ef2c721c0f9ca",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "42585f915f61f0b480d04d82990d58c4",
"main.dart.js": "7a33d8f2144bf1e476cf29a00f5f5785",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/9a/305771d036448e4de02433595c067bcf67fa4e": "65c389af1252a1fcb5cfdc215477b477",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "1fc78e2539840adc86739df5ab2106cb",
".git/objects/09/d2ac37cbf6ec76adf43ef54fcbaf9cbb3594b9": "f1325930ddc0498acd23e0ab0ee4bb94",
".git/objects/96/8a3f0a0875698b55983cea0f9be4bed9b358ee": "e270bb5811b2a29197e9b383df380936",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/08/dd4eb0018827c011db04cc0d431f87566b4ab4": "23117f127bdda5ade29622b93720cc4a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "9f3800cba3bdb0fd35ffbf1730e39d6a",
".git/objects/12/f09022d571abe203d2475e5a63762ca6be4b71": "7b812074ac6cdcbc0a4963feec430fc9",
".git/objects/7a/1a11166c4d913009974a5ffb9caf05e44b9886": "056e282c7fbf63c5e902fb124d18593d",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "3bc1cfa9d35b24ae15d0c92a3e1b7e58",
".git/objects/67/caedd5907256f8760f121fac2bf174b8a79262": "c134623dde561ecffe37bf7ab36d5c5f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "ad44b0e3874ce9a8490bb08d982b070a",
".git/objects/ee/381aeb07429c6a6af9756ccb91f97f743a80db": "b501bb68da347eca7e6572410640837a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "043520c054ac0a6cbf0784a7e535c5a4",
".git/objects/16/cc68e2f1789c22989ea87d8c13f7917eb5eee5": "6c4f9731f18c3194767d70472219194d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/34/c30cb538015e5e16f59ad42924e7541cb1138f": "464fd859d39e27c4d80ee11e27a79f64",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "e96947424742b4d85c4522c5d2f29f0c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "3afc17e45da83758c0485c523d549fe5",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5fbfd41a73be95fe0fa610703c666957",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "1f96c5724f3157a75e32b916bb80a12d",
".git/objects/cb/6e10f40e3bbfc2678db498e148abfe836bdcf7": "8639461577bce1f4ae069dc741262f30",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/e2/9ba0d90e2c1d1cc7050931aa463434eac4b835": "3162e4812c516082392bcf59053f6717",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "6d692dfe2643a57a1acabbd9f4d16f97",
".git/objects/bd/2a11a906358a0f76371aca0a28f891ab0c1339": "6ba508c9b98e87666a9080831b324435",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "e44dbcc4f8ba7b73e63f5274e03f757f",
".git/objects/fa/10c272f1f86d9a550979bee91bd45f663fee43": "9f1555353ee79dbd512981debba91c48",
".git/objects/b8/c1504bb8483d83c1419b512f55254b2969ff20": "ea0d419fc4eefae94962aa7a1b1d95d9",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "8b9c31c4669a155fcefbae3e383fa1c3",
".git/objects/ac/d7072f39e8aa9ad9f99f24b8ba3f60413c99cf": "36da6df9beca5c5023a145bb306c0f99",
".git/objects/f1/3444540b76e470f2f6d142577a960eb9b41853": "50e595e8588b9b148015676365ef9ccf",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "aaf7a1ff595fd8aeefada99de1cedd95",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "d3086c88096251642f83805078d30149",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "3e6ddc94183a5f5f251d5f5f9d834ade",
".git/objects/1f/167401ef14ffcc8b6b4d245f6ceb75d6c655c7": "4a7c0a2095017429b20d34770db420e5",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "383232acfec6d014865ba00d787a04ec",
".git/objects/ed/9b07bbdfb80911478aed23d56957c4a6d86058": "97badb4998ca501ac17b2403e0cd28e3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/9b/5dca1ceb03f068ecaf19c56c36b38e704adb93": "f34934dd170304777e29c0a3b83ebc00",
".git/index": "54a65fe0359241a5baed5939036c2fbe",
".git/config": "eddd1fb53036064baab37d1c1c321140",
".git/refs/remotes/origin/main": "254c39804ab4ccf9252ed7b8088d1b81",
".git/refs/heads/main": "254c39804ab4ccf9252ed7b8088d1b81",
".git/logs/HEAD": "43f8406e0227cd0c617f80454e50812f",
".git/logs/refs/remotes/origin/main": "6ffc09c3bfa9f87e07a0e15a835d952c",
".git/logs/refs/heads/main": "38da17a7ac856fd4e3bcd736fa5bd2bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/AssetManifest.bin": "8ca7202e516f919117b0d6edbcf71a47",
"assets/NOTICES": "eb620a61e525c825e3a1205eeed83ca8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/assets/icons/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/galenite.svg": "46e7a30d1bcf293e4fd123bb2908cd60",
"assets/assets/images/r4ze3.jpg": "6d9520fa606d3c7ed2f38a45e17b525a",
"assets/assets/images/r4ze.jpg": "684dfc4943afa69b78ce09659f0eafc5",
"assets/assets/images/r4ze2.jpg": "b1bbdee569f03a648537e15e5b3b67c5",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "72d9e5e53e6650667d3f8bd20d0d6d46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter_bootstrap.js": "e63f56639df72ce0afa271b297240aa4",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"manifest.json": "d95de5b4384f33ba918ef7baf1aec619"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
