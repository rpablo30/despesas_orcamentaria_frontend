import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasTotaisComponent } from './totais/totais.component';
import { DespesasPorMesComponent } from './mes/mes.component';
import { DespesasPorCategoriaComponent } from './categoria/categoria.component';
import { DespesasPorFonteComponent } from './fonte/fonte.component';

const routes: Routes = [
  { path: '', component: DespesasTotaisComponent },
  { path: 'mes', component: DespesasPorMesComponent },
  { path: 'categoria', component: DespesasPorCategoriaComponent },
  { path: 'fonte', component: DespesasPorFonteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
