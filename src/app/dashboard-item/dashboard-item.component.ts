import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';

@Component({
  selector: 'nebb-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {

  @Input() factory: Factory;

  constructor() { }

  ngOnInit() {
  }

  setClass(parameter: number) {
    if (parameter > 0.66) {
      return 'bg-success';
    }
    if (parameter > 0.33) {
      return 'bg-warning';
    }
    return 'bg-danger';
  }

  setImageColor() {
    if (this.factory.getOveralEquipmentEffectiveness() > 0.66) {
      return 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPUWO76HwAEKAIVAM7kFgAAAABJRU5ErkJggg==';
    }
    if (this.factory.getOveralEquipmentEffectiveness() > 0.33) {
      return 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5D9PwAHVgLIdb20nwAAAABJRU5ErkJggg==';
    }
    return 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8Y+r6HwAFogJXJhwp6AAAAABJRU5ErkJggg==';
  }

}
