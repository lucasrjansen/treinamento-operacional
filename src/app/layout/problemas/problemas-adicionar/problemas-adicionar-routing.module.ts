import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemasAdicionarComponent } from './problemas-adicionar.component';

const routes: Routes = [
    {
        path: '', component: ProblemasAdicionarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemasAdicionarRoutingModule {
}
