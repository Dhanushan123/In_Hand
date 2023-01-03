import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent5Component } from './rent5.component';

describe('Rent5Component', () => {
  let component: Rent5Component;
  let fixture: ComponentFixture<Rent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
