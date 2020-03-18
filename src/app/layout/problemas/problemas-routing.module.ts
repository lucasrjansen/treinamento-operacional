import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemasComponent } from './problemas.component';

const routes: Routes = [
    {
        path: '', component: ProblemasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemasRoutingModule {
}
