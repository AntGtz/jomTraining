import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import Swiper from 'swiper';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  swiper!: Swiper;
  characters: Character[] = [];
  public folder!: string;
  
  search: string = ''
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(public CharacterService: CharacterService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.characters = await this.getrickmorDetails();

  }

  eliminarItem(characters: any) {
    const index = this.characters.indexOf(characters);
    if (index >= 0) {
      this.characters.splice(index, 1);
    }
  }
  async getrickmorDetails() {
    let data = await firstValueFrom(this.CharacterService.getAll())
    return data.results;
  }

  async dropElement(character: Character) {
    console.log(character.id);
    const index = this.characters.indexOf(character);
    if (index >= 0) {
      this.characters.splice(index, 1);
      console.log(this.characters);
    }
  }
}
