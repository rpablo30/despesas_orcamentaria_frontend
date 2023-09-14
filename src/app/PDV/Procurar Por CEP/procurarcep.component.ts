import { Component, OnInit } from '@angular/core';
import { PdvService } from '../services/pdv.service';
import { Cep } from '../model/cep';

@Component({
  selector: 'app-procurarcep',
  templateUrl: './procurarcep.component.html',
  styleUrls: ['./procurarcep.component.scss'],
})
export class ProcurarcepComponent implements OnInit {

  cep: string = '';
  cepData: Cep | undefined;

  constructor(private pdvService: PdvService) {}

  ngOnInit(): void {}

  buscaCEP() {
    if (this.cep) {
      this.pdvService.getCEP(this.cep).subscribe((data: Cep) => {
        this.cepData = data;
      });
    }
  }

  blur(event: any) {
    this.buscaCEP();
  }
  buscarCEP() {
    this.buscaCEP();
  }
}
