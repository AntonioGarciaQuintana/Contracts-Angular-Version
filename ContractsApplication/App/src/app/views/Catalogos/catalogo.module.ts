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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ContractsComponent } from "./contracts.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { ContractManageComponent } from "./contract-manage.component";
import { ImportImageComponent } from "./import-image.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ContractResumeComponent } from "./contract-resume.component";
import { ChartsModule } from "ng2-charts";
import { ContractRegisterComponent } from "./contract-register.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CatalogoRoutingModule,
        ApplicationPipeModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        ChartsModule,
        TabsModule.forRoot(),
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        ContractsComponent,
        ContractManageComponent,
        ImportImageComponent,
        ContractResumeComponent,
        ContractRegisterComponent
    ],
    exports: [
        ContractsComponent,
        ContractManageComponent,
        ImportImageComponent,
        ContractResumeComponent,
        ContractRegisterComponent
    ],
    providers: [
        commonService,
        NotificationService
    ]
})
export class CatalogoModule { }