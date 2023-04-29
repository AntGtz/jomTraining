import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RicmorCardComponent } from './ricmor-card/ricmor-card.component';
import { EpisodiosPageModule } from '../episodios/episodios.module';


@NgModule({
  declarations: [RicmorCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EpisodiosPageModule
  ],
  exports: [RicmorCardComponent],
  
})
export class ComponentsModule { }
