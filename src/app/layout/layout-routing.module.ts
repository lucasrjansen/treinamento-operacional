import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
            { path: 'encomendas', loadChildren: () => import('./encomendas/encomendas.module').then(m => m.EncomendasModule), canActivate: [AuthGuard] },
            { path: 'encomendas-adicionar', loadChildren: () => import('./encomendas/encomendas-adicionar/encomendas-adicionar.module').then(m => m.EncomendasAdicionarModule), canActivate: [AuthGuard] },
            { path: 'entregadores', loadChildren: () => import('./entregadores/entregadores.module').then(m => m.EntregadoresModule), canActivate: [AuthGuard] },
            { path: 'entregadores-adicionar', loadChildren: () => import('./entregadores/entregadores-adicionar/entregadores-adicionar.module').then(m => m.EntregadoresAdicionarModule), canActivate: [AuthGuard] },
            { path: 'destinatarios', loadChildren: () => import('./destinatarios/destinatarios.module').then(m => m.DestinatariosModule), canActivate: [AuthGuard] },
            { path: 'destinatarios-adicionar', loadChildren: () => import('./destinatarios/destinatarios-adicionar/destinatarios-adicionar.module').then(m => m.DestinatariosAdicionarModule), canActivate: [AuthGuard] },
            { path: 'problemas', loadChildren: () => import('./problemas/problemas.module').then(m => m.ProblemasModule), canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
