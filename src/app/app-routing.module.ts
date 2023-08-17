import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'despesas', loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
