import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncomendasAdicionarComponent } from './encomendas-adicionar.component';

const routes: Routes = [
    {
        path: '', component: EncomendasAdicionarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EncomendasAdicionarRoutingModule {
}
