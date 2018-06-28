import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FactoryComponent } from './factory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService, ToastNoAnimationModule } from 'ngx-toastr';
import { Routes, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FactoriesComponent } from '../factories/factories.component';
import { routableComponents } from '../app-routing.module';
import { of } from 'rxjs';
import { Factory } from '../models/factory.model';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'factory/:id', component: FactoryComponent, data: { id: 1 }  },
  { path: 'factories', component: FactoriesComponent }
];

describe('FactoryComponent', () => {
  let component: FactoryComponent;
  let fixture: ComponentFixture<FactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule.withRoutes(routes),
         ToastrModule.forRoot(), ToastNoAnimationModule],
      declarations: [ routableComponents ],
      providers: [ToastrService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        }
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryComponent);
    component = fixture.componentInstance;
    component.factory = new Factory({id: 1});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
