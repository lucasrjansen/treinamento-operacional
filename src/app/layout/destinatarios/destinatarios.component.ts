import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionStorageService, DestinatarioService } from 'src/app/shared/_services';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/shared/_models';
import { NotifierService } from 'angular-notifier';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.scss']
})
export class DestinatariosComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  destinatarios: Destinatario[];

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
      this.destinatarios = ret;

    }, err => { },
      () => {
        this.dataGrid.dataSource = this.destinatarios;
      }
    );
  }

  montaEndereco(endereco): string{    
    return `Rua ${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`;
  }

  editar(destinatario: Destinatario) {
    this.sessionStorageService.setValue('editDestinatario', destinatario);
    this.router.navigate(['/destinatarios-adicionar']);
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
        this.dataGrid.instance.refresh();
      }
    });
  }

}
