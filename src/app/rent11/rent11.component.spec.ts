import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent11Component } from './rent11.component';

describe('Rent11Component', () => {
  let component: Rent11Component;
  let fixture: ComponentFixture<Rent11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
