import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinatariosTimeLineComponent } from './destinatarios-timeline.component';

const routes: Routes = [
    {
        path: '', component: DestinatariosTimeLineComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DestinatariosTimeLineRoutingModule {
}
