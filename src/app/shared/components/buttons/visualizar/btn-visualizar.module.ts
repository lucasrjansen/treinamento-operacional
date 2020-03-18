import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnVisualizarComponent } from './btn-visualizar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnVisualizarComponent],
    exports: [BtnVisualizarComponent]
})
export class BtnVisualizarModule {}
