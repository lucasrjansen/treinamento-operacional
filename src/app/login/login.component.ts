import { Component, OnInit } from '@angular/core';
import { Credenciais, Entregador } from '../shared/_models';
import { AuthenticationService, SessionStorageService } from '../shared/_services/';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private sessionStorage: SessionStorageService
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

    let retorno: Entregador[];
    this.authenticador.autenticar(this.credenciais).subscribe(ret => {
      retorno = ret;
      
    }, err => { },
      () => {
        console.log(retorno);
        
        retorno.forEach(ret => {
          console.log(ret);
          console.log(this.loginForm.value.email);
          console.log(ret.email);
          
          if (ret.email == this.loginForm.value.email && ret.senha == this.loginForm.value.senha) {
            
            this.router.navigate(['/home']);
            this.sessionStorage.setValue('localUser',ret);
          }
        })
      });
  }

}
