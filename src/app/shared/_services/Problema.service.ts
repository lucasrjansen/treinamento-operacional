import { Service } from './Service';
import { Observable } from 'rxjs';
import { API } from '../config';
import { Problema } from '../_models';

export class ProblemaService extends Service {

    buscarTodos(): Observable<Problema[]> {
        return this.http.get<Problema[]>(`${API.URL}/problema`);
    }

}