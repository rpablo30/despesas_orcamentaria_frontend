import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Cep } from '../model/cep';
import { Veiculos } from '../model/veiculos';

@Injectable({
  providedIn: 'root'
})
export class PdvService {
  
  private readonly VIACEP_API = 'https://viacep.com.br/ws/';

  private readonly API_URL = 'http://localhost:3003/veiculos';

  constructor(private httpClient: HttpClient) {}

  getCEP(cep: string): Observable<Cep> {
    const url = `${this.VIACEP_API}${cep}/json/`;
    return this.httpClient.get<Cep>(url);
  }

  cadastrarVeiculo(veiculo: Veiculos): Observable<any> {
    console.log('Dados do veículo recebidos no serviço:', veiculo);

    // Use o httpClient para fazer a solicitação HTTP real
    return this.httpClient.post(this.API_URL, veiculo).pipe(
      map((obj) => obj), // Pode ser necessário mapear a resposta se o servidor retornar algo diferente
      catchError((e) => this.errorHandler(e))
    );
  }
  private errorHandler(error: any): Observable<any> {
    console.error('Erro:', error);
    // Trate o erro de acordo com suas necessidades
    throw error;
  }
}
