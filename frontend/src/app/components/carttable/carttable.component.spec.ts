import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttableComponent } from './carttable.component';

describe('CarttableComponent', () => {
  let component: CarttableComponent;
  let fixture: ComponentFixture<CarttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
