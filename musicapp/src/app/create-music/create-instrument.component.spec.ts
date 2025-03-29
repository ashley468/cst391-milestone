import { Component, OnInit } from '@angular/core';
import { Instrument } from '../models/instrument.model';  // Adjust according to your actual file structure

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrls: ['./create-instrument.component.css']
})
export class CreateInstrumentComponent implements OnInit {

  instrument: Instrument = {
    type: '',
    brand: '',
    model: ''
  };

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    // Add logic to handle the submission of the instrument
    console.log(this.instrument);
  }
}
