import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PokeCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PokeCardComponent]
})
export class ComponentsModule { }
