import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateawayComponent } from './gateaway.component';

describe('GateawayComponent', () => {
  let component: GateawayComponent;
  let fixture: ComponentFixture<GateawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateawayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
