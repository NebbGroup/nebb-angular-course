import { Component, OnInit } from '@angular/core';
import { Factory } from '../models/factory.model';
import { FactoryService } from '../core/factory.service';
import { QueryOptions } from 'nebb-rest-service';

@Component({
  selector: 'nebb-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {
  factories: Factory[];
  constructor(private factoryService: FactoryService) {}

  ngOnInit() {
    this.factories = [];
    this.factoryService.listCached(new QueryOptions()).subscribe(factories => {
      console.log('factory sub');
      for (const factory of factories) {
        this.factories.push(new Factory(factory));
      }
    });
  }
}
