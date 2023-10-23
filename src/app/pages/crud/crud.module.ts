import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CrudPageRoutingModule,
    SharedModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
