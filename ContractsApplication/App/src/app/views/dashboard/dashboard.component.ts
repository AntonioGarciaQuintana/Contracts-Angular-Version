import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { commonService } from '../../Services/common-service.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  totalContract = 0;
  totalActiveContract = 0;
  totalPaymentWater = 0;
  totalPaymentContract = 0;

  totalCostContrat = 0;
  totalCostWater = 0;
  customerDetail: any[] = [];
  constructor(private _commonService: commonService) {
  }

  ngOnInit(): void {
    this.getInforDashboard();
  }

  getInforDashboard = () => {
    this._commonService.onGetDashboardInfo().toPromise()
      .then(result => {
        this.totalContract = result.TotalContract;
        this.totalActiveContract = result.TotalActiveContract;
        this.totalPaymentContract = result.TotalPaymentContract;
        this.totalPaymentWater = result.TotalPaymentWaterContract;
        this.totalCostContrat = result.TotalPaymentConstractCost;
        this.totalCostWater = result.TotalPaymentWaterCost;
        this.customerDetail = result.ContractList;
      });
  }
}
