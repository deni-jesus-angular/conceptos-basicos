import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsInfoComponent } from './components/authors-info/authors-info.component';

@NgModule({
  declarations: [
    AuthorsInfoComponent
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
    AuthorsInfoComponent
  ]
})
export class SharedModule { }
