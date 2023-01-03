import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale11Component } from './sale11.component';

describe('Sale11Component', () => {
  let component: Sale11Component;
  let fixture: ComponentFixture<Sale11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
