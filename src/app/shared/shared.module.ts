import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NebbRestServiceModule } from 'nebb-rest-service';
import { NebbOeeStatusModule } from 'nebb-oee-status';
import { I18nModule } from './i18n/i18n.module';


@NgModule({
  imports: [CommonModule, FormsModule, NebbRestServiceModule, NebbOeeStatusModule, I18nModule],
  exports: [CommonModule, FormsModule, NebbRestServiceModule, NebbOeeStatusModule, I18nModule]
})
export class SharedModule {  constructor() {console.log('shared cons'); } }
