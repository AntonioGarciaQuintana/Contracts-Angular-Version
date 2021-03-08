import { Component, Input, OnInit } from "@angular/core";
import { commonService } from "../../Services/common-service.service";

@Component({
    selector: 'app-resume-contract',
    templateUrl: './contract-resume.component.html'
})
export class ContractResumeComponent implements OnInit {

    @Input() idContract = 0;
    // Pie
    pieChartLabels: string[] = ['Pagos Al contrato', 'Pagos de Agua',];
    pieChartData: number[] = [];
    pieChartType = 'pie';
    chartPieReady = false;

    barChartData: any[] = [];
    barChartLabels: string[] = [];
    barChartType = 'bar';
    barChartLegend = true;
    chartBarReady = false;

    // barChart
    barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        minBarLength: 2
    };

    constructor(private _commonService: commonService) {

    }
    ngOnInit(): void {
        this.getResumeContract();
    }

    getResumeContract = () => {
        this._commonService.onGetResumeContract(this.idContract).toPromise()
            .then(result => {
                // pie
                this.pieChartData.push(result.TotalPaymentContract);
                this.pieChartData.push(result.TotalWaterPayment);
                this.chartPieReady = true;

                // bar
                this.barChartLabels = result.BarListYear;
                this.barChartData = result.DataBarChart;
                this.chartBarReady = true;
            });

    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}