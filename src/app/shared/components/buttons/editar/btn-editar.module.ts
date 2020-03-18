import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnEditarComponent } from './btn-editar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnEditarComponent],
    exports: [BtnEditarComponent]
})
export class BtnEditarModule {}
