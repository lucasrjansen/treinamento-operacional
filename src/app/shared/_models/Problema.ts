import { Encomenda } from './Encomenda'
import { Entregador } from './Entregador';

export interface Problema {
    
    id: number,
    encomenda: Encomenda,
    entregador: Entregador,
    status: string,
    descricao: string
}