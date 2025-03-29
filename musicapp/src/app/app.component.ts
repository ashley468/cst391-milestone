import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: String = "Music Store";
  version: String = "1.0";

  constructor(private router: Router) {}

  displayVersion() {
    alert(this.version);
  }

  displayAccessoryList() {
    console.log("displayAccessoryList");
    this.router.navigate(['list-accessory'], { queryParams: { data: new Date() } });
  }

  // Add the displayArtistList() method
  displayArtistList() {
    console.log('Display artist list clicked');
    // Implement the navigation or display logic for the artist list
    this.router.navigate(['list-artist']);
  }
}
