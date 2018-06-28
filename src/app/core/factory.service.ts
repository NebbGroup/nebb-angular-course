import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { Factory } from '../models/factory.model';
import { HttpClient } from '@angular/common/http';
import { FactorySerializer } from './factory-serializer';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';


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

