import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinatariosAdicionarComponent } from './destinatarios-adicionar.component';

const routes: Routes = [
    {
        path: '', component: DestinatariosAdicionarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DestinatariosAdicionarRoutingModule {
}
