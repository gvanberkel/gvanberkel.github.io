'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5060ed43233214f99a763955faf01f68",
"assets/AssetManifest.bin.json": "d4902fbd40f3fa67fe7755ebaff43c3d",
"assets/assets/cv_content/g21/about_this_page.md": "787c2f0954528b6ba249ad150667548a",
"assets/assets/cv_content/g21/code_collective_detail.md": "000a153082d4b36d327ac4458fbcca6c",
"assets/assets/cv_content/g21/code_collective_summary.md": "6f347ab3544cd031f639f3d1ec5129c6",
"assets/assets/cv_content/g21/cota_detail.md": "47115348c5b29bc74e207df08dc1fec8",
"assets/assets/cv_content/g21/cota_summary.md": "ea1ddeefc63083afea2de4021ee33a06",
"assets/assets/cv_content/g21/developer_frameworks_detail.md": "53ecee7b90292d198655842f1160e8f3",
"assets/assets/cv_content/g21/developer_frameworks_summary.md": "c6202e4c202832f71da36f61ba38bae4",
"assets/assets/cv_content/g21/education.md": "52b1500b6ad28879a2645e12820018d0",
"assets/assets/cv_content/g21/emotionaly_safe_teams.md": "801ea9f12c3b1c2dff8c3e311b9d5af7",
"assets/assets/cv_content/g21/flicker_detail.md": "af96bc3069f7b9c06ec839aae1989be0",
"assets/assets/cv_content/g21/flicker_summary.md": "5ff5fa132bd850db6bc7b0fe4c1b11ae",
"assets/assets/cv_content/g21/goals_2021.md": "d6befaacaa2f8d5c6c28f7c0482cb11a",
"assets/assets/cv_content/g21/guidepost.md": "cddd55f760abe1e87dbc5a854e13e083",
"assets/assets/cv_content/g21/looking_for.md": "cc639829bd365acc7cd8d5f828b05085",
"assets/assets/cv_content/g21/me.md": "e006f3a65ca8f22d43aed5b653f71202",
"assets/assets/cv_content/g21/offer.md": "78ed4f96e9c8338541ffbf6333c83411",
"assets/assets/cv_content/g21/overview.md": "8ec6a441e114077977a84d20e963ea0d",
"assets/assets/cv_content/g21/renati.md": "75497eb169c4d9cc1c510e99794c361d",
"assets/assets/cv_content/g21/slick_js_detail.md": "016ad36b610a93ae725665ba86217bdf",
"assets/assets/cv_content/g21/slick_js_summary.md": "d6e97b53fa5d820685d3ec220fdcc23f",
"assets/assets/cv_content/g21/strengths.md": "2f9aae46ebbd066daaf7721653cc4138",
"assets/assets/cv_content/g21/stretch_goals_2021.md": "d0076ad342be5e8b6332cf8057107f49",
"assets/assets/cv_content/g21/technology_experience.md": "1b27473b67c16407941fa55404def3d7",
"assets/assets/cv_content/g21/tfn.md": "933272a865d2b5fd6a64084ff62f8139",
"assets/assets/cv_content/g21/values.md": "ab67f2f9ed2e96aaf3bfc93b17cc2faa",
"assets/assets/cv_content/g21/web_forms_spa.md": "0ef1ac32e5dbf15189c5d8fdb7556afb",
"assets/assets/cv_content/g21/welcome.md": "3b7b5e822e58338f4f029405ea9740df",
"assets/assets/cv_content/g26/about_this_page.md": "787c2f0954528b6ba249ad150667548a",
"assets/assets/cv_content/g26/code_collective_detail.md": "e846920ead333ea2e8f5047bff192bf9",
"assets/assets/cv_content/g26/code_collective_summary.md": "95bc88de167b0d4c25d3831b2b2071f8",
"assets/assets/cv_content/g26/cota_detail.md": "45428288925d9b25fded97fe96d23ecb",
"assets/assets/cv_content/g26/cota_summary.md": "ea1ddeefc63083afea2de4021ee33a06",
"assets/assets/cv_content/g26/developer_frameworks_detail.md": "cc63b0ba44921dad898f18863e5c0b50",
"assets/assets/cv_content/g26/developer_frameworks_summary.md": "713afcb143dc5e0fbd5ee864968a177d",
"assets/assets/cv_content/g26/education.md": "5210c939ed6ec2e677288ffdfcff1643",
"assets/assets/cv_content/g26/flutter_slick_detail.md": "636011740da5d9a93a815facffaf8a7a",
"assets/assets/cv_content/g26/flutter_slick_summary.md": "6098af9a38259fb8b730acf8dcab5669",
"assets/assets/cv_content/g26/goals_2026.md": "50e4cd10bb75465e449a4e2fe7e19969",
"assets/assets/cv_content/g26/guidepost.md": "ad7767219c603157583ab08cbbb77a68",
"assets/assets/cv_content/g26/idi.md": "5c6ace06442733c7a79558a2d811b17c",
"assets/assets/cv_content/g26/looking_for.md": "f270bdffaea1ff1401d8463558165f6c",
"assets/assets/cv_content/g26/me.md": "127fe57ac6c315f47a5484f70f6696e6",
"assets/assets/cv_content/g26/offer.md": "167be4bb0deb5cf285a7f95801f1fefd",
"assets/assets/cv_content/g26/overview.md": "8ec6a441e114077977a84d20e963ea0d",
"assets/assets/cv_content/g26/slick_js_detail.md": "fa11a8b8990c835794f98d7e0608a960",
"assets/assets/cv_content/g26/slick_js_summary.md": "d6e97b53fa5d820685d3ec220fdcc23f",
"assets/assets/cv_content/g26/strengths.md": "f67a072b44f4633fe52cc1e65e9c304e",
"assets/assets/cv_content/g26/stretch_goals_2026.md": "55ff739e518905e2916674b07706504e",
"assets/assets/cv_content/g26/table_mountain_city_sightseeing.md": "8baa8d29a6487ec43b4a5bc4effc6977",
"assets/assets/cv_content/g26/technology_experience.md": "6503201a648b4353fb1c36675167072e",
"assets/assets/cv_content/g26/tfn.md": "dae9474636fea85b752d038fb65e3915",
"assets/assets/cv_content/g26/values.md": "34d21e9d282c173efc1afca02dfe5cb0",
"assets/assets/cv_content/g26/web_forms_spa.md": "6920a475568e9521b59b15b32ffd11b9",
"assets/assets/cv_content/g26/welcome.md": "bc0a1d5f80ca7c54e5df79f6b67f6812",
"assets/assets/images/profile.jpg": "f9ea5e7cc94656b12880601b49af2f47",
"assets/assets/images/twitter.png": "e7eb671363a9e62485a33e4c8628aca9",
"assets/FontManifest.json": "536bf3b79e012b078d511a549e5f4229",
"assets/fonts/MaterialIcons-Regular.otf": "5af4825061ac12d3c480bfc8cb6b5604",
"assets/google_fonts/DroidSerif-Bold.ttf": "3b6c3214b028debd9f175b63f71508e0",
"assets/google_fonts/DroidSerif-BoldItalic.ttf": "1f5dc2bf62705a7d09533b1538c9c173",
"assets/google_fonts/DroidSerif-Italic.ttf": "1262ad9a9f243ef2e7c80c0bb5f0060d",
"assets/google_fonts/DroidSerif-Regular.ttf": "e18165ce2b700b1b4daca82e276fcac5",
"assets/NOTICES": "a603a34861d5c2f562de40fbf9c4d6f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "4db53a8874dc6ca607fd4b4b32f1d8b3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fd756cf87a4c310fd89f139346cf27df",
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
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "4db53a8874dc6ca607fd4b4b32f1d8b3",
"icons/favicon-32x32.png": "0f76777bf975dda7acc7fbfb8c287a89",
"icons/favicon-96x96.png": "3aeb6a0ea94bd00c2f5faae81edb123d",
"icons/favicon.ico": "dc32c6f7c76185c75a5434276d4cac71",
"icons/Icon-192.png": "de4fab75adc49039d098d83004744994",
"icons/Icon-512.png": "88a2694885a51d9dca5943c4ff4d0480",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "71cd4e2fd8bc3801ba812e47e3ad2347",
"icons/ms-icon-150x150.png": "fa0fcbef593fd63535fe4405693de3be",
"icons/ms-icon-310x310.png": "3d87f7934d7239bfb3fd4df464f85777",
"icons/ms-icon-70x70.png": "f3f69334480346b6a694744445d27f56",
"index.html": "05b26326324791488a326adce85bb428",
"/": "05b26326324791488a326adce85bb428",
"main.dart.js": "dbbd711d633e8f2199143b35e1e0557c",
"main.dart.mjs": "a06ba4764ac34db4eb54ff340ca57b2b",
"main.dart.wasm": "d125626bfd4495da756cbbf23a882676",
"manifest.json": "389decd9bb81604409f35fb1f00a7880",
"version.json": "83c2610f83f88b36e9c3b178f0d55e28",
"web.config": "3e4b80487beac6dd1cbff82d56945513"};
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
