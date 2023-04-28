import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcharacterPageRoutingModule } from './addcharacter-routing.module';

import { AddcharacterPage } from './addcharacter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcharacterPageRoutingModule
  ],
  declarations: [AddcharacterPage]
})
export class AddcharacterPageModule {}
