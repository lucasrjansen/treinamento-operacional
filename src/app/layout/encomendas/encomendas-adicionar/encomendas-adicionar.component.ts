import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { SessionStorageService, DestinatarioService, EncomendaService, EntregadorService } from 'src/app/shared/_services';
import { Encomenda, Destinatario, Entregador } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-encomendas-adicionar',
    templateUrl: './encomendas-adicionar.component.html',
    styleUrls: ['./encomendas-adicionar.component.scss'],
})

export class EncomendasAdicionarComponent implements OnInit, OnDestroy {

    form: FormGroup;
    encomenda: Encomenda;

    listaDestinatarios: Destinatario[];
    selDestinatario = new FormControl();

    listaEntregadores: Entregador[];
    selEntregador = new FormControl();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private encomendaService: EncomendaService,
        private destinatarioService: DestinatarioService,
        private entregadorService: EntregadorService,
        private notifier: NotifierService
    ) { }

    ngOnInit() {

        this.encomenda = this.sessionStorageService.getValue('editEncomenda');
        this.buscarDestinatarios();
        this.buscarEntregadores();
        this.criarFormulario();
    }

    ngOnDestroy() {
        this.sessionStorageService.setValue('editEncomenda');
    }

    criarFormulario() {

        if (this.encomenda) {
            this.form = this.formBuilder.group({
                produto: [this.encomenda.produto, Validators.compose([Validators.required])],
            });

        } else {

            this.form = this.formBuilder.group({
                produto: [null, Validators.compose([Validators.required])],
            });
        }

        this.selDestinatario = new FormControl(this.encomenda != null ? this.encomenda.destinatario.id : 0);
        this.selEntregador = new FormControl(this.encomenda != null ? this.encomenda.entregador.id : 0);
    }

    buscarDestinatarios() {
        this.destinatarioService.buscarTodos().subscribe(ret => {
            this.listaDestinatarios = ret;
        });
    }

    buscarEntregadores() {
        this.entregadorService.buscarTodos().subscribe(ret => {
            this.listaEntregadores = ret;
        });
    }

    adicionar() {

        let retorno: Encomenda;
        this.encomendaService.adicionar(this.montarEncomenda()).subscribe(ret => {
            retorno = ret;

        }, err => {
            console.log(err);
            this.notifier.notify('error',
                this.encomenda ? `Encomenda não alterada, tente novamente.` : `Encomenda não cadastrada, tente novamente.`);

        }, () => {
            if (retorno) {

                this.notifier.notify('success',
                    this.encomenda ? `Encomenda editado com Sucesso!` : `Encomenda cadastrado com Sucesso!`);
                this.router.navigate(['/encomendas']);
            }
        });
    }

    montarEncomenda(): Encomenda {

        return {
            id: 0, //this.destinatario ? this.destinatario.id : 0,
            destinatario: this.montarDestinatario(),
            entregador: this.montarEntregador(),
            produto: this.form.value.produto,
            status: 'PENDENTE',
            dtRetirada: new Date(),
            dtEntrega: new Date()
        };
    }

    montarDestinatario(): Destinatario {

        return this.listaDestinatarios.find(destinatario => destinatario.id == this.selDestinatario.value)
    }

    montarEntregador(): Entregador {

        return this.listaEntregadores.find(entregador => entregador.id == this.selEntregador.value);
    }
}
