import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageHomeComponent } from './single-page-home.component';

describe('SinglePageHomeComponent', () => {
  let component: SinglePageHomeComponent;
  let fixture: ComponentFixture<SinglePageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePageHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
