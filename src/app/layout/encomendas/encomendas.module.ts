import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { EncomendasComponent } from './encomendas.component';
import { EncomendasRoutingModule } from './encomendas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule, BtnReportProblemModule} from 'src/app/shared/components/buttons';
import { VisualizarEncomendaComponent } from './visualizar-encomenda/visualizar-encomenda.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    EncomendasComponent,
    VisualizarEncomendaComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    EncomendasRoutingModule,
    PageHeaderModule,
    BtnCadastrarModule,
    BtnEditarModule,
    BtnExcluirModule,
    BtnVisualizarModule,
    BtnReportProblemModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    VisualizarEncomendaComponent
  ]
})
export class EncomendasModule { }
