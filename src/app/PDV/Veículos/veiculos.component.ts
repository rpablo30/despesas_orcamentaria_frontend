import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent {
  myForm: FormGroup;
  tipoVeiculo: string = 'carro'; // Valor padrão é 'carro'
  numeroPortasCarro: string | null = null; // Inicialmente nenhum valor selecionado
  numeroPortasMoto: string | null = null; // Inicialmente nenhum valor selecionado


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      modelo: ['', Validators.required],
      anoDeFabricacao: ['', Validators.required],
      marca: ['', Validators.required],
      portas: ['2'], // Valor padrão
      passageiros: ['1'], // Valor padrão
    });
  }

  

  // checkTipoVeiculo() {
  //   if (this.tipoVeiculo === 'carro') {
  //     return true; // Mostrar o campo de portas
  //   } else {
  //     return false; // Ocultar o campo de portas
  //   }
  // }

  checkTipoVeiculo() {
    return this.tipoVeiculo === 'carro';
  }



  onSubmit() {
    if (this.myForm.valid) {
      const dados = this.myForm.value;
      const url = 'http://localhost:3003/veiculos';

      this.http.post(url, dados).subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
    }
  }
}
