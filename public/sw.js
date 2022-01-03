/* eslint-disable no-restricted-globals */
const staticCacheName = 'Static Assets v1';
const dynamicCacheName = 'Dynamic Assets'
const allStatic = [
  '/',
  '/index.html',
  '/static/media/bg-triangle.c0c30b562fdb087666594c1bc0d512f6.svg',
  '/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg',
  '/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg',
  '/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg',
  '/static/media/logo.a4a2b39fefcdb6a1a8088c4dba8f3d93.svg',
  '/static/media/image-rules.258b753fb6284dc8ae00c5b2fa7938c0.svg',
  'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap',
  '/static/media/icon-close.633ddda1378fd6182886043482833796.svg'
]


self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then(
      (cache) => cache.addAll(allStatic)
    )
  )
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(
      cacheResponse => {
        return cacheResponse || fetch(evt.request).then( fetchResponse => {
          return caches.open(dynamicCacheName).then(
            cache => {
              cache.put(evt.request.url, fetchResponse.clone());
              return fetchResponse
            } 
          )
        })
      }
    )
  )
})

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keysArray => {
      return Promise.all(
        keysArray.filter(
          key => key !== staticCacheName && key !== dynamicCacheName
        ).map(
          key => caches.delete(key)
        )
      )
    })
  )
});
