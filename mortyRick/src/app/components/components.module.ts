import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RicmorCardComponent } from './ricmor-card/ricmor-card.component';
import { EpisodiosPageModule } from '../episodios/episodios.module';
import { LocacionCardComponent } from '../locacion/locacion-card/locacion-card.component';
import { LocationsModule } from '../locacion/locations.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RicmorCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EpisodiosPageModule,
    LocationsModule,
    FormsModule,
  ],
  exports: [RicmorCardComponent],
  
})
export class ComponentsModule { }