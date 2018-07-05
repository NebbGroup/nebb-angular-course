
import { Observable, of } from 'rxjs';
import { Factory } from './factory';
import { QueryOptions } from 'src/app/query-options';

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
