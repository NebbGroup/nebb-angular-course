import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Serializer } from './serializer';
import { catchError, tap } from 'rxjs/operators';
import { QueryOptions } from './query-options';
import { Resource } from '../models/resource.model';

export class ResourceService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer: Serializer
  ) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(catchError(this.handleError('create', item)));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item)
      )
      .pipe(catchError(this.handleError('update', item)));
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}`);
  }

  list(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(
        tap(t => this.log(`fetched data`))
      );
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`).pipe(
      tap(t => this.log(`fetched data`)),
      catchError(this.handleError('delete'))
    );
  }

  private handleError(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('Resource.service: ' + message);
  }
}
