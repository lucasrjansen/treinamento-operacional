import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, DestinatarioService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { configurarPaginador } from 'src/app/shared/utils';
import { Destinatario } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.scss']
})
export class DestinatariosComponent implements OnInit {

  colunas: string[] = ['id', 'nome', 'endereco', 'acoes'];
  destinatarios = new MatTableDataSource<Destinatario>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private destinatarioService: DestinatarioService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {

    this.buscarDestinatarios();
  }


  buscarDestinatarios() {
    this.destinatarioService.buscarTodos().subscribe(ret => {
      this.destinatarios.data = ret;
    });
  }

  editar(destinatario: Destinatario) {
    this.sessionStorageService.setValue('editDestinatario', destinatario)
  }


  excluir(destinatario: Destinatario) {

    let retorno: Destinatario;
    this.destinatarioService.deletar(destinatario.id).subscribe(ret => {
      retorno = ret;

    }, err => {
      console.log(err);
      this.notifier.notify('error', 'Destinatário não excluído, tente novamente!');

    }, () => {
      if (retorno) {

        this.notifier.notify('success', 'Destinatário excluído com Sucesso!');
        //location.reload();
      }
    });
  }

  aplicarFiltro(valor: string) {
    this.destinatarios.filter = valor.trim().toLowerCase();
  }

  configurarPaginador() {
    this.paginator = configurarPaginador(this.paginator);

    this.destinatarios.paginator = this.paginator;
    this.destinatarios.sort = this.sort;
  }

}
