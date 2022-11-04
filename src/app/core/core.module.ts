import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../Shared/util/material/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
