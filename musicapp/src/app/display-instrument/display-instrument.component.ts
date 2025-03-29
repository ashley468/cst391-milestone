import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-instrument',
  templateUrl: './display-instrument.component.html',
  styleUrl: './display-instrument.component.css'
})
export class DisplayInstrumentComponent implements OnInit {
  @Input() instrument?: Instrument; // This is the input instrument

  currentRoute: string = '';

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {
    // Access route parameters if you want to fetch instrument by ID
  }

  ngOnInit(): void {
    if (!this.instrument) {
      this.route.params.subscribe(params => {
        let artist = params['title'];  // Assuming 'accessory' is passed in the route
        //console.log("accessory: " + artist);

       // this.service.getInstrumentById(artist, (instrument: Instrument[]) => {
         // this.instrument = instrument[0];  // Assign to the input 'instrument' property
        //});
      });
    }
  }
}
