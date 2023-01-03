import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent1Component } from './rent1.component';

describe('Rent1Component', () => {
  let component: Rent1Component;
  let fixture: ComponentFixture<Rent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
