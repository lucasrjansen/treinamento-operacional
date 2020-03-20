import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValidationPopupComponent } from './validation-popup.component';

import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DxPopupModule,
        DxButtonModule,
        DxTemplateModule
    ],
    declarations: [ValidationPopupComponent],
    exports: [ValidationPopupComponent]
})
export class ValidationPopupModule { }
