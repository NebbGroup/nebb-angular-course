import { Injectable, ApplicationRef } from '@angular/core';
import { languages } from './languages.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  public state;
  public data: {};
  public currentLanguage: any;
  public x: Observable<any> = of({
    key: 'no',
    alt: 'Norwegian',
    title: 'Norsk'
  });
  private subject = new Subject<any>();
  private defaultLocale = 'no';

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor(private httpClient: HttpClient, private ref: ApplicationRef) {
    this.state = new Subject();
    this.initLanguage(this.defaultLocale || 'gb');
    this.fetch(this.currentLanguage.key);
  }

  private fetch(locale: any) {
    this.httpClient
      .get(`assets/api/langs/${locale}.json`)
      .subscribe((data: any) => {
        this.data = data;
        this.state.next(data);
        this.ref.tick();
      });
  }

  private initLanguage(locale: any) {
    const language = languages.find(it => {
      return it.key === locale;
    });
    if (language) {
      this.currentLanguage = language;
    } else {
      throw new Error(`Incorrect locale used for I18nService: ${locale}`);
    }
  }

  setLanguage(language) {
    this.sendMessage(language);
    this.currentLanguage = language;
    this.fetch(language.key);
  }

  subscribe(sub: any, err: any) {
    return this.state.subscribe(sub, err);
  }

  public getTranslation(phrase: string): string {
    const value = this.data && this.data[phrase] ? this.data[phrase] : phrase;
    return value;
  }
}
