import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxLoadingModule } from "ngx-loading";
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule } from "ngx-toastr";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";
import { ApplicationPipeModule } from "../pipe.module";
import { CatalogoRoutingModule } from "./catalogo-routing.module";
import { ContractRegisterComponent } from "./contract-register.component";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ContractsComponent } from "./contracts.component";
import { ModalModule } from "ngx-bootstrap/modal";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CatalogoRoutingModule,
        ApplicationPipeModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        ContractsComponent,
        ContractRegisterComponent
    ],
    exports: [

    ],
    providers: [
        commonService,
        NotificationService
    ]
})
export class CatalogoModule { }