import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxPaginationModule } from "ngx-pagination";
import { commonService } from "../../Services/common-service.service";
import { ApplicationPipeModule } from "../pipe.module";
import { CatalogoRoutingModule } from "./catalogo-routing.module";

import { ContractsComponent } from "./contracts.component";


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        CatalogoRoutingModule,
        ApplicationPipeModule,
        NgxPaginationModule,
        TabsModule.forRoot(),
    ],
    declarations: [
        ContractsComponent
    ],
    exports: [

    ],
    providers:[
        commonService
    ]
})
export class CatalogoModule {}