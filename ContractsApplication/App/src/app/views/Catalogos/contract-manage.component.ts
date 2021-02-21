import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Contract } from "../../model/Contract";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
    templateUrl: './contract-manage.component.html'
})
export class ContractManageComponent implements OnInit {

    idContract = 0;

    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.idContract = params['id'] !== undefined ? +params['id'] : 0;
        });
    }

}
