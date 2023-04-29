import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LocacionCardComponent } from '../locacion/locacion-card/locacion-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocacionCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  exports: [LocacionCardComponent],
})
export class LocationsModule { }
