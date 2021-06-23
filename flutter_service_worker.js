'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "26eac448c8c1fec60ed0e5abc330febc",
"assets/assets/cv_content/about_this_page.md": "f1304e11644c45d806f9b7044367a237",
"assets/assets/cv_content/code_collective_detail.md": "f1fa1a4809791873c8574bf7e4117dc9",
"assets/assets/cv_content/code_collective_summary.md": "a32098ccc4a62f186cada4a54781a4b0",
"assets/assets/cv_content/cota_detail.md": "a6df63b7221ac2b1b843d9c400ae0bc9",
"assets/assets/cv_content/cota_summary.md": "d21b16d8155ad25369ae26477d49f760",
"assets/assets/cv_content/education.md": "390b5053b18b1004e8a64b788ce325a1",
"assets/assets/cv_content/emotionaly_safe_teams.md": "831ce46c025f3f58d44dd7c2e944563b",
"assets/assets/cv_content/flicker_detail.md": "137e58687f906d48ec1278b052192383",
"assets/assets/cv_content/flicker_summary.md": "c09c0fa764b44907a5e619cdbb70f12e",
"assets/assets/cv_content/goals_2021.md": "c2bc51200c7ac72c0a697c1a114c7fa6",
"assets/assets/cv_content/guidepost.md": "bc04ef43d967f3e10626d56020512f81",
"assets/assets/cv_content/looking_for.md": "e0e40c428a354aac73df1cbc3a67f760",
"assets/assets/cv_content/me.md": "f6054112d2d93246c77e4ed7b51c9629",
"assets/assets/cv_content/offer.md": "7032ef2b15d31680870d1b3c4b991096",
"assets/assets/cv_content/overview.md": "8ec6a441e114077977a84d20e963ea0d",
"assets/assets/cv_content/renati.md": "b6f5d2690b4a5ef866a128bb66e95bc4",
"assets/assets/cv_content/slick_js_detail.md": "69974f25473675db9433d4a7d34566fe",
"assets/assets/cv_content/slick_js_summary.md": "0000c91e0d91e2eee4767b79575577b9",
"assets/assets/cv_content/strengths.md": "2f9aae46ebbd066daaf7721653cc4138",
"assets/assets/cv_content/stretch_goals_2021.md": "a9b43e9a45facc3b4b841a9df22ff1fe",
"assets/assets/cv_content/technology_experience.md": "32bf6d702ee12fa04993295a70671376",
"assets/assets/cv_content/tfn.md": "a96a965f0ff34e1c69b60cadea7aee0d",
"assets/assets/cv_content/values.md": "ab67f2f9ed2e96aaf3bfc93b17cc2faa",
"assets/assets/cv_content/web_forms_spa.md": "ca55969a81fd5155dde81066f67f8942",
"assets/assets/cv_content/welcome.md": "5af9a7ab9f8d4ffb627faeef010f3596",
"assets/assets/images/profile.jpg": "f9ea5e7cc94656b12880601b49af2f47",
"assets/assets/images/twitter.png": "e7eb671363a9e62485a33e4c8628aca9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/Apache%2520License.txt": "0cc1a9e33dd7a6eb0b79927742cf005c",
"assets/google_fonts/DroidSerif-Bold.ttf": "3b6c3214b028debd9f175b63f71508e0",
"assets/google_fonts/DroidSerif-BoldItalic.ttf": "1f5dc2bf62705a7d09533b1538c9c173",
"assets/google_fonts/DroidSerif-Italic.ttf": "1262ad9a9f243ef2e7c80c0bb5f0060d",
"assets/google_fonts/DroidSerif-Regular.ttf": "e18165ce2b700b1b4daca82e276fcac5",
"assets/NOTICES": "cc88f69c93514b7e4c5e9fc6b621fddb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "4db53a8874dc6ca607fd4b4b32f1d8b3",
"icons/android-icon-144x144.png": "71cd4e2fd8bc3801ba812e47e3ad2347",
"icons/android-icon-192x192.png": "520a879c3d667660f6ab8d1275bffe78",
"icons/android-icon-36x36.png": "a0eb34a0e592964542fc53b3da1fe573",
"icons/android-icon-48x48.png": "433f1f68fbb15cb4e219015850163046",
"icons/android-icon-72x72.png": "2c2affb0cf20dea9f1e4c58fb291607b",
"icons/android-icon-96x96.png": "3aeb6a0ea94bd00c2f5faae81edb123d",
"icons/apple-icon-114x114.png": "0bb368f0a8afe56e0d54b308c07778fb",
"icons/apple-icon-120x120.png": "5d0c2f4b79713b0932793fa006ce528f",
"icons/apple-icon-144x144.png": "71cd4e2fd8bc3801ba812e47e3ad2347",
"icons/apple-icon-152x152.png": "e537c86ffbb1d0a6221863d268ff6b18",
"icons/apple-icon-180x180.png": "2ace5de4fa2a5fa7a9a2ee2457481404",
"icons/apple-icon-57x57.png": "33b5900dc7322372fa9f30f4306b7ec1",
"icons/apple-icon-60x60.png": "41ad9937909a86f4be9e1385cd5575ba",
"icons/apple-icon-72x72.png": "2c2affb0cf20dea9f1e4c58fb291607b",
"icons/apple-icon-76x76.png": "eebd41e148cd2f9c9560f7a9d1c1c048",
"icons/apple-icon-precomposed.png": "b6244029f5cbc66e26e446389f7dc2ce",
"icons/apple-icon.png": "b6244029f5cbc66e26e446389f7dc2ce",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "4db53a8874dc6ca607fd4b4b32f1d8b3",
"icons/favicon-32x32.png": "0f76777bf975dda7acc7fbfb8c287a89",
"icons/favicon-96x96.png": "3aeb6a0ea94bd00c2f5faae81edb123d",
"icons/favicon.ico": "dc32c6f7c76185c75a5434276d4cac71",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "71cd4e2fd8bc3801ba812e47e3ad2347",
"icons/ms-icon-150x150.png": "fa0fcbef593fd63535fe4405693de3be",
"icons/ms-icon-310x310.png": "3d87f7934d7239bfb3fd4df464f85777",
"icons/ms-icon-70x70.png": "f3f69334480346b6a694744445d27f56",
"index.html": "c547cc598a7b1bfc654c9295df262ef5",
"/": "c547cc598a7b1bfc654c9295df262ef5",
"main.dart.js": "9152121563aab3dcceee0d39a92acf67",
"manifest.json": "9c34260257aec8e67b76cf4bb406b485",
"version.json": "480bc2a895327bb7b933b1a043c7ac02"
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
