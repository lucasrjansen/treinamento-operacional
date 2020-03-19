import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { DestinatariosComponent } from './destinatarios.component';
import { DestinatariosRoutingModule } from './destinatarios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material/';
import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule } from 'src/app/shared/components/buttons';

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
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    NgbModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DestinatariosModule { }
