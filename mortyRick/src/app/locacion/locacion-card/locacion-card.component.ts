import { Component, OnInit,Input } from '@angular/core';
import { LocationService } from './../../services/location.service';
import { firstValueFrom } from 'rxjs';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-locacion-card',
  templateUrl: './locacion-card.component.html',
  styleUrls: ['./locacion-card.component.scss'],
})
export class LocacionCardComponent  implements OnInit {
  @Input() location: any;

  public locationData: Location = {};
  
  constructor(
    
    private LocationService: LocationService,
  ) { }

  locations: Location[] = [];

  ngOnInit() {
    this.getLocation();
  }

  async getLocation() {
    this.locationData = await firstValueFrom(this.LocationService.read(this.location));
  }

}



