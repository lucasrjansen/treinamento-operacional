import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, EntregadorService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Entregador } from 'src/app/shared/_models';
import { configurarPaginador } from 'src/app/shared/utils';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-entregadores',
  templateUrl: './entregadores.component.html',
  styleUrls: ['./entregadores.component.scss']
})
export class EntregadoresComponent implements OnInit {

  colunas: string[] = ['id', 'foto', 'nome', 'email', 'acoes'];
  entregadores = new MatTableDataSource<Entregador>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private entregadorService: EntregadorService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {

    this.buscarEntregadores();
  }


  buscarEntregadores() {
    this.entregadorService.buscarTodos().subscribe(ret => {
      this.entregadores.data = ret;
    });
  }

  editar(entregador: Entregador) {
    this.sessionStorageService.setValue('editEntregador', entregador)
  }

  excluir(entregador: Entregador) {

    let retorno: Entregador;
    this.entregadorService.deletar(entregador.id).subscribe(ret => {
      retorno = ret;

    }, err => {
      console.log(err);
      this.notifier.notify('error', 'Entregador não excluído, tente novamente.');

    }, () => {
      if (retorno) {

        this.notifier.notify('error', 'Entregador excluído com Sucesso!');
        //location.reload();
      }
    })
  }

  aplicarFiltro(valor: string) {
    this.entregadores.filter = valor.trim().toLowerCase();
  }

  configurarPaginador() {
    this.paginator = configurarPaginador(this.paginator);

    this.entregadores.paginator = this.paginator;
    this.entregadores.sort = this.sort;
  }

}
