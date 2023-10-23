import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    IonicModule, // Agregar esta importación si aún no está importada
    SharedModule // Agregar el módulo compartido si aún no está importado
  ],
  declarations: [AboutPage], // Declarar el componente AboutPage aquí
})
export class AboutPageModule {}
