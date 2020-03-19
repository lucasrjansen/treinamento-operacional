import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, EntregadorService, ProblemaService, EncomendaService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Entregador, Problema, Encomenda } from 'src/app/shared/_models';
import { configurarPaginador } from 'src/app/shared/utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisualizarProblemaComponent } from './visualizar-problema/visualizar-problema.component';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.scss']
})
export class ProblemasComponent implements OnInit {

  colunas: string[] = ['encomenda', 'problema', 'acoes'];
  problemas = new MatTableDataSource<Problema>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private modalService: NgbModal,
    private problemaService: ProblemaService,
    private encomendaService: EncomendaService
  ) { }

  ngOnInit(): void {

    this.buscarProblemas();
  }


  buscarProblemas() {
    this.problemaService.buscarTodos().subscribe(ret => {
      this.problemas.data = ret;
    });
  }

  visualizar(problema: Problema) {

    const modalRef = this.modalService.open(VisualizarProblemaComponent);
    modalRef.componentInstance.problema = problema.descricao;
  }

  cancelarEncomenda(problema: Problema) {

    let retorno: Encomenda;
    this.encomendaService.alterar(this.montarEncomenda(problema)).subscribe(ret => {
      retorno = ret;

    }, err => { },
      () => {
        if (retorno) {

          alert(`Encomenda Cancelada com Sucesso!`)
          location.reload();
        }
      })
  }

  montarEncomenda(problema: Problema): Encomenda {

    return {
      id: problema.encomenda.id,
      destinatario: problema.encomenda.destinatario,
      entregador: problema.encomenda.entregador,
      produto: problema.encomenda.produto,
      status: 'CANCELADO',
      dtEntrega: new Date(),
      dtRetirada: new Date()
    }
  }

  configurarPaginador() {
    this.paginator = configurarPaginador(this.paginator);

    this.problemas.paginator = this.paginator;
    this.problemas.sort = this.sort;
  }

}
