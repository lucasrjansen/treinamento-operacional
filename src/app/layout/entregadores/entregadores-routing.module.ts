import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregadoresComponent } from './entregadores.component';

const routes: Routes = [
    {
        path: '', component: EntregadoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntregadoresRoutingModule {
}
