import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FactoriesComponent } from './factories.component';
import { HttpClientModule } from '@angular/common/http';
import { FactoryService } from '../factory.service';
import { FactoryMockService } from '../factory.mock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('FactoriesComponent', () => {
  let component: FactoriesComponent;
  let fixture: ComponentFixture<FactoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [FactoriesComponent],
      providers: [FactoryService]
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

  it('should have empty list of factories before oninit', () => {
    expect(component.factories.length).toBe(1);
  });
});
