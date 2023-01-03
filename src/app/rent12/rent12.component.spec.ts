import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent12Component } from './rent12.component';

describe('Rent12Component', () => {
  let component: Rent12Component;
  let fixture: ComponentFixture<Rent12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
