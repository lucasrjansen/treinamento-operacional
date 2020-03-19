import { Component, OnInit } from '@angular/core';
import { DashboardInfo, EncomendasEntregador, DashboardOptions } from 'src/app/shared/_models/';
import { DashboardService } from 'src/app/shared/_services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    encomendasEntregador: EncomendasEntregador[];
    dadosEncomendasPorMes: DashboardOptions;
    dadosEncomendasPorEntregador: DashboardOptions;
    carregar = false;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.buscarEncomendasPorEntregador();
    }

    async buscarEncomendasPorEntregador() {
        await this.dashboardService.encomendasPorEntregador().toPromise().then(ret => {
            this.encomendasEntregador = ret;
            this.carregar = true;

        })
        this.montarDashboardData();
    }

    montarDashboardData() {

        this.dadosEncomendasPorEntregador = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: this.encomendasEntregador
        }

        this.dadosEncomendasPorMes = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: encomendasPorMes
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


export const encomendasPorMes = [
    {
        nome: 'Janeiro',
        qtdEncomendas: 17
    },
    {
        nome: 'Fevereiro',
        qtdEncomendas: 12
    },
    {
        nome: 'Março',
        qtdEncomendas: 4
    },
    {
        nome: 'Abril',
        qtdEncomendas: 3
    },
    {
        nome: 'Maio',
        qtdEncomendas: 4
    },
    {
        nome: 'Junho',
        qtdEncomendas: 6
    },
    {
        nome: 'Julho',
        qtdEncomendas: 15
    },
    {
        nome: 'Agosto',
        qtdEncomendas: 9
    },
    {
        nome: 'Setembro',
        qtdEncomendas: 5
    },
    {
        nome: 'Outubro',
        qtdEncomendas: 18
    },
    {
        nome: 'Novembro',
        qtdEncomendas: 20
    },
    {
        nome: 'Dezembro',
        qtdEncomendas: 5
    },
    
]