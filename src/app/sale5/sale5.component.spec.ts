import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale5Component } from './sale5.component';

describe('Sale5Component', () => {
  let component: Sale5Component;
  let fixture: ComponentFixture<Sale5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
