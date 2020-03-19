import { Service } from './Service';
import { Observable } from 'rxjs';
import { API } from '../config';
import { Destinatario } from '../_models';

export class DestinatarioService extends Service {

    buscarTodos(): Observable<Destinatario[]> {
        return this.http.get<Destinatario[]>(`${API.URL}/destinatario`);
    }

    adicionar(destinatario: Destinatario): Observable<Destinatario> {
        return this.http.post<Destinatario>(`${API.URL}/destinatario`, destinatario);
    }

    deletar(id: number): Observable<Destinatario> {
        return this.http.delete<Destinatario>(`${API.URL}/destinatario/${id}`);
    }

}