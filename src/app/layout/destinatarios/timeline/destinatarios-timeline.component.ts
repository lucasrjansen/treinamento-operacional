import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SessionStorageService, DestinatarioService } from 'src/app/shared/_services';
import { Destinatario, TimelineItem, Encomenda } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-destinatarios-timeline',
    templateUrl: './destinatarios-timeline.component.html',
    styleUrls: ['./destinatarios-timeline.component.scss'],
})

export class DestinatariosTimeLineComponent implements OnInit, OnDestroy {

    destinatario: Destinatario;
    timelineArray: TimelineItem[];
    encomendas: Encomenda[];
    loaded = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private destinatarioService: DestinatarioService,
        private notifier: NotifierService
    ) { }

    ngOnInit() {
        this.destinatario = this.sessionStorageService.getValue('timelineDestinatario');

        this.buscarEncomendas();
        this.montarTimeline();
        this.loaded = true;
    }

    ngOnDestroy() { }

    montarTimeline() {

        let timeline = new Array<TimelineItem>();
        this.encomendas.forEach(encomenda => {

            let item: TimelineItem = {
                date: encomenda.dtPedido,
                title: encomenda.produto
            };

            timeline.push(item);
        })
        this.timelineArray = timeline;
    }

    buscarEncomendas() {

        this.encomendas = [
            {
                id: 2,
                destinatario: {
                    id: 8,
                    nome: "MONIQUE",
                    rua: "tamo ai",
                    numero: 22,
                    complemento: null,
                    cidade: "Apiuna",
                    estado: "Santa Catarina",
                    cep: "89135000"
                },
                entregador: {
                    id: 2,
                    nome: "Lucas Janzen",
                    foto: null,
                    email: "lucas.janzen@gmail.com",
                    senha: "senha"
                },
                produto: "Notebook Dell i5",
                status: "PENDENTE",
                dtPedido: new Date(2020, 3, 20),
                dtRetirada: new Date(2020, 3, 20),
                dtEntrega: new Date(2020, 3, 20)
            },
            {
                id: 2,
                destinatario: {
                    id: 8,
                    nome: "MONIQUE",
                    rua: "tamo ai",
                    numero: 22,
                    complemento: null,
                    cidade: "Apiuna",
                    estado: "Santa Catarina",
                    cep: "89135000"
                },
                entregador: {
                    id: 2,
                    nome: "Lucas Janzen",
                    foto: null,
                    email: "lucas.janzen@gmail.com",
                    senha: "senha"
                },
                produto: "mouse pad",
                status: "PENDENTE",
                dtPedido: new Date(2020, 1, 22),
                dtRetirada: new Date(2020, 3, 20),
                dtEntrega: new Date(2020, 3, 20)
            },
            {
                id: 2,
                destinatario: {
                    id: 8,
                    nome: "MONIQUE",
                    rua: "tamo ai",
                    numero: 22,
                    complemento: null,
                    cidade: "Apiuna",
                    estado: "Santa Catarina",
                    cep: "89135000"
                },
                entregador: {
                    id: 2,
                    nome: "Lucas Janzen",
                    foto: null,
                    email: "lucas.janzen@gmail.com",
                    senha: "senha"
                },
                produto: "teclado e mouse logitec",
                status: "PENDENTE",
                dtPedido: new Date(2020, 1, 20),
                dtRetirada: new Date(2020, 3, 20),
                dtEntrega: new Date(2020, 3, 20)
            }
        ];
    }

}