import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebbLeftMenuComponentComponent } from './nebb-left-menu-component.component';

describe('NebbLeftMenuComponentComponent', () => {
  let component: NebbLeftMenuComponentComponent;
  let fixture: ComponentFixture<NebbLeftMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebbLeftMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebbLeftMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
