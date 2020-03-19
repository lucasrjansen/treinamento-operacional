import { Component, OnInit, Input } from '@angular/core';
import { DashboardOptions } from 'src/app/shared/_models/DashboardOptions';

@Component({
  selector: 'dashboard-pie',
  templateUrl: './dashboard-pie.component.html',
  styleUrls: ['./dashboard-pie.component.scss']
})
export class DashboardPieComponent {

  @Input() title: string;
  @Input() options: DashboardOptions;

  constructor() {  }

}