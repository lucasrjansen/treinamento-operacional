import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, EntregadorService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { Entregador } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-entregadores',
  templateUrl: './entregadores.component.html',
  styleUrls: ['./entregadores.component.scss']
})
export class EntregadoresComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  entregadores: Entregador[];

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
      this.entregadores = ret;

    }, err => { },
      () => {
        this.dataGrid.dataSource = this.entregadores;
      }
    );
  }

  editar(entregador: Entregador) {
    this.sessionStorageService.setValue('editEntregador', entregador);
    this.router.navigate(['/entregadores-adicionar']);
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

        this.notifier.notify('success', 'Entregador excluído com Sucesso!');
        this.dataGrid.instance.refresh();
      }
    })
  }
}
