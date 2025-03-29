import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Instrument } from '../models/instrument.model';

@Component({
  selector: 'app-list-instrument',
  templateUrl: './list-instrument.component.html',
  styleUrls: ['./list-instrument.component.css']
})
export class ListInstrumentComponent implements OnInit {
  instruments: Instrument[] = [];
  selectedInstrument: Instrument | null = null;

  constructor(private musicService: MusicServiceService) { }

  ngOnInit(): void {
    // Make sure you're getting the latest instruments after creation
    this.musicService.getInstrument((instruments) => {
      this.instruments = instruments;
    });
  }
  

  loadInstruments(): void{
    this.musicService.getInstrument((instruments) => {
      this.instruments = instruments;
    });
  }

  onSelectInstrument(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }
}
