import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnVoltarComponent } from './btn-voltar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnVoltarComponent],
    exports: [BtnVoltarComponent]
})
export class BtnVoltarModule {}
