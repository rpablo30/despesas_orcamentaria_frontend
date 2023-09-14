import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculos } from '../model/veiculos';
import { PdvService } from '../services/pdv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent {
  veiculoForm: FormGroup;
  veiculo: Veiculos = {
    tipo: 'carro',
    modelo: '',
    anoDeFabricacao: 0,
    marca: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private pdvService: PdvService,
    private router: Router
  ) {
    this.veiculoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      anoDeFabricacao: ['', Validators.required],
      marca: ['', Validators.required],
      tipo: ['carro', Validators.required],
      portas: ['2'], // Valor padrão
      passageiros: ['1'] // Valor padrão
    });
  }

  onSubmit() {
    if (this.veiculoForm.valid) {
      // Use o método .value do FormGroup para obter os valores do formulário
      const formValues = this.veiculoForm.value;

      // Copie os valores do formulário para o objeto veiculo
      this.veiculo = { ...this.veiculo, ...formValues };

      
      this.pdvService.cadastrarVeiculo(this.veiculo).subscribe(
        () => {
          console.log('Veículo cadastrado com sucesso');
          
          this.router.navigate(['/veiculos']);
        },
        (error) => {
          console.error('Erro ao cadastrar veículo:', error);
         
        }
      );
    }
  }
}
