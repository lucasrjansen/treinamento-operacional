import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnReportProblemComponent } from './btn-report-problem.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnReportProblemComponent],
    exports: [BtnReportProblemComponent]
})
export class BtnReportProblemModule {}
