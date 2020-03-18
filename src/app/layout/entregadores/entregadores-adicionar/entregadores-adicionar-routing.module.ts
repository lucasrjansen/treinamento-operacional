import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregadoresAdicionarComponent } from './entregadores-adicionar.component';

const routes: Routes = [
    {
        path: '', component: EntregadoresAdicionarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntregadoresAdicionarRoutingModule {
}
