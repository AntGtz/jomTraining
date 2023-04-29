import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RicmorCardComponent } from './ricmor-card/ricmor-card.component';
import { LocacionCardComponent } from '../locacion/locacion-card/locacion-card.component';
import { EpisodiosPageModule } from '../episodios/episodios.module';


@NgModule({
  declarations: [RicmorCardComponent,LocacionCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EpisodiosPageModule
  ],
  exports: [RicmorCardComponent,LocacionCardComponent,],
  
})
export class ComponentsModule { }
