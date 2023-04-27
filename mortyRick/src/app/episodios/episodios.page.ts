import { Component, OnInit,inject } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { RicmorEpisodesService } from '../services/ricmor-episodes.service';
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
  
  constructor(public RicmorEpisodesService: RicmorEpisodesService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.rickmorDetailsepi)
    this.rickmorDetailsepi = await this.getrickmorDetailsepi();
  }

  async getrickmorDetailsepi() {
    let data = await firstValueFrom(this.RicmorEpisodesService.getmortymorty())
    console.log(data);
    return data.results;
  }

}

