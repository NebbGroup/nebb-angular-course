import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastNoAnimationModule, ToastNoAnimation } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { registerLocaleData } from '@angular/common';
import localeNb from '@angular/common/locales/nb';

registerLocaleData(localeNb, 'nb');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    CoreModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'nb' } ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
