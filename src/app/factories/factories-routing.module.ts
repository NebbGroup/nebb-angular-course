import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactoriesComponent } from './factories.component';
import { FactoryComponent } from './factory/factory.component';

const routes: Routes = [
  {
    path: '',
    component: FactoriesComponent,
    children: [
      {
        path: ':id',
        component: FactoryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoriesRoutingModule { }

export const routedComponents = [FactoryComponent, FactoriesComponent];
