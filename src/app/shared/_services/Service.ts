import { SessionStorageService } from './SessionStorage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service {

    constructor(
        private sessionStorageService: SessionStorageService,
        protected http: HttpClient
    ) { }

}