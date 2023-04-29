import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})
export class RicmorCardComponent  implements OnInit {

  @Input() character: any;
  @Input() locations: any;
  constructor() { }

    episodes: Episode[] = [];
    location: Location[] = [];

  ngOnInit() {}

  showEpisodes(episodes: []) {
    if(this.episodes.length > 0){
      this.episodes = [];
    }else {
      this.episodes = episodes;
    }
    console.log(this.episodes)
  }

  showLocation(location: []) {
    if(this.location.length > 0){
      this.location = [];
    }else {
      this.location = location;
    }
    console.log(this.location)
  }


}


