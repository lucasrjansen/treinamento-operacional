import { Service } from './Service';
import { Observable } from 'rxjs';
import { API } from '../config';
import { Encomenda } from '../_models';

export class EncomendaService extends Service {

    buscarTodos(): Observable<Encomenda[]> {
        return this.http.get<Encomenda[]>(`${API.URL}/encomenda`);
    }


    adicionar(encomenda: Encomenda): Observable<Encomenda> {
        return this.http.post<Encomenda>(`${API.URL}/encomenda`, encomenda);
    }

    deletar(id: number): Observable<Encomenda> {
        return this.http.delete<Encomenda>(`${API.URL}/encomenda/${id}`);
    }

    alterar(encomenda: Encomenda): Observable<Encomenda> {
        return this.http.put<Encomenda>(`${API.URL}/encomenda`, encomenda);
    }

}