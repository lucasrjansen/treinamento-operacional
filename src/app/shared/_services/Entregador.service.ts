import { Service } from './Service';
import { Observable } from 'rxjs';
import { API } from '../config';
import { Entregador } from '../_models';

export class EntregadorService extends Service {

    buscarTodos(): Observable<Entregador[]> {
        return this.http.get<Entregador[]>(`${API.URL}/entregador`);
    }

    adicionar(entregador: Entregador): Observable<Entregador>{
        return this.http.post<Entregador>(`${API.URL}/entregador`, entregador);
    }

    alterar(entregador: Entregador): Observable<Entregador>{
        return this.http.put<Entregador>(`${API.URL}/entregador`, entregador);
    }

    deletar(id: number): Observable<Entregador>{
        return this.http.delete<Entregador>(`${API.URL}/entregador/${id}`);
    }
}