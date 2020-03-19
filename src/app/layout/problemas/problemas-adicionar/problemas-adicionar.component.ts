import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionStorageService, ProblemaService } from 'src/app/shared/_services';
import { Problema, Encomenda } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';

export const status = ['ENTREGUE', 'CANCELADO', 'PENDENTE', 'RETIRADA'];

@Component({
    selector: 'app-problemas-adicionar',
    templateUrl: './problemas-adicionar.component.html',
    styleUrls: ['./problemas-adicionar.component.scss'],
})
export class ProblemasAdicionarComponent implements OnInit, OnDestroy {

    form: FormGroup;
    selStatus: string;
    encomenda: Encomenda;
    listaStatus = status;

    constructor(
        private notifier: NotifierService,
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private problemaService: ProblemaService,
    ) { }

    ngOnInit() {
        this.encomenda = this.sessionStorageService.getValue('cadProblema');
        this.criarFormulario();
    }

    ngOnDestroy() {
        this.sessionStorageService.setValue('cadProblema');
    }

    criarFormulario() {

        if (this.encomenda) {
            this.form = this.formBuilder.group({
                descricao: [null, Validators.compose([Validators.required])]
            });

            this.selStatus = this.encomenda.status;
        }

    }

    adicionar() {

        let retorno: Problema;
        this.problemaService.adicionar(this.montarProblema()).subscribe(ret => {
            retorno = ret;

        }, err => {
            console.log(err);
            this.notifier.notify("error", "Problema não cadastrado, tente novamente.");

        }, () => {

            if (retorno) {
                this.notifier.notify("success", "Problema cadastrado com Sucesso!");
                this.router.navigate(['/encomendas']);
            }
        });
    }

    montarProblema(): Problema {

        return {
            id: 0,//this.problema ? this.problema.id : 0,
            encomenda: this.encomenda,
            entregador: this.encomenda.entregador,
            status: this.selStatus,
            descricao: this.form.value.descricao
        };
    }
}
