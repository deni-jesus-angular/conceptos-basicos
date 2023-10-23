import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AboutPageRoutingModule
  ],
  exports:[AboutPage],
  declarations: [AboutPage]
})
export class AboutPageModule {}
