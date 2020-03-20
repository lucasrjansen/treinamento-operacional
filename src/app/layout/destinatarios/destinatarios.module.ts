import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { DestinatariosComponent } from './destinatarios.component';
import { DestinatariosRoutingModule } from './destinatarios-routing.module';

import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule } from 'src/app/shared/components/buttons';
import { DxTemplateModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    DestinatariosComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    DestinatariosRoutingModule,
    PageHeaderModule,
    BtnCadastrarModule,
    BtnEditarModule,
    BtnExcluirModule,
    BtnVisualizarModule,
    NgbModule,
    DxTemplateModule,
     DxDataGridModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DestinatariosModule { }
