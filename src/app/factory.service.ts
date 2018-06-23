import { Injectable } from '@angular/core';
import { Factory } from './factory';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { FactorySerializer } from './factory-serializer';

@Injectable({
  providedIn: 'root'
})
export class FactoryService extends ResourceService<Factory> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://localhost:3000',
      'factories',
      new FactorySerializer());
  }
}

