import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private toast: ToastService
    ) { }

    ngOnInit() {
        console.log('teste');
        
        this.toast.info('teste')

    }
}
