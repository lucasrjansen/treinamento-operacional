import { Injectable } from '@angular/core';
import { Entregador } from '../_models/Entregador';
import { Credenciais } from '../_models/Credenciais';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from './SessionStorage.service';
import { Observable } from 'rxjs';
import { API } from '../config';

@Injectable()
export class AuthenticationService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private sessionStorageService: SessionStorageService
      ) { }

    autenticar(credenciais: Credenciais): Observable<Entregador[]> {

       return this.http.get<Entregador[]>(`${API.URL}/entregador`);
    }


}