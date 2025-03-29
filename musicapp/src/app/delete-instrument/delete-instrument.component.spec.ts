import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstrumentComponent } from './delete-instrument.component';  // Updated to the correct component import

describe('DeleteInstrumentComponent', () => {  // Updated component name
  let component: DeleteInstrumentComponent;
  let fixture: ComponentFixture<DeleteInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInstrumentComponent ],  // Updated to the correct component
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstrumentComponent);  // Updated to the correct component
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
