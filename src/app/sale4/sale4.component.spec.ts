import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale4Component } from './sale4.component';

describe('Sale4Component', () => {
  let component: Sale4Component;
  let fixture: ComponentFixture<Sale4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
