import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent10Component } from './rent10.component';

describe('Rent10Component', () => {
  let component: Rent10Component;
  let fixture: ComponentFixture<Rent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
