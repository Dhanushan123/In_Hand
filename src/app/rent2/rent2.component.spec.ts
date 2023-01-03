import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent2Component } from './rent2.component';

describe('Rent2Component', () => {
  let component: Rent2Component;
  let fixture: ComponentFixture<Rent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
