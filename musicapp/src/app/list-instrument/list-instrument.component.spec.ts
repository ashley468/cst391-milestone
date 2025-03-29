import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstrumentComponent } from './list-instrument.component';

describe('ListInstrumentComponent', () => {
  let component: ListInstrumentComponent;
  let fixture: ComponentFixture<ListInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
