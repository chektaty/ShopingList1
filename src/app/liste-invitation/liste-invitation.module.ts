import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeInvitationPageRoutingModule } from './liste-invitation-routing.module';

import { ListeInvitationPage } from './liste-invitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeInvitationPageRoutingModule
  ],
  declarations: [ListeInvitationPage]
})
export class ListeInvitationPageModule {}
