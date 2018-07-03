import { Component, OnInit } from '@angular/core';
import { Factory } from '../factory';
import { FactoryService } from '../factory.service';
import { QueryOptions } from '../query-options';


@Component({
  selector: 'nebb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ ]
})
export class DashboardComponent implements OnInit  {

  factories: Factory[];
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factories = [];
    this.factoryService.list(new QueryOptions()).subscribe(factories => {
      for (const factory of factories) {
         this.factories.push(new Factory(factory));
      }
    });
  }
}
