import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent7Component } from './rent7.component';

describe('Rent7Component', () => {
  let component: Rent7Component;
  let fixture: ComponentFixture<Rent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
