import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent  implements OnInit {

  @Input() character: any;
  constructor(
    private PokemonService: PokemonService,
    private loadCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
}
