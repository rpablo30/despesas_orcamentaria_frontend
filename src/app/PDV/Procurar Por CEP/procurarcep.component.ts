import { Component, OnInit } from '@angular/core';
import { PdvService } from '../services/pdv.service';
import { Cep } from '../model/cep';

@Component({
  selector: 'app-procurarcep',
  templateUrl: './procurarcep.component.html',
  styleUrls: ['./procurarcep.component.scss']
})
export class ProcurarcepComponent implements OnInit {

  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
  ddd: any;
  service: any;

  buscaCEP() {
    this.service.getCEP(this.cep).subscribe((data: { cep: any; logradouro: any; localidade: any; bairro: any; uf: any; ddd: any; }) => {
        this.cep = data.cep;
        this.logradouro = data.logradouro;
        this.localidade = data.localidade;
        this.bairro = data.bairro;
        this.uf = data.uf;
        this.ddd = data.ddd;

        console.log(this.bairro);
    });
} 

blur(event: any) {
  this.buscaCEP();

  console.log(this.buscaCEP);
}



  constructor(private pdvService: PdvService) {

  }
  ngOnInit(): void {
   
  }

}
