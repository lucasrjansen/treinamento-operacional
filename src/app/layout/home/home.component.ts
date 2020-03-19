import { Component, OnInit } from '@angular/core';
import { DashboardData, DashboardInfo, EncomendasEntregador } from 'src/app/shared/_models/';
import { DashboardService } from 'src/app/shared/_services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    encomendasEntregador: EncomendasEntregador[]
    dadosEncomendasPorEntregador: DashboardData;
    carregar = false;
    
    constructor(
        private dashboardService: DashboardService
    ) {}

    ngOnInit() {
        this.buscarEncomendasPorEntregador();
    }

    async buscarEncomendasPorEntregador() {
        await this.dashboardService.encomendasPorEntregador().toPromise().then(ret => {
            this.encomendasEntregador = ret;
            console.log(ret);
            console.log('teste');
            this.carregar = true;
        })
        this.montarDashboardData();
    }

    montarDashboardData() {
        console.log('inicio montarDashboardData');

        console.log(this.encomendasEntregador);

        this.dadosEncomendasPorEntregador = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataList: this.encomendasEntregador
        }
        console.log('montarDashboardDados');
        console.log(this.dadosEncomendasPorEntregador);
    }

    montarDashboardInfo(): DashboardInfo[] {
        let dashboardInfo = new Array<DashboardInfo>();

        let info: DashboardInfo = {
            valueName: 'qtdEncomendas',
            description: 'Encomendas'
        }

        dashboardInfo.push(info);
        return dashboardInfo;
    }
}

export class GrossProduct {
    state: string;
    year2004: number;
    year2001: number;
}

let grossProductData: GrossProduct[] = [{
    state: "LUCAS",
    year2004: 4,
    year2001: 17
}, {
    state: "JOAO",
    year2004: 8,
    year2001: 10
}, {
    state: "IVENS",
    year2004: 21,
    year2001: 1
}, {
    state: "GABRIEL",
    year2004: 1,
    year2001: 3
}, {
    state: "PLABO",
    year2004: 17,
    year2001: 4
}];