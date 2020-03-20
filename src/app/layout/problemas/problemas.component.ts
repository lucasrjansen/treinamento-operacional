import { Component, OnInit, ViewChild } from '@angular/core';
import { ProblemaService, EncomendaService } from 'src/app/shared/_services';
import { Problema, Encomenda } from 'src/app/shared/_models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisualizarProblemaComponent } from './visualizar-problema/visualizar-problema.component';
import { NotifierService } from 'angular-notifier';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.scss']
})
export class ProblemasComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  problemas: Problema[];

  constructor(
    private modalService: NgbModal,
    private problemaService: ProblemaService,
    private encomendaService: EncomendaService,
    private notifier: NotifierService,
  ) { }

  ngOnInit(): void {

    this.buscarProblemas();
  }

  buscarProblemas() {
    this.problemaService.buscarTodos().subscribe(ret => {
      this.problemas = ret;
    }, err => { },
      () => {
        this.dataGrid.dataSource = this.problemas;
      }
    );
  }

  visualizar(problema: Problema) {

    const modalRef = this.modalService.open(VisualizarProblemaComponent);
    modalRef.componentInstance.problema = problema.descricao;
  }

  cancelarEncomenda(problema: Problema) {

    let retorno: Encomenda;
    this.encomendaService.alterar(this.montarEncomenda(problema)).subscribe(ret => {
      retorno = ret;

    }, err => {
      console.log(err);
      this.notifier.notify('error', 'Encomenda não cancelada, tente novamente!');

    }, () => {

      if (retorno) {

        this.notifier.notify('success', 'Encomenda Cancelada com Sucesso!');
      }
    });
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

}
