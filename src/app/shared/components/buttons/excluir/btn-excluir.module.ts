import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnExcluirComponent } from './btn-excluir.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnExcluirComponent],
    exports: [BtnExcluirComponent]
})
export class BtnExcluirModule {}
