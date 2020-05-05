import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeprojectPageRoutingModule } from './listeproject-routing.module';

import { ListeprojectPage } from './listeproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeprojectPageRoutingModule
  ],
  declarations: [ListeprojectPage]
})
export class ListeprojectPageModule {}
