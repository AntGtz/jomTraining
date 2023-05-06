import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from "./folder-routing.module";

import { FolderPage } from './folder.page';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    FolderPageRoutingModule,
    ComponentsModule,
    
    
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}