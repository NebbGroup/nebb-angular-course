import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languages } from '../../models/language.model';

@Component({
  selector: 'nebb-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})

export class LanguageSelectorComponent implements OnInit {
  languages: Array<any>;
  currentLanguage: any;

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    this.languages = languages;
    this.currentLanguage = languages.find(x => x.key === 'en');
  }

  setLanguage(language) {
    this.languages = languages;
    this.currentLanguage = language;
    this.translateService.setDefaultLang(language.key);
  }
}
