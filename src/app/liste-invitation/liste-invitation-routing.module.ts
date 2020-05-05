import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeInvitationPage } from './liste-invitation.page';

const routes: Routes = [
  {
    path: '',
    component: ListeInvitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeInvitationPageRoutingModule {}
