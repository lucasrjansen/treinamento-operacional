import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardBarsComponent } from './dashboard-bars.component';

import { DxChartModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DxChartModule
    ],
    declarations: [DashboardBarsComponent],
    exports: [DashboardBarsComponent]
})
export class DashboardBarsModule { }
