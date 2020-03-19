import { Component, OnInit, Input } from '@angular/core';
import { DashboardOptions } from 'src/app/shared/_models/DashboardOptions';

@Component({
  selector: 'dashboard-line',
  templateUrl: './dashboard-line.component.html',
  styleUrls: ['./dashboard-line.component.scss']
})
export class DashboardLineComponent {

  @Input() title: string;
  @Input() options: DashboardOptions;

  constructor() {  }

}