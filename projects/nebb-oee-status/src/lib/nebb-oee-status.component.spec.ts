import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebbOeeStatusComponent } from './nebb-oee-status.component';

describe('NebbOeeStatusComponent', () => {
  let component: NebbOeeStatusComponent;
  let fixture: ComponentFixture<NebbOeeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebbOeeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebbOeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
