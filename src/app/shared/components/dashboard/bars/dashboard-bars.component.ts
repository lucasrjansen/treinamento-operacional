import { Component, OnInit, Input } from '@angular/core';
import {  DashboardData } from 'src/app/shared/_models/DashboardData';

@Component({
  selector: 'dashboard-bars',
  templateUrl: './dashboard-bars.component.html',
  styleUrls: ['./dashboard-bars.component.scss']
})
export class DashboardBarsComponent implements OnInit {

  @Input() tittle: string;
  @Input() dashboardData: DashboardData;

  constructor() { }

  ngOnInit(): void {
    console.log('dashboard');
    console.log(this.dashboardData);
  }

}