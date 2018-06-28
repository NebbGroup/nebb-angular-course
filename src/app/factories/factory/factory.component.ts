import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Factory } from '../../models/factory.model';
import { FactoryService } from '../../core/factory.service';

@Component({
  selector: 'nebb-factory-component',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {
  @Input() factory: Factory;

  constructor(
    private factoryService: FactoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params['id'].subscribe(params => {
      const id = +params['id'];
      this.factoryService
        .get(id)
        .subscribe(factory => (this.factory = new Factory(factory)));
    });
  }

  saveFactory() {
    this.factoryService.update(this.factory).subscribe(factory => {
      this.success(factory);
    },
    error => console.log(error));
  }

  private success(factory: Factory): Observable<any> {
    this.factory = factory;
    this.toastr.success('Successfully saved factory data!', 'Success!');
    return of(this.router.navigate(['/factories']))
    .pipe(delay(2000));
  }
}
