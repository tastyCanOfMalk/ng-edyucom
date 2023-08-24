import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicModalComponent } from './dynamic-modal.component';

describe('DynamicModalComponent', () => {
  let component: DynamicModalComponent;
  let fixture: ComponentFixture<DynamicModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicModalComponent]
    });
    fixture = TestBed.createComponent(DynamicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
