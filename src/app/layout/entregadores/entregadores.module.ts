import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { EntregadoresComponent } from './entregadores.component';
import { EntregadoresRoutingModule } from './entregadores-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material/';
import { BtnCadastrarModule, BtnEditarModule, BtnExcluirModule, BtnVisualizarModule} from 'src/app/shared/components/buttons/';

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
export class EntregadoresModule { }
