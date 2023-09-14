import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent {
  veiculoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.veiculoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      anoDeFabricacao: ['', [Validators.required, Validators.min(1900), Validators.max(2099)]],
      marca: ['', Validators.required],
      tipo: ['carro', Validators.required],
      portas: ['2', Validators.required], // Valor padrão
      passageiros: ['1', Validators.required] // Valor padrão
    });
  }

  onSubmit() {
    if (this.veiculoForm.valid) {
      // O formulário é válido, você pode acessar os valores com this.veiculoForm.value
      console.log('Dados do formulário:', this.veiculoForm.value);
    } else {
      // O formulário é inválido, mensagens de erro serão exibidas no HTML
      console.log('Formulário inválido');
    }
  }
}
