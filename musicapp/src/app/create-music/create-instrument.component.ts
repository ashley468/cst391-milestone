import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Instrument } from '../models/instrument.model';  // Ensure this points to the correct instrument model
import { Media } from '../models/media.model';  // Ensure this points to the correct media model
import { MusicServiceService } from '../service/music-service.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrls: ['./create-instrument.component.css']
})
export class CreateInstrumentComponent implements OnInit {

  instrument: Instrument = {
    type: "",  
    brand: "",
    model: "",
  };

  mediaRaw: string = "";  // Input string for media data
  wasSubmitted: boolean = false;  // Flag for form submission feedback
  instruments: Instrument[] = [];  // List of instruments (for UI)

  constructor(private service: MusicServiceService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // You may want to load initial instruments or other initialization logic here
  }

  public onSubmit(): void {
    // Parse the Media data and add it to the Instrument's media array (if applicable)
    let media: Media[] = [];
    let mediaAll = this.mediaRaw.split('\n');
    for (let i = 0; i < mediaAll.length; ++i) {
      let type: string = "";
      let artist: string = "";
      let albumTitle: string = "";
      let releaseYear: number = 1990; // Default year if not specified
      let trackInfo = mediaAll[i];
      let trackParts = trackInfo.split(':');
      
      if (trackParts.length === 4) {
        type = trackParts[0];
        artist = trackParts[1];
        albumTitle = trackParts[2];
        releaseYear = parseInt(trackParts[3], 10); // Convert to number
      } else if (trackParts.length === 3) {
        type = trackParts[0];
        artist = trackParts[1];
        albumTitle = trackParts[2];
      } else {
        // Handle other scenarios if needed (e.g., malformed inputs)
        continue;
      }

      // Create a Media object and add it to the media array
      media.push({
        type: type,
        artist: artist,
        albumTitle: albumTitle,
        releaseYear: releaseYear
      });
    }

    // Optionally assign the media to the instrument (uncomment if media is being used)
    // this.instrument.media = media;

    console.log("Submitting instrument:", this.instrument);

    // Call the service to create the Instrument
    this.service.createInstrument(this.instrument, () => {
      console.log("Created Instrument");

      // Add the newly created instrument to the list of instruments
      this.instruments.push(this.instrument);

      // Show success message
      this.wasSubmitted = true;

      // Optionally reset the form here or give UI feedback
      this.instrument = { type: "", brand: "", model: "" };
      this.mediaRaw = '';  // Reset the media input field

      // Manually trigger change detection to update the view
      this.cdr.detectChanges();
    });
  }
}
