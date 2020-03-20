import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, EncomendaService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Encomenda } from 'src/app/shared/_models/Encomenda';
import { configurarPaginador } from 'src/app/shared/utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisualizarEncomendaComponent } from './visualizar-encomenda/visualizar-encomenda.component';
import { NotifierService } from 'angular-notifier';
import { EventDataGrid } from 'src/app/shared/_models/EventDataGrid';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.scss']
})
export class EncomendasComponent implements OnInit {

  colunas: string[] = ['id', 'destinatario', 'entregador', 'cidade', 'estado', 'status', 'acoes'];
  encomendas = new MatTableDataSource<Encomenda>();

  encomendasGrid: Encomenda[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private encomendaService: EncomendaService,
    private notifier: NotifierService,
  ) { }

  ngOnInit(): void {
    this.buscarDestinatarios();
  }

  buscarDestinatarios() {
    this.encomendaService.buscarTodos().subscribe(ret => {
      //this.encomendas.data = ret;
      this.encomendasGrid = ret;
    });
  }

  modalInformacoes(encomenda: Encomenda) {

    const modalRef = this.modalService.open(VisualizarEncomendaComponent);
    modalRef.componentInstance.encomenda = encomenda;
  }

  editar(encomenda: Encomenda) {
    this.sessionStorageService.setValue('editEncomenda', encomenda);
    this.router.navigate(['/encomendas-adicionar']);
  }

  excluir(encomenda: Encomenda) {

    let retorno: Encomenda;
    this.encomendaService.deletar(encomenda.id).subscribe(ret => {
      retorno = ret;

    }, err => {
      console.log(err);
      this.notifier.notify('error', 'Encomenda não excluída, tente novamente!');

    },
      () => {
        if (retorno) {

          this.notifier.notify('success', 'Encomenda excluída com Sucesso!');
          //location.reload();
        }
      })
  }

  adicionarProblema(encomenda: Encomenda) {
    this.sessionStorageService.setValue('cadProblema', encomenda);
    this.router.navigate(['/problemas-adicionar']);
  }

  aplicarFiltro(valor: string) {
    this.encomendas.filter = valor.trim().toLowerCase();
  }

  configurarPaginador() {
    this.paginator = configurarPaginador(this.paginator);

    this.encomendas.paginator = this.paginator;
    this.encomendas.sort = this.sort;
  }

}
