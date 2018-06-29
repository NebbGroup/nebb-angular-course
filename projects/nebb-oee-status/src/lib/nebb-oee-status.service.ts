import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factory } from './factory.model';
import { ResourceService } from 'nebb-rest-service';
import { FactorySerializer } from './factory-serializer';

@Injectable( )
export class NebbOeeStatusService extends ResourceService<Factory> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://localhost:3000',
      'factories',
      new FactorySerializer());
  }
}
