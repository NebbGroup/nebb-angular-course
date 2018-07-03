import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryItemComponent } from './factory-item.component';

describe('FactoryItemComponent', () => {
  let component: FactoryItemComponent;
  let fixture: ComponentFixture<FactoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
