import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { SongsModalPageModule } from './songs-modal/songs-modal.module';
import { SongsModalPage } from './songs-modal/songs-modal.page';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({ 
  declarations: [AppComponent],
  entryComponents: [SongsModalPage],
  imports: [BrowserModule, SongsModalPageModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), AgmCoreModule.forRoot({
    apiKey: environment.mapsKeyApi
  })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
