import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    void navigator.serviceWorker.getRegistration()
    .then(function(registration) {
        if(registration) {
          void registration.unregister().then(()=> {
            if ('caches' in window) {
              void caches.keys()
                .then(function(keyList) {
                  return Promise.all(keyList.map(function(key) {
                    return caches.delete(key);
                  }));
                });
            }
          });
        }
    });
  })
  .catch(err => console.error(err));
