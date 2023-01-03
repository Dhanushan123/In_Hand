import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale7Component } from './sale7.component';

describe('Sale7Component', () => {
  let component: Sale7Component;
  let fixture: ComponentFixture<Sale7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
