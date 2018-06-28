import { Serializer } from './serializer';
import { Factory } from '../models/factory.model';



export class FactorySerializer implements Serializer {
  fromJson(json: any): Factory {
    console.log('test');
    const factory = new Factory({
    id: json.id,
    name: json.name,
    availability: json.availability,
    performance: json.performance,
    quality: json.quality});
    return factory;
  }

  toJson(factory: Factory): any {
    return {
      id: factory.id,
      name: factory.name,
      availability: factory.availability,
      performance: factory.performance,
      quality: factory.quality
    };
  }
}
