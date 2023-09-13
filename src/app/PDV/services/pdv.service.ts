import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../model/cep';


@Injectable({
  providedIn: 'root'
})
export class PdvService {

  //private readonly API = 'http://localhost:3003/';

  constructor(private httpClient: HttpClient) {}

  getCEP(cep: Cep ):Observable<Cep >{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/` );
  }
  

 
}
