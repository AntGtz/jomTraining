import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MorricCardComponent } from './morric-card/morric-card.component';
import { EpisodiosPageRoutingModule } from './episodios-routing.module';

import { EpisodiosPage } from './episodios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodiosPageRoutingModule
  ],
  declarations: [EpisodiosPage,MorricCardComponent, MorricCardComponent],
  exports: [MorricCardComponent]
})
export class EpisodiosPageModule {}
export class ComponentsModule { }
