import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinatariosAdicionarRoutingModule } from './destinatarios-adicionar-routing.module';
import { DestinatariosAdicionarComponent } from './destinatarios-adicionar.component';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { BtnSalvarModule, BtnVoltarModule } from 'src/app/shared/components/buttons';

@NgModule({
    imports: [
        CommonModule,
        DestinatariosAdicionarRoutingModule,
        PageHeaderModule,
        BtnSalvarModule,
        BtnVoltarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DestinatariosAdicionarComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class DestinatariosAdicionarModule { }
