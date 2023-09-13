import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PalindromosComponent } from './Palindromos/palindromos.component';
import { TrocoComponent } from './Troco/troco.component';
import { VeiculosComponent } from './Veículos/veiculos.component';
import { ProcurarcepComponent } from './Procurar Por CEP/procurarcep.component';

const routes: Routes = [
  { path: '', component: PalindromosComponent },
  { path: 'palindromos', component: PalindromosComponent },
  { path: 'troco', component: TrocoComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'procurarcep', component: ProcurarcepComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
