import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrocoComponent } from './PDV/Troco/troco.component';
import { VeiculosComponent } from './PDV/Veículos/veiculos.component';
import { ProcurarcepComponent } from './PDV/Procurar Por CEP/procurarcep.component';
import { PalindromosComponent } from './PDV/Palindromos/palindromos.component';

const routes: Routes = [
  { path: 'palindromos', component: PalindromosComponent },
  { path: 'troco', component: TrocoComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'procurarcep', component: ProcurarcepComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
