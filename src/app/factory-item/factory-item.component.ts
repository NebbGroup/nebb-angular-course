import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';


@Component({
  selector: 'nebb-factory-item',
  templateUrl: './factory-item.component.html',
  styleUrls: ['./factory-item.component.scss']
})
export class FactoryItemComponent implements OnInit {

  @Input() factory: Factory;

  constructor() { }

  ngOnInit() {
  }

}
