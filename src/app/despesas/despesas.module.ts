import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasTotaisComponent } from './totais/totais.component';
import { MoneyPipe } from '../shared/pipe/number-formater';
import { SharedModule } from '../shared/shared.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DespesasPorMesComponent } from './mes/mes.component';
import { DespesasPorCategoriaComponent } from './categoria/categoria.component';
import { DespesasPorFonteComponent } from './fonte/fonte.component';


@NgModule({
  declarations: [
    DespesasTotaisComponent,
    MoneyPipe,
    DespesasPorMesComponent,
    DespesasPorCategoriaComponent,
    DespesasPorFonteComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    AppMaterialModule,
    SharedModule,
    CanvasJSAngularChartsModule
  ]
})
export class DespesasModule { }
