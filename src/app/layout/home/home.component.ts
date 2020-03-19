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
    dadosProblemasPorEntregador: DashboardOptions;

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

    buscarElemento(selector: string): Element {
        return document.querySelector(`#${selector}`);
    }

    trocarGrafico(iconId: string) {
        
        let icon = this.buscarElemento(iconId);
        icon.textContent = icon.textContent.trim() == 'pie_chart' ? 'bar_chart' : 'pie_chart';
    }

    validarGrafico(iconeGrafico: string, iconId: string): Boolean {
        
        let icon = this.buscarElemento(iconId);
       
        if(iconeGrafico.trim() != icon.textContent.trim()){
            return true
        }
        return false
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

        this.dadosProblemasPorEntregador = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: problemasPorEntregador
        }

        console.log('montarDashboardDados');
        console.log(this.dadosEncomendasPorEntregador);
    }

    montarDashboardInfo(): DashboardInfo[] {
        let dashboardInfo = new Array<DashboardInfo>();

        let info: DashboardInfo = {
            valueName: 'quantidade',
            description: 'Encomendas'
        }

        dashboardInfo.push(info);
        return dashboardInfo;
    }
}

export const problemasPorEntregador = [
    {
        nome: "Lucas Janzen",
        quantidade: 7
    },
    {
        nome: "Gabriel Raimondi",
        quantidade: 0
    },
    {
        nome: "Ivens Muller",
        quantidade: 2
    },
    {
        nome: "Plabo Depine",
        quantidade: 4
    }
]


export const encomendasPorMes = [
    {
        nome: 'Janeiro',
        quantidade: 17
    },
    {
        nome: 'Fevereiro',
        quantidade: 12
    },
    {
        nome: 'Março',
        quantidade: 4
    },
    {
        nome: 'Abril',
        quantidade: 3
    },
    {
        nome: 'Maio',
        quantidade: 4
    },
    {
        nome: 'Junho',
        quantidade: 6
    },
    {
        nome: 'Julho',
        quantidade: 15
    },
    {
        nome: 'Agosto',
        quantidade: 9
    },
    {
        nome: 'Setembro',
        quantidade: 5
    },
    {
        nome: 'Outubro',
        quantidade: 18
    },
    {
        nome: 'Novembro',
        quantidade: 20
    },
    {
        nome: 'Dezembro',
        quantidade: 5
    },

]