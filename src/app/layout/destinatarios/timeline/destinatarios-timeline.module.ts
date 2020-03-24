import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinatariosTimeLineRoutingModule } from './destinatarios-timeline.routing.module';
import { DestinatariosTimeLineComponent } from './destinatarios-timeline.component';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Date Picker
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { BtnSalvarModule, BtnVoltarModule } from 'src/app/shared/components/buttons';
import { TimeLineModule } from 'src/app/shared/components';

@NgModule({
    imports: [
        CommonModule,
        DestinatariosTimeLineRoutingModule,
        PageHeaderModule,
        BtnSalvarModule,
        BtnVoltarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        TimeLineModule
    ],
    declarations: [
        DestinatariosTimeLineComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class DestinatariosTimeLineModule { }
