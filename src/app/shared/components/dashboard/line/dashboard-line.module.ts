import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardLineComponent } from './dashboard-line.component';

import { DxChartModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DxChartModule
    ],
    declarations: [DashboardLineComponent],
    exports: [DashboardLineComponent]
})
export class DashboardLineModule { }
