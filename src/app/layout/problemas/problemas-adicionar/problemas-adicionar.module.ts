import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemasAdicionarRoutingModule } from './problemas-adicionar-routing.module';
import { ProblemasAdicionarComponent } from './problemas-adicionar.component';
import { PageHeaderModule } from 'src/app/shared/components/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        ProblemasAdicionarRoutingModule,
        PageHeaderModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
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
