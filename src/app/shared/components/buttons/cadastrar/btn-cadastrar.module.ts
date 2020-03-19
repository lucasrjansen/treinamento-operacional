import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BtnCadastrarComponent } from './btn-cadastrar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BtnCadastrarComponent],
    exports: [BtnCadastrarComponent]
})
export class BtnCadastrarModule {}
