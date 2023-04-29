import { CharacterService } from './../../services/character.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})
export class RicmorCardComponent  implements OnInit {

  @Input() character: any;
  constructor(
    private CharacterService: CharacterService,
    private loadCtrl: LoadingController,
    private router: Router
    ) { }

    episodes: Episode[] = [];
    goToPage() {
      this.router.navigate(['/episodios/']);
    }

    goToPage2() {
      this.router.navigate(['/addcharacter/']);
    }
  

  ngOnInit() {}

  showEpisodes(episodes: []) {
    if(this.episodes.length > 0){
      this.episodes = [];
    }else {
      this.episodes = episodes;
    }
    console.log(this.episodes)
  }

}


