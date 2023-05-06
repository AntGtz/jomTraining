import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { Location } from 'src/app/models/location.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
  // import Swiper JS
  declare const google: any;

@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})



export class RicmorCardComponent  implements OnInit {
  
  @NgModule({
    imports: [
      BrowserModule,
      HammerModule
    ],
    // ...
  })
 
   // cambia esto según la lógica de tu aplicación
  @Input() character: any;
  @Input() locations: any;
  constructor() {  }

    episodes: Episode[] = [];
    location: boolean = false 


    ngOnInit(): void {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.603722, lng: -58.381592 },
        zoom: 12
      });
  
      const marker = new google.maps.Marker({
        position: { lat: -34.603722, lng: -58.381592 },
        map: map,
        title: 'Mi ubicación'
      });
    }


  showEpisodes(episodes: []) {
    if(this.episodes.length > 0){
      this.episodes = [];
    }else {
      this.episodes = episodes;
    }
    console.log(this.episodes)
  }

  showLocation() {
    this.location = !this.location;
  }


}


