import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nomeUsuario: string;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService,
  ) { }

  ngOnInit(): void {
    this.nomeUsuario = this.sessionStorageService.getValue('localUser').nome;

  }


  deslogar(){
    this.router.navigate(['/login'])
  }
  
}
