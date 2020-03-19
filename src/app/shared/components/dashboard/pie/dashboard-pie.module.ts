import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardPieComponent } from './dashboard-pie.component';

import { DxPieChartModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DxPieChartModule
    ],
    declarations: [DashboardPieComponent],
    exports: [DashboardPieComponent]
})
export class DashboardPieModule { }
