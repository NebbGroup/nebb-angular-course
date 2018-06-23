import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { FactoryService } from '../factory.service';
import { QueryOptions } from '../query-options';

@Component({
  selector: 'nebb-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {

  @Input() factories: Factory[];
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
