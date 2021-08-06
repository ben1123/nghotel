import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndBuverageComponent } from './food-and-buverage.component';

describe('FoodBuverageComponent', () => {
  let component: FoodAndBuverageComponent;
  let fixture: ComponentFixture<FoodAndBuverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndBuverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndBuverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
