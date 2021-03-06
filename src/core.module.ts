import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ControllerModule} from 'controller/module';
import {ChromeComponent} from './chrome/component';
import {ChromeModule} from './chrome/module';
import {HttpErrorInterceptor} from './common/services/error.interceptor';
import {ConfigModule} from './config/module';
import {HomeModule} from './home/module';
import {InstancesModule} from './instances/module';
import {routes} from './router.config';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ChromeModule,
    HomeModule,
    InstancesModule,
    ConfigModule,
    ControllerModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [ChromeComponent]
})
export class CoreModule {}
