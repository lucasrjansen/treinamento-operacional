import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionStorageService, EntregadorService } from 'src/app/shared/_services';
import { Entregador } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-entregadores-adicionar',
    templateUrl: './entregadores-adicionar.component.html',
    styleUrls: ['./entregadores-adicionar.component.scss'],
})

export class EntregadoresAdicionarComponent implements OnInit, OnDestroy {

    entregador: Entregador;
    form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private entregadorService: EntregadorService,
        private notifier: NotifierService
    ) { }

    ngOnInit() {

        this.entregador = this.sessionStorageService.getValue('editEntregador');

        this.criarFormulario();
    }

    ngOnDestroy() {
        this.sessionStorageService.setValue('editEntregador');
    }

    criarFormulario() {

        if (this.entregador) {
            this.form = this.formBuilder.group({
                nome: [this.entregador.nome, Validators.compose([Validators.required])],
                email: [this.entregador.email, Validators.compose([Validators.required])]
            });
        } else {

            this.form = this.formBuilder.group({
                nome: [null, Validators.compose([Validators.required])],
                email: [null, Validators.compose([Validators.required])]
            });
        }
    }

    salvar() {
        this.entregador != null ? this.alterar() : this.adicionar();
    }

    adicionar() {

        let retorno: Entregador;
        this.entregadorService.adicionar(this.montarEntregador()).subscribe(ret => {
            retorno = ret;

        }, err => {
            console.log(err);
            this.notifier.notify('success', 'Entregador não cadastrado, tente novamente!');

        }, () => {
            
            if (retorno) {
                this.notifier.notify('success', 'Entregador cadastrado com Sucesso!');
                this.router.navigate(['/entregadores']);
            }
        });
    }

    alterar() {
        console.log('alterar');

        let retorno: Entregador;
        this.entregadorService.alterar(this.montarEntregador()).subscribe(ret => {
            retorno = ret;
        }, err => {
            console.log(err);
            this.notifier.notify('success', 'Entregador não editado, tente novamente!');

        }, () => {

            if (retorno) {
                this.notifier.notify('success', 'Entregador editado com Sucesso!');
                this.router.navigate(['/entregadores']);
            }
        });
    }

    montarEntregador(): Entregador {

        return {
            id: this.entregador ? this.entregador.id : 0,
            nome: this.form.value.nome,
            foto: null,
            email: this.form.value.email,
            senha: 'senha'
        };
    }
}
