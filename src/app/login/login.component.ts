import { Component, OnInit } from '@angular/core';
import { Credenciais, Entregador } from '../shared/_models';
import { AuthenticationService, SessionStorageService } from '../shared/_services/';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credenciais: Credenciais;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private authenticador: AuthenticationService,
    private sessionStorage: SessionStorageService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {

    this.criarFormulario();
  }

  criarFormulario() {
    this.loginForm = this.formBuild.group({
      email: [''],
      senha: ['']
    })
  }


  validarCampos() {

    this.validarCredenciais();
  }

  validarCredenciais() {

    let logou = false;
    let retorno: Entregador[];
    this.authenticador.autenticar(this.credenciais).subscribe(ret => {
      retorno = ret;

    }, err => {
      console.log(err);
      this.notifier.notify("error", "Usuário Inválido");

    },
      () => {
        console.log(retorno);

        retorno.forEach(ret => {

          if (ret.email == this.loginForm.value.email && ret.senha == this.loginForm.value.senha) {

            this.router.navigate(['/home']);
            this.sessionStorage.setValue('localUser', ret);
            logou = true;
          }
        })
        
        if (!logou) {
          this.notifier.notify("error", "Usuário Inválido");
        }
      }
    );
  }
}
