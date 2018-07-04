import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NebbRestServiceModule } from 'nebb-rest-service';
import { NebbOeeStatusModule } from 'nebb-oee-status';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NebbRestServiceModule,
    NebbOeeStatusModule
  ],
  declarations: [LanguageSelectorComponent],
  exports: [CommonModule,
            FormsModule,
            NebbRestServiceModule,
            NebbOeeStatusModule,
            TranslateModule,
            LanguageSelectorComponent],
  providers: []
})
export class SharedModule { }
