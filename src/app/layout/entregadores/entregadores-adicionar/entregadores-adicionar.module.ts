import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregadoresAdicionarRoutingModule } from './entregadores-adicionar-routing.module';
import { EntregadoresAdicionarComponent } from './entregadores-adicionar.component';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { BtnSalvarModule, BtnVoltarModule } from 'src/app/shared/components/buttons';
import { AngularToastifyModule } from 'angular-toastify';

@NgModule({
    imports: [
        CommonModule,
        EntregadoresAdicionarRoutingModule,
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
        EntregadoresAdicionarComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class EntregadoresAdicionarModule { }
