import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RicmorCardComponent } from './ricmor-card/ricmor-card.component';


@NgModule({
  declarations: [RicmorCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RicmorCardComponent]
})
export class ComponentsModule { }
