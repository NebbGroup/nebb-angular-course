import { Component, OnInit } from '@angular/core';
import { NebbOeeStatusService } from './nebb-oee-status.service';
import { Factory } from './factory.model';

@Component({
  selector: 'lib-nebb-oee-status',
  templateUrl: './nebb-oee-status.component.html',
  styles: []
})
export class NebbOeeStatusComponent implements OnInit {

  factoryId: number;
  factoryOee: string;

  constructor(private nebbOeeStatusService: NebbOeeStatusService) { }

  ngOnInit() {
    this.factoryId = 0;
    this.factoryOee = '';
  }

  getOee(): void {
    console.log(this.factoryId);
    this.nebbOeeStatusService.get(this.factoryId).subscribe(
       factory => this.factoryOee = new Factory(factory).getOveralEquipmentEffectiveness().toString());
  }

  clear(): void {
    this.factoryId = null;
    this.factoryOee = '';
  }

}
