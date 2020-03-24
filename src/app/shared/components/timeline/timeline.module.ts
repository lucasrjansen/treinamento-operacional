import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeLineComponent } from './timeline.component';

import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DxPopupModule,
        DxButtonModule,
        DxTemplateModule
    ],
    declarations: [TimeLineComponent],
    exports: [TimeLineComponent]
})
export class TimeLineModule { }
