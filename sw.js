self.addEventListner("install",
function(e) {
  e.waitUntill(

 caches.open("my-cache").then(function(cache) {

                                                 return cache.addA11([
                                                   "/DHEERU_TIMBER/",
                                                   "/DHEERU_TIMBER/index.html",
                                                   "/DHEERU_TIMBER/script.js"
                                                   ]);
                                                  })
                                                 );
                                                });

