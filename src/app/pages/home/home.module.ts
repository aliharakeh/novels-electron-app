import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {PrimeNgModule} from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class HomeModule { }
