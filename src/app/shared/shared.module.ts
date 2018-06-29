import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NebbRestServiceModule } from 'nebb-rest-service';
import { NebbOeeStatusModule } from 'nebb-oee-status';


@NgModule({
  imports: [CommonModule, FormsModule, NebbRestServiceModule, NebbOeeStatusModule],
  exports: [CommonModule, FormsModule, NebbRestServiceModule, NebbOeeStatusModule]
})
export class SharedModule { }
