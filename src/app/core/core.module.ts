import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectivePreloadingStrategy } from './selective-preload-strategy';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    FormsModule, RouterModule, FooterComponent, HeaderComponent, LeftMenuComponent
  ],
  declarations: [ FooterComponent, HeaderComponent, LeftMenuComponent],
  providers: [SelectivePreloadingStrategy]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
