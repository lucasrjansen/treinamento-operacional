import { Service } from './Service';
import { Observable } from 'rxjs';
import { API } from '../config';
import { EncomendasEntregador } from '../_models';

export class DashboardService extends Service {

    encomendasPorEntregador(): Observable<EncomendasEntregador[]> {
        return this.http.get<EncomendasEntregador[]>(`${API.URL}/encomendasPorEntregador`);
    }

}