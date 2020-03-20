import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { EntregadoresComponent } from './entregadores.component';
import { EntregadoresRoutingModule } from './entregadores-routing.module';

import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule} from 'src/app/shared/components/buttons/';
import { DxTemplateModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    EntregadoresComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    EntregadoresRoutingModule,
    PageHeaderModule,
    BtnCadastrarModule,
    BtnEditarModule,
    BtnExcluirModule,
    BtnVisualizarModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EntregadoresModule { }
