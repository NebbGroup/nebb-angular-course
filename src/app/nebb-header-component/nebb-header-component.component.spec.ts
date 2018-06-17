import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebbHeaderComponentComponent } from './nebb-header-component.component';

describe('NebbHeaderComponentComponent', () => {
  let component: NebbHeaderComponentComponent;
  let fixture: ComponentFixture<NebbHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebbHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebbHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
