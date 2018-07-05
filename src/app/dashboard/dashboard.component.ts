import { Component, OnInit } from '@angular/core';
import { Factory } from '../models/factory.model';
import { FactoryService } from '../core/factory.service';
import { QueryOptions } from 'nebb-rest-service';

@Component({
  selector: 'nebb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  factories: Factory[];
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factories = [];
    this.factoryService.listCached(new QueryOptions()).subscribe(factories => {
      console.log('dashboard sub');
      for (const factory of factories) {
        this.factories.push(new Factory(factory));
      }
    });
  }
}
