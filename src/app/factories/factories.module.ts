import { NgModule } from '@angular/core';
import { routedComponents, FactoriesRoutingModule } from './factories-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule, FactoriesRoutingModule ],
  declarations: [ routedComponents ]
})
export class FactoriesModule { }
