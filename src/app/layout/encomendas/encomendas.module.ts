import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { EncomendasComponent } from './encomendas.component';
import { EncomendasRoutingModule } from './encomendas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material/';
import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule} from 'src/app/shared/components/buttons';
import { VisualizarEncomendaComponent } from './visualizar-encomenda/visualizar-encomenda.component';

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
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    VisualizarEncomendaComponent
  ]
})
export class EncomendasModule { }
