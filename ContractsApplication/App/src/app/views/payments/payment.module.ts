import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxLoadingModule } from "ngx-loading";
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule } from "ngx-toastr";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";
import { SharedService } from "../../Services/SharedService.service";
import { CatalogoModule } from "../Catalogos/catalogo.module";
import { ContractsComponent } from "../Catalogos/contracts.component";
import { ApplicationPipeModule } from "../pipe.module";
import { AmountResumeByContractComponent } from "./amount-resume-by-contract.component";
import { PaymentContractRegisterComponent } from "./payment-contract-register.component";
import { PaymentContractComponent } from "./payment-contract.component";
import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentWaterComponent } from "./payment-water.component";

@NgModule({
    imports:[
        CommonModule,
        PaymentRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        ApplicationPipeModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        PaymentContractComponent,
        PaymentWaterComponent,
        ContractsComponent,
        PaymentContractRegisterComponent,
        AmountResumeByContractComponent
    ],
    providers: [
        commonService,
        NotificationService,
        SharedService
    ]
})
export class PaymentModule {}