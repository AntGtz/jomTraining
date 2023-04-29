import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { Location } from 'src/app/models/location.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})
export class RicmorCardComponent  implements OnInit {



   // cambia esto según la lógica de tu aplicación
  @Input() character: any;
  @Input() locations: any;
  constructor() { }

    episodes: Episode[] = [];
    location: boolean = false

  ngOnInit() {

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 30,
      spaceBetween: 30,
      centeredSlides: true,
      // y así sucesivamente
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


