import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent6Component } from './rent6.component';

describe('Rent6Component', () => {
  let component: Rent6Component;
  let fixture: ComponentFixture<Rent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
