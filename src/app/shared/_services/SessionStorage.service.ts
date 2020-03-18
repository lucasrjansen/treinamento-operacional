import { Injectable } from '@angular/core';
import { Entregador } from '../_models/Entregador';

@Injectable()
export class SessionStorageService {

    getValue(name: string): any {

        const usr = sessionStorage.getItem(name);
        return usr != null ? JSON.parse(usr) : null;
    }

    setValue(name: string, objeto: any = null) {
        
        if (objeto == null) {
            sessionStorage.removeItem(name);
        } else {
            sessionStorage.setItem(name, JSON.stringify(objeto));
        }
    }
}