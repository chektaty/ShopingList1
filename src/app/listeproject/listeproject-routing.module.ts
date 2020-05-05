import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeprojectPage } from './listeproject.page';

const routes: Routes = [
  {
    path: '',
    component: ListeprojectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeprojectPageRoutingModule {}
