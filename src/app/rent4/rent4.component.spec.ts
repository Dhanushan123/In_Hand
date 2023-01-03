import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rent4Component } from './rent4.component';

describe('Rent4Component', () => {
  let component: Rent4Component;
  let fixture: ComponentFixture<Rent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
