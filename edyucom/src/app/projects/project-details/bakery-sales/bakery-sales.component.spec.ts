import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerySalesComponent } from './bakery-sales.component';

describe('BakerySalesComponent', () => {
  let component: BakerySalesComponent;
  let fixture: ComponentFixture<BakerySalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakerySalesComponent]
    });
    fixture = TestBed.createComponent(BakerySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
