import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FactoriesComponent } from './factories.component';
import { HttpClientModule } from '@angular/common/http';

describe('FactoriesComponent', () => {
  let component: FactoriesComponent;
  let fixture: ComponentFixture<FactoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule, HttpClientModule
      ],
      declarations: [ FactoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
