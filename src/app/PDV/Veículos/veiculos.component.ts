import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculos } from '../model/veiculos';
import { PdvService } from '../services/pdv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    anoDeFabric: '',
    marca: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private pdvService: PdvService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.veiculoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      anoDeFabric: ['', Validators.required],
      marca: ['', Validators.required],
      tipo: ['carro', Validators.required],
      portas: ['2'], // Valor padrão
      passageiros: ['1'] // Valor padrão
    });
  }

  onSubmit() {
    if (this.veiculoForm.valid) {
      const formValues = this.veiculoForm.value;
      this.veiculo = { ...this.veiculo, ...formValues };

      this.pdvService.cadastrarVeiculo(this.veiculo).subscribe(
        () => {
          console.log('Veículo cadastrado com sucesso');
          
          this.toastr.success('Carro cadastrado com sucesso', 'Sucesso');

          this.router.navigate(['/veiculos']);
        },
        (error) => {
          console.error('Erro ao cadastrar veículo:', error);
        }
      );
      this.veiculoForm.reset();
    }
  }
}
