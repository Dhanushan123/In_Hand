import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent3Component } from './rent3.component';

describe('Rent3Component', () => {
  let component: Rent3Component;
  let fixture: ComponentFixture<Rent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
