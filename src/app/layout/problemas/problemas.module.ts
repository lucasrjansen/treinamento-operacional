import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { ProblemasComponent } from './problemas.component';
import { ProblemasRoutingModule } from './problemas-routing.module';

import { VisualizarProblemaComponent } from './visualizar-problema/visualizar-problema.component';
import { BtnVisualizarModule } from 'src/app/shared/components/buttons';
import { DxTemplateModule, DxDataGridModule } from 'devextreme-angular';
import { ValidationPopupModule } from 'src/app/shared/components';

@NgModule({
  declarations: [
    ProblemasComponent,
    VisualizarProblemaComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    ProblemasRoutingModule,
    PageHeaderModule,
    BtnVisualizarModule,
    DxDataGridModule,
    DxTemplateModule,
    ValidationPopupModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [VisualizarProblemaComponent]
})
export class ProblemasModule { }
