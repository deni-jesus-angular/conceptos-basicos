import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsInfoComponent } from './components/authors-info/authors-info.component';
import { CrudInfoComponent } from './components/crud-info/crud-info.component';

@NgModule({
  declarations: [
    AuthorsInfoComponent,
    CrudInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AuthorsInfoComponent,
    CrudInfoComponent,
  ]
})
export class SharedModule { }
