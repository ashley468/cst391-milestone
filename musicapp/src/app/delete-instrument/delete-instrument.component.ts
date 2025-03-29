import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-instrument',  // Updated to reflect the instrument component
  templateUrl: './delete-instrument.component.html',  // Updated to reflect the instrument template
  styleUrls: ['./delete-instrument.component.css']  // Updated to reflect the instrument styles
})
export class DeleteInstrumentComponent implements OnInit {  // Updated to reflect the instrument class

  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  ngOnInit() {
    //let instrument = this.route.snapshot.paramMap.get('instrument');
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("Deleting instrument with id" + id);
    this.service.deleteInstrument(id, () => {  // Updated to reflect the instrument deletion service method
    console.log("Instrument deleted successfully");
    });
  }
}
