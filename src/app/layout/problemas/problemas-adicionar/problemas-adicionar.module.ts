import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemasAdicionarRoutingModule } from './problemas-adicionar-routing.module';
import { ProblemasAdicionarComponent } from './problemas-adicionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { BtnSalvarModule, BtnVoltarModule } from 'src/app/shared/components/buttons';

@NgModule({
    imports: [
        CommonModule,
        ProblemasAdicionarRoutingModule,
        PageHeaderModule,
        BtnSalvarModule,
        BtnVoltarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProblemasAdicionarComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ProblemasAdicionarModule { }
