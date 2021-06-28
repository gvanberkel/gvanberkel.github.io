'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "385e0d1074215bd336f9d1685ee9583b",
"assets/assets/cv_content/about_this_page.md": "787c2f0954528b6ba249ad150667548a",
"assets/assets/cv_content/code_collective_detail.md": "73d3d28115058ffe3f12fcd79dc8253a",
"assets/assets/cv_content/code_collective_summary.md": "6f347ab3544cd031f639f3d1ec5129c6",
"assets/assets/cv_content/cota_detail.md": "47115348c5b29bc74e207df08dc1fec8",
"assets/assets/cv_content/cota_summary.md": "ea1ddeefc63083afea2de4021ee33a06",
"assets/assets/cv_content/developer_frameworks_detail.md": "43c82424190d16003932f76b4c9c041f",
"assets/assets/cv_content/developer_frameworks_summary.md": "cab78b5fc15a1d9dc45c5ec7a196ce73",
"assets/assets/cv_content/education.md": "37df079e014d7daf503acb0d034769b1",
"assets/assets/cv_content/emotionaly_safe_teams.md": "801ea9f12c3b1c2dff8c3e311b9d5af7",
"assets/assets/cv_content/flicker_detail.md": "af96bc3069f7b9c06ec839aae1989be0",
"assets/assets/cv_content/flicker_summary.md": "5ff5fa132bd850db6bc7b0fe4c1b11ae",
"assets/assets/cv_content/goals_2021.md": "d6befaacaa2f8d5c6c28f7c0482cb11a",
"assets/assets/cv_content/guidepost.md": "cddd55f760abe1e87dbc5a854e13e083",
"assets/assets/cv_content/looking_for.md": "cc639829bd365acc7cd8d5f828b05085",
"assets/assets/cv_content/me.md": "e006f3a65ca8f22d43aed5b653f71202",
"assets/assets/cv_content/offer.md": "78ed4f96e9c8338541ffbf6333c83411",
"assets/assets/cv_content/overview.md": "8ec6a441e114077977a84d20e963ea0d",
"assets/assets/cv_content/renati.md": "75497eb169c4d9cc1c510e99794c361d",
"assets/assets/cv_content/slick_js_detail.md": "016ad36b610a93ae725665ba86217bdf",
"assets/assets/cv_content/slick_js_summary.md": "d6e97b53fa5d820685d3ec220fdcc23f",
"assets/assets/cv_content/strengths.md": "2f9aae46ebbd066daaf7721653cc4138",
"assets/assets/cv_content/stretch_goals_2021.md": "d0076ad342be5e8b6332cf8057107f49",
"assets/assets/cv_content/technology_experience.md": "1b27473b67c16407941fa55404def3d7",
"assets/assets/cv_content/tfn.md": "48759fb14c1063f2686961eb3649c5a9",
"assets/assets/cv_content/values.md": "ab67f2f9ed2e96aaf3bfc93b17cc2faa",
"assets/assets/cv_content/web_forms_spa.md": "0ef1ac32e5dbf15189c5d8fdb7556afb",
"assets/assets/cv_content/welcome.md": "3b7b5e822e58338f4f029405ea9740df",
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
"icons/Icon-192.png": "de4fab75adc49039d098d83004744994",
"icons/Icon-512.png": "88a2694885a51d9dca5943c4ff4d0480",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "71cd4e2fd8bc3801ba812e47e3ad2347",
"icons/ms-icon-150x150.png": "fa0fcbef593fd63535fe4405693de3be",
"icons/ms-icon-310x310.png": "3d87f7934d7239bfb3fd4df464f85777",
"icons/ms-icon-70x70.png": "f3f69334480346b6a694744445d27f56",
"index.html": "292e83d91a781832ef9c8edfc5401f3f",
"/": "292e83d91a781832ef9c8edfc5401f3f",
"main.dart.js": "c8a54253ddc0ec5c51c534856730a380",
"manifest.json": "389decd9bb81604409f35fb1f00a7880",
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
