import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent8Component } from './rent8.component';

describe('Rent8Component', () => {
  let component: Rent8Component;
  let fixture: ComponentFixture<Rent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
