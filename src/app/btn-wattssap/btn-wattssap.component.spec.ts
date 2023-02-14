import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWattssapComponent } from './btn-wattssap.component';

describe('BtnWattssapComponent', () => {
  let component: BtnWattssapComponent;
  let fixture: ComponentFixture<BtnWattssapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWattssapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWattssapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
