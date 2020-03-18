import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncomendasComponent } from './encomendas.component';

const routes: Routes = [
    {
        path: '', component: EncomendasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EncomendasRoutingModule {
}
