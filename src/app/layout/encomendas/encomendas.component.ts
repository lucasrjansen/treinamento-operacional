import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, EncomendaService } from 'src/app/shared/_services';
import { Router } from '@angular/router';

import { Encomenda } from 'src/app/shared/_models/Encomenda';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisualizarEncomendaComponent } from './visualizar-encomenda/visualizar-encomenda.component';
import { NotifierService } from 'angular-notifier';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.scss']
})
export class EncomendasComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  encomendas: Encomenda[];

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
      this.encomendas = ret;

    }, err => { },
      () => {
        this.dataGrid.dataSource = this.encomendas;
      }
    );
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
          this.dataGrid.instance.refresh();
        }
      })
  }

  adicionarProblema(encomenda: Encomenda) {
    this.sessionStorageService.setValue('cadProblema', encomenda);
    this.router.navigate(['/problemas-adicionar']);
  }

}
