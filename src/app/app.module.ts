import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { FactoryComponent } from './factory/factory.component';
import { FactoriesComponent } from './factories/factories.component';
import { FactoryService } from './factory.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimationModule, ToastNoAnimation } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    DashboardComponent,
    FooterComponent,
    DashboardItemComponent,
    FactoryComponent,
    FactoriesComponent
  ],
  imports: [
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FactoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
