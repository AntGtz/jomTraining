import { Component, Input,OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Episode } from 'src/app/models/episode.model';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-morric-card',
  templateUrl: './morric-card.component.html',
  styleUrls: ['./morric-card.component.scss'],
})
export class MorricCardComponent  implements OnInit {
  @Input() location: any;
  @Input() episode: any;

  public episodeData: Episode = {};
  constructor(
    private EpisodeService: EpisodeService,
    private loadCtrl: LoadingController,
    private router: Router,
    private location2: Location
  ) { }

  goToMainPage() {
    this.location2.back();
  }

  ngOnInit() {
    this.getEpisode();
  }

  async getEpisode() {
    this.episodeData = await firstValueFrom(this.EpisodeService.read(this.episode));
  }

}