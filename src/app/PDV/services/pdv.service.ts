import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../model/cep';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  private readonly VIACEP_API = 'https://viacep.com.br/ws/';

  constructor(private httpClient: HttpClient) {}

  getCEP(cep: string): Observable<Cep> {
    const url = `${this.VIACEP_API}${cep}/json/`;
    return this.httpClient.get<Cep>(url);
  }

  cadastrarVeiculo(){
    console.log("Chegou na classe de serviço ;")
  }



}
