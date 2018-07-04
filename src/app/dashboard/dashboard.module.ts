import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';


@NgModule({
  imports: [ SharedModule, DashboardRoutingModule ],
  declarations: [ routedComponents ],
  exports: [ ]
})
export class DashboardModule { }
