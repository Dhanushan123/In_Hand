import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale12Component } from './sale12.component';

describe('Sale12Component', () => {
  let component: Sale12Component;
  let fixture: ComponentFixture<Sale12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
