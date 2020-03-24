import { Entregador } from './Entregador';
import { Destinatario } from './Destinatario';

export interface Encomenda {

    id: number,
    destinatario: Destinatario,
    entregador: Entregador,
    produto: string,
    status: string
    dtPedido: Date;
    dtEntrega: Date;
    dtRetirada: Date;
}