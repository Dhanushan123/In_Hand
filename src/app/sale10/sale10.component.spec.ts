import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale10Component } from './sale10.component';

describe('Sale10Component', () => {
  let component: Sale10Component;
  let fixture: ComponentFixture<Sale10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
