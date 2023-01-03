import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale3Component } from './sale3.component';

describe('Sale3Component', () => {
  let component: Sale3Component;
  let fixture: ComponentFixture<Sale3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
