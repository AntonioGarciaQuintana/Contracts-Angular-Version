import { Component, Input, OnInit } from "@angular/core";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";
import { SharedService } from "../../Services/SharedService.service";

@Component({
    selector: 'app-amount-resume',
    templateUrl: './amount-resume-by-contract.component.html'
})
export class AmountResumeByContractComponent implements OnInit {

    @Input() idContract = 0;
    @Input() PaymentType = 0;
    TotalPayment = 0;
    TotalRestremaining = 0;
    constructor(private _commonService: commonService,
        private _notification: NotificationService,
        private _shareService: SharedService) {
            this._shareService.amountResumeByContractEvent.subscribe(
                (data: any) => {
                  this.getResume();
                });

    }

    ngOnInit(): void {
        if (this.idContract > 0) {
            this.getResume();
        }

    }

    getResume = () => {
        this._commonService.getAmountResumeByContract(this.idContract, this.PaymentType).toPromise()
        .then(result => {
            this.TotalPayment = result.TotalPayment;
            this.TotalRestremaining = result.TotalRestremaining;
        }).catch(error => {
            this._notification.error('Ha ocurrido un error al consultar el resumen del contrato');
        });
    }
}
