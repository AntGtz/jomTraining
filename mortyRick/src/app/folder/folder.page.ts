import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicmorService } from '../services/ricmor.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  rickmorDetails: any;
  public folder!: string;
  
  search: string = ''
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(public RicmorService: RicmorService) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.rickmorDetails)
    this.rickmorDetails = await this.getrickmorDetails();
  }

  async getrickmorDetails() {
    let data = await firstValueFrom(this.RicmorService.getrickrick())
    console.log(data);
    return data.results;
  }
}
