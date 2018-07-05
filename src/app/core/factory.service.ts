import { Injectable } from '@angular/core';
import { Factory } from '../models/factory.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';
import { ResourceService, QueryOptions } from 'nebb-rest-service';
import { FactorySerializer } from './factory-serializer';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: CoreModule
})

export class FactoryService extends ResourceService<Factory> {

  private cache$: Observable<Array<Factory>>;


  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.factoryUrl,
      'factories',
      new FactorySerializer());
  }

  listCached(queryOptions: QueryOptions): Observable<Factory[]> {
    if (!this.cache$) {
      this.cache$ = this.list(queryOptions).pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }
}

