import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgMicroService} from './ng-micro.service';



@NgModule({
  providers: [NgMicroService]
})
export class NgMicroModule { }
