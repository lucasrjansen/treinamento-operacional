import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'validation-popup',
    templateUrl: './validation-popup.component.html',
    styleUrls: ['./validation-popup.component.scss']
})
export class ValidationPopupComponent implements OnDestroy {

    @Input() visible: boolean;
    @Input() TargetObject: any;
    @Input() text: string;
    @Input() title: string;
    @Input() showTitle: boolean;
    @Input() leftButton: string = 'SIM';
    @Input() rightButton: string = 'NÃO';
    @Output() response = new EventEmitter();

    ngOnDestroy(): void {
        this.visible = false;
    }

    yesResponse() {
        this.response.emit(this.TargetObject);
        this.ngOnDestroy();
    }

    noResponse() {
        this.response.emit(null);
        this.ngOnDestroy();
    }
}
