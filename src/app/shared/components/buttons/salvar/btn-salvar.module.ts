import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnSalvarComponent } from './btn-salvar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnSalvarComponent],
    exports: [BtnSalvarComponent]
})
export class BtnSalvarModule {}
