import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInstrumentComponent } from './display-instrument.component';

describe('DisplayInstrumentComponent', () => {
  let component: DisplayInstrumentComponent;
  let fixture: ComponentFixture<DisplayInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayInstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
