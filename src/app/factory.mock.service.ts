import { QueryOptions } from 'nebb-rest-service';
import { Observable, of } from 'rxjs';
import { Factory } from './factory';

export class FactoryMockService {

  list(queryOptions: QueryOptions): Observable<Factory[]> {
    return of([
      new Factory({
        id: 1,
        title: 'Steel Factory',
        availability: 1,
        performance: 0.3,
        quality: 0.3})
    ]);
  }

}
