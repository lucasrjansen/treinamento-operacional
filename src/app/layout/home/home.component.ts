import { Component, OnInit } from '@angular/core';
import { DashboardInfo, EncomendasEntregador, DashboardOptions } from 'src/app/shared/_models/';
import { DashboardService, SessionStorageService } from 'src/app/shared/_services';

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
    dadosEncomendasPorEstado: DashboardOptions;
    dadosEncomendasPorCidade: DashboardOptions;
    dadosEncomendasPorCliente: DashboardOptions;

    carregar = false;

    constructor(
        private sessionService: SessionStorageService,
        private dashboardService: DashboardService
        ) { }

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

    getIcone(buttonId: string): string{

        return this.sessionService.getValue(`BtnChartIcon-${buttonId}`) || 'pie_chart';
    }

    trocarGrafico(buttonId: string) {

        let newIcon = this.getIcone(buttonId) == 'pie_chart'? 'bar_chart' : 'pie_chart';      
        this.sessionService.setValue(`BtnChartIcon-${buttonId}`,newIcon)
    }

    validarGrafico(iconeGrafico: string, buttonId: string): Boolean {

        return this.getIcone(buttonId) != iconeGrafico ? true : false;
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

        this.dadosEncomendasPorEstado = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: encomendasPorEstado
        }

        this.dadosEncomendasPorCidade = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: encomendasPorCidade
        }
        this.dadosEncomendasPorCliente = {
            infos: this.montarDashboardInfo(),
            valueId: 'nome',
            dataSource: encomendasPorCliente
        }
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

export const encomendasPorCliente = [
    {
        nome: "Joao silva",
        quantidade: 2
    },
    {
        nome: "Nelson Janzen",
        quantidade: 4
    },
    {
        nome: "Rafael Santos",
        quantidade: 1
    },
    {
        nome: "Gabriel Mondini",
        quantidade: 3
    }
]
export const encomendasPorCidade = [
    {
        nome: "Apiúna",
        quantidade: 6
    },
    {
        nome: "Ascurra",
        quantidade: 5
    },
    {
        nome: "Blumenau",
        quantidade: 36
    },
    {
        nome: "Timbó",
        quantidade: 34
    }
]

export const encomendasPorEstado = [
    {
        nome: "Santa Catarina",
        quantidade: 22
    },
    {
        nome: "Rio Grande do Sul",
        quantidade: 31
    },
    {
        nome: "Paraná",
        quantidade: 36
    }
]

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