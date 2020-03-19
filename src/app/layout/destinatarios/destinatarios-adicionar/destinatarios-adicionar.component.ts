import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionStorageService, DestinatarioService } from 'src/app/shared/_services';
import { Destinatario } from 'src/app/shared/_models';

@Component({
    selector: 'app-destinatarios-adicionar',
    templateUrl: './destinatarios-adicionar.component.html',
    styleUrls: ['./destinatarios-adicionar.component.scss'],
})

export class DestinatariosAdicionarComponent implements OnInit, OnDestroy {

    destinatario: Destinatario = null;
    form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private sessionStorageService: SessionStorageService,
        private destinatarioService: DestinatarioService
    ) { }

    ngOnInit() {
        this.destinatario = this.sessionStorageService.getValue('editDestinatario');
        this.criarFormulario();
    }

    ngOnDestroy() {
        this.sessionStorageService.setValue('editDestinatario');
    }

    criarFormulario() {

        if (this.destinatario) {
            this.form = this.formBuilder.group({
                nome: [this.destinatario.nome, Validators.compose([Validators.required])],
                rua: [this.destinatario.rua, Validators.compose([Validators.required])],
                numero: [this.destinatario.numero],
                complemento: [this.destinatario.complemento],
                cidade: [this.destinatario.cidade, Validators.compose([Validators.required])],
                estado: [this.destinatario.estado, Validators.compose([Validators.required])],
                cep: [this.destinatario.cep, Validators.compose([Validators.required])]
            });
        } else {

            this.form = this.formBuilder.group({
                nome: [null, Validators.compose([Validators.required])],
                rua: [null, Validators.compose([Validators.required])],
                numero: [null],
                complemento: [null],
                cidade: [null, Validators.compose([Validators.required])],
                estado: [null, Validators.compose([Validators.required])],
                cep: [null, Validators.compose([Validators.required])]
            });
        }
    }

    adicionar() {

        let retorno: Destinatario;
        this.destinatarioService.adicionar(this.montarDestinatario()).subscribe(ret => {
            retorno = ret;

        }, err => { },
            () => {
                if (retorno) {

                    alert(this.destinatario ? `Destinatário editado com Sucesso!` : `Destinatário cadastrado com Sucesso!`)
                    this.router.navigate(['/destinatarios']);
                }
            });
    }

    montarDestinatario(): Destinatario {

        return {
            id: 0,//this.destinatario ? this.destinatario.id: 0,
            nome: this.form.value.nome,
            rua: this.form.value.rua,
            numero: this.form.value.numero,
            complemento: this.form.value.complemento,
            cidade: this.form.value.cidade,
            estado: this.form.value.estado,
            cep: this.form.value.cep
        };
    }
}
