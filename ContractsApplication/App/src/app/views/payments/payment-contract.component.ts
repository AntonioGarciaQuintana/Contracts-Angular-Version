import { Component } from "@angular/core";

@Component({
    templateUrl: './payment-contract.component.html'
})
export class PaymentContractComponent {

    disableEdit = true;
    disableCancel = true;
    disablePamentContract = false;
    disablePamentWater = true;
    constructor() { }
}