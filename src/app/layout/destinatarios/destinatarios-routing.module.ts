import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinatariosComponent } from './destinatarios.component';

const routes: Routes = [
    {
        path: '', component: DestinatariosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DestinatariosRoutingModule {
}
