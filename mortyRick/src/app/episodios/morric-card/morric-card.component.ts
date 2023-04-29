import { Component, Input,OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from 'src/app/models/episode.model';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-morric-card',
  templateUrl: './morric-card.component.html',
  styleUrls: ['./morric-card.component.scss'],
})
export class MorricCardComponent  implements OnInit {
  
  @Input() episode: any;

  public episodeData: Episode = {};
  constructor(
    private EpisodeService: EpisodeService,

  ) { }
  ngOnInit() {
    this.getEpisode();
  }

  async getEpisode() {
    this.episodeData = await firstValueFrom(this.EpisodeService.read(this.episode));
  }

}