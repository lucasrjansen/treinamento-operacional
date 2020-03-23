import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnChartChangeComponent } from './btn-chart-change.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnChartChangeComponent],
    exports: [BtnChartChangeComponent]
})
export class BtnChartChangeModule {}
