import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, inject, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute , } from '@angular/router';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import Swiper from 'swiper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    
  characters: Character[] = [];
  pageSize: number = 2; // número de elementos por página
  swiper: any;
  

  public folder!: string;

  search: string = ''
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(public CharacterService: CharacterService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.characters = await this.getrickmorDetails();
    
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

      const remainingItems = this.characters.length;
      this.pageSize = Math.ceil(remainingItems / this.pageSize);
      this.pageSize = Math.ceil(this.characters.length / this.pageSize);

    }
    
  }


}
