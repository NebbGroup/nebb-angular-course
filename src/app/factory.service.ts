import { Injectable } from '@angular/core';
import { Factory } from './factory';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { FactorySerializer } from './factory-serializer';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
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

