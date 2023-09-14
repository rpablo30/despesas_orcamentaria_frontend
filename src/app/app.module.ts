import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card'; // Importe o módulo do MatCard
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProcurarcepComponent } from './PDV/Procurar Por CEP/procurarcep.component'; // Certifique-se de que este é o caminho correto para o seu componente
import { VeiculosComponent } from './PDV/Veículos/veiculos.component';
import { PdvService } from './PDV/services/pdv.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ProcurarcepComponent, 
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [
    PdvService, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
