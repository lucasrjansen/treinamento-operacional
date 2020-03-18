import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncomendasAdicionarRoutingModule } from './encomendas-adicionar-routing.module';
import { EncomendasAdicionarComponent } from './encomendas-adicionar.component';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BtnSalvarModule, BtnVoltarModule } from 'src/app/shared/components/buttons/';

@NgModule({
    imports: [
        CommonModule,
        EncomendasAdicionarRoutingModule,
        PageHeaderModule,
        BtnSalvarModule,
        BtnVoltarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    declarations: [
        EncomendasAdicionarComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class EncomendasAdicionarModule { }
