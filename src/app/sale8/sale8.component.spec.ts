import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale8Component } from './sale8.component';

describe('Sale8Component', () => {
  let component: Sale8Component;
  let fixture: ComponentFixture<Sale8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sale8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sale8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
