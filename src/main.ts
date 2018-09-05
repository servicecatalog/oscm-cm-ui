import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {ChromeModule} from './chrome/module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ChromeModule)
  .catch(err => console.log(err));
