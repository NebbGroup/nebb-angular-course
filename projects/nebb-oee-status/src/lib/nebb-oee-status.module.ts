import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NebbOeeStatusComponent } from './nebb-oee-status.component';
import { NebbOeeStatusService } from './nebb-oee-status.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [NebbOeeStatusComponent],
  exports: [NebbOeeStatusComponent],
  providers: [NebbOeeStatusService]
})
export class NebbOeeStatusModule { }
