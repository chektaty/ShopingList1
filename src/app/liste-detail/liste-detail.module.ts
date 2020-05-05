import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDetailPageRoutingModule } from './liste-detail-routing.module';

import { ListeDetailPage } from './liste-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDetailPageRoutingModule
  ],
  declarations: [ListeDetailPage]
})
export class ListeDetailPageModule {}
