import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { HomeComponent } from './home.component';
import { PageHeaderModule, BtnChartChangeModule } from 'src/app/shared/components';
import { DashboardBarsModule, DashboardPieModule, DashboardLineModule } from 'src/app/shared/components/dashboard/';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PageHeaderModule,
        BtnChartChangeModule,
        DashboardBarsModule,
        DashboardPieModule,
        DashboardLineModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }
