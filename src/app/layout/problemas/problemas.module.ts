import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { ProblemasComponent } from './problemas.component';
import { ProblemasRoutingModule } from './problemas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material/';
import { VisualizarProblemaComponent } from './visualizar-problema/visualizar-problema.component';
import { BtnVisualizarModule } from 'src/app/shared/components/buttons';

@NgModule({
  declarations: [
    ProblemasComponent,
    VisualizarProblemaComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ProblemasRoutingModule,
    PageHeaderModule,
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
  ],
  entryComponents: [VisualizarProblemaComponent]
})
export class ProblemasModule { }
