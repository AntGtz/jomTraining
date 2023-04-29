import { Component, OnInit,inject } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { EpisodeService } from '../services/episode.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
})
export class EpisodiosPage implements OnInit {

  rickmorDetailsepi: any;
  public folder!: string;
  
  search: string = ''
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(public EpisodeService: EpisodeService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.rickmorDetailsepi)
    //this.rickmorDetailsepi = await this.getEpisode();
  }

  // async getEpisode() {
  //   let data = await firstValueFrom(this.EpisodeService.read())
  //   console.log(data);
  //   return data;
  // }

}

