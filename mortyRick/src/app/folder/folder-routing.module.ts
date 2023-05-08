import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'addCharacter',
    loadChildren: () => import('../addcharacter/addcharacter.module').then( m => m.AddcharacterPageModule)

  },
  {
    path: 'pasarela',
    loadChildren: () => import('../pasarela/pasarela.module').then( m => m.PasarelaPageModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}