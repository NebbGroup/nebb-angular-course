import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NebbHeaderComponentComponent } from './nebb-header-component/nebb-header-component.component';
import { NebbLeftMenuComponentComponent } from './nebb-left-menu-component/nebb-left-menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NebbHeaderComponentComponent,
    NebbLeftMenuComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
