import { Injectable } from '@angular/core';
import { Factory } from '../models/factory.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';
import { ResourceService } from 'nebb-rest-service';
import { FactorySerializer } from './factory-serializer';


@Injectable({
  providedIn: CoreModule
})
export class FactoryService extends ResourceService<Factory> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.factoryUrl,
      'factories',
      new FactorySerializer());
  }
}

