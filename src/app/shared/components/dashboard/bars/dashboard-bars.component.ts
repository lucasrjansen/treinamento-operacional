import { Component, OnInit, Input } from '@angular/core';
import {  DashboardOptions } from 'src/app/shared/_models/DashboardOptions';

@Component({
  selector: 'dashboard-bars',
  templateUrl: './dashboard-bars.component.html',
  styleUrls: ['./dashboard-bars.component.scss']
})
export class DashboardBarsComponent {

  @Input() title: string;
  @Input() options: DashboardOptions;

  constructor() { }

}