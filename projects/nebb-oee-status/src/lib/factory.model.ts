import { Resource } from 'nebb-rest-service';

export class Factory extends Resource {
  name: string;
  performance: number;
  availability: number;
  quality: number;

  constructor(values: Object = {}) {
    super(values);
    Object.assign(this, values);
  }

  getOveralEquipmentEffectiveness(): number {
    return this.performance * this.availability * this.quality;
  }
}
