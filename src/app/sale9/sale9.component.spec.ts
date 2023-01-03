import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale9Component } from './sale9.component';

describe('Sale9Component', () => {
  let component: Sale9Component;
  let fixture: ComponentFixture<Sale9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
