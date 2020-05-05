import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDetailPage } from './liste-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDetailPageRoutingModule {}
