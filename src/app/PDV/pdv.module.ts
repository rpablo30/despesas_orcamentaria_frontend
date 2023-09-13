import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { PdvRoutingModule } from './pdv-routing.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    CanvasJSAngularChartsModule,
    PdvRoutingModule,
    ReactiveFormsModule
  ]
})
export class PdvModule { }
