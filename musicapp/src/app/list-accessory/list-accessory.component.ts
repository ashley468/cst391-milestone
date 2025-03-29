
/*
import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Accessory } from '../models/accessory.model';

@Component({
  selector: 'app-list-accessory',
  templateUrl: './list-accessory.component.html',
  styleUrls: ['./list-accessory.component.css']
})
export class ListAccessoryComponent implements OnInit {
  selectedAccessory: Accessory | null = null;
  accessories: Accessory[] = [];

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.service.getAccessory((accessories: Accessory[]) => {
      this.accessories = accessories;
      console.log("this.accessories", this.accessories);
    });
  }

  onSelectAccessory(accessory: Accessory) {
    this.selectedAccessory = accessory;
  }
}
*/