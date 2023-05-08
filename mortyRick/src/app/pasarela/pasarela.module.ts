
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PasarelaPageRoutingModule } from './pasarela-routing.module';

import { PasarelaPage } from './pasarela.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarelaPageRoutingModule
  ],
  declarations: [PasarelaPage]
})
export class PasarelaPageModule {}
