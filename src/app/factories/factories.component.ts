import { Component, OnInit } from '@angular/core';
import { Factory } from '../models/factory.model';
import { FactoryService } from '../core/factory.service';
import { QueryOptions } from '../core/query-options';

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
    this.factoryService.list(new QueryOptions()).subscribe(factories => {
      for (const factory of factories) {
        this.factories.push(new Factory(factory));
      }
    });
  }
}
