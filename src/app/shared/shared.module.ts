import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule


@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
