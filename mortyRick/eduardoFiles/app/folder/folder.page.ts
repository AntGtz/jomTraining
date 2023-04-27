import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  pokemonDetails: any;
  public folder!: string;
  
  search: string = ''
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(public PokemonService: PokemonService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.pokemonDetails)
    this.pokemonDetails = await this.getPokemonDetails();
  }

  async getPokemonDetails() {
    let data = await firstValueFrom(this.PokemonService.getPokemon())
    console.log(data);
    return data.results;
  }
}
