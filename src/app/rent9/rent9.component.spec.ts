import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent9Component } from './rent9.component';

describe('Rent9Component', () => {
  let component: Rent9Component;
  let fixture: ComponentFixture<Rent9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
