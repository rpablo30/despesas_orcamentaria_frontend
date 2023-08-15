import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasTotaisComponent } from './despesas-totais/despesas-totais.component';
import { MoneyPipe } from '../shared/pipe/number-formater';
import { SharedModule } from '../shared/shared.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DespesasPorMesComponent } from './despesas-por-mes/despesas-por-mes.component';
import { DespesasPorCategoriaComponent } from './despesas-por-categoria/despesas-por-categoria.component';
import { DespesasPorFonteComponent } from './despesas-por-fonte/despesas-por-fonte.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; // Importe o MatCardModule
import { MatTableModule } from '@angular/material/table'; // Importe o MatTableModule
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Importe o MatProgressSpinnerModule





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
    CanvasJSAngularChartsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class DespesasModule { }
