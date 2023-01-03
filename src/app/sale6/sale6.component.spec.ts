import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale6Component } from './sale6.component';

describe('Sale6Component', () => {
  let component: Sale6Component;
  let fixture: ComponentFixture<Sale6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
