import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { Location } from 'src/app/models/location.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
  // import Swiper JS


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
  ngOnInit() { 
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


