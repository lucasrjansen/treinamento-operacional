import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionStorageService, ProblemaService } from 'src/app/shared/_services';
import { Problema } from 'src/app/shared/_models';

@Component({
    selector: 'app-problemas-adicionar',
    templateUrl: './problemas-adicionar.component.html',
    styleUrls: ['./problemas-adicionar.component.scss'],
})

export class ProblemasAdicionarComponent implements OnInit, OnDestroy {

    problema: Problema;
    form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private problemaService: ProblemaService
    ) { }

    ngOnInit() {

        this.criarFormulario();
    }

    ngOnDestroy() {

    }

    criarFormulario() {

        this.form = this.formBuilder.group({
            nome: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required])]
        });

    }

    salvar() {
        //this.problema != null ? this.alterar() : this.adicionar();
    }

    adicionar() {

        let retorno: Problema;
        /*this.problema.adicionar(this.montarEntregador()).subscribe(ret => {
            retorno = ret;
        }, err => { },
            () => {
                if (retorno) {

                    alert(`Entregador cadastrado com Sucesso!`)
                    this.router.navigate(['/problemas']);
                }
            });*/
    }

    montarProblema(): Problema {

        return {
            id: 0,//this.problema ? this.problema.id : 0,
            encomenda: null,
            entregador: null,
            status: '',
            descricao: ''
        };
    }
}
