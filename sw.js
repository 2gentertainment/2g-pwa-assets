self.addEventListener('install', (event) => {
  console.log('2G Ent Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('2G Ent Service Worker: Active');
});

self.addEventListener('fetch', (event) => {
  // This stays empty for now to ensure Weebly compatibility
});
