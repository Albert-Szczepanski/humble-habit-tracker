import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SqlService} from "./common/services/database/sql.service";
import {SQLite} from "@awesome-cordova-plugins/sqlite/ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'md'
  }), AppRoutingModule],
  providers: [SQLite, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SqlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
