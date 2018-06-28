import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastNoAnimationModule, ToastNoAnimation } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
