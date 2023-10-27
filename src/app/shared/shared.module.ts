import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsInfoComponent } from './components/authors-info/authors-info.component';
import { CrudInfoComponent } from './components/crud-info/crud-info.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { SelectablePictureComponent } from './components/selectable-picture/selectable-picture.component';

@NgModule({
  declarations: [
    AuthorsInfoComponent,
    CrudInfoComponent,
    CharacterFormComponent,
    CharacterDetailComponent,
    SelectablePictureComponent,
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
    CharacterFormComponent,
    CharacterDetailComponent,
    
  ]
})
export class SharedModule { }
