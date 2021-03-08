import { Component } from "@angular/core";

@Component({
    templateUrl: './payment-water.component.html'
})
export class PaymentWaterComponent {

    disableEdit = true;
    disableCancel = true;
    disablePamentContract = true;
    disablePamentWater = false;

    constructor() { }
}