import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventEmitter } from 'events';
import { SessionStorageService } from 'src/app/shared/_services';

@Component({
    selector: 'btn-chart-change',
    templateUrl: './btn-chart-change.component.html',
    styleUrls: ['./btn-chart-change.component.scss']
})
export class BtnChartChangeComponent {

    @Input() buttonID: string;
    @Input() icon: string;

}
