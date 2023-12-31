import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankComponent } from './net-bank.component';

describe('NetBankComponent', () => {
  let component: NetBankComponent;
  let fixture: ComponentFixture<NetBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
