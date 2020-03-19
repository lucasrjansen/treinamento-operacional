import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

import {
    EntregadorService, EncomendaService, DestinatarioService, ProblemaService
} from '../shared/_services/';
import { ToastService } from 'angular-toastify';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    providers: [
        EntregadorService,
        EncomendaService,
        DestinatarioService,
        ProblemaService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LayoutModule { }
