import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubscribeModule } from './subscribe/subscribe.module';
import { AsyncModule } from './async/async.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SubscribeModule,
    AsyncModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
