import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'validation-popup',
    templateUrl: './validation-popup.component.html',
    styleUrls: ['./validation-popup.component.scss']
})
export class ValidationPopupComponent{

    @Input() heading: string;
    title: string;
    visible: boolean;

    constructor() {
        this.visible = false;
    }



    openPopup(){

    }


}
