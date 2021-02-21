import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ngxLoadingAnimationTypes } from "ngx-loading";
import { Contract } from "../../model/Contract";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";

@Component({
    selector: 'app-contract-list',
    templateUrl: './contracts.component.html'
})
export class ContractsComponent implements OnInit {

    // pagination properties
    currentPage = 0;
    pageSize = 10;
    sorting = 'id,desc';
    totalElements = 0;

    // filters
    filters = {
        search: ''
    };

    loading = false;
    PrimaryRed = '#dd0031';
    SecondaryBlue = '#006ddd';
    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

    contractsList: Contract[] = [];
    idContract = 0;
    contractName = '';

    // disable butons functionality
    @Input() disableEdit = false;
    @Input() disableCancel = false;
    @Input() disablePamentContract = true;
    @Input() disablePamentWater = true;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _commonService: commonService,
        private _notification: NotificationService) { }


    ngOnInit(): void {
        this.firstPage();
    }

    firstPage = () => {
        this.currentPage = 0;
        this.getPage(this.currentPage);
    }

    getPage = (page: number) => {
        this.loading = true;
        this._commonService.getPages(page, this.pageSize, this.sorting, this.filters.search).toPromise()
            .then(
                result => {
                    this.loading = false;
                    const ret: any = result;
                    this.contractsList = ret.Data;
                    this.totalElements = ret.TotalElements;
                }
            ).catch(error => {
                this.loading = false;
                console.log(error);
            });
    }

    pageChanged = (page: number) => {
        const currentPage = (page - 1);
        this.getPage(currentPage);
    }

    getAllContracts = () => {
        this._commonService.getAllContracts().toPromise().then(result => {
            this.contractsList = result;
        }).catch(error => {
            console.error(error);
        })
    }

    goToRegister(idContract?: number) {
        if (idContract !== undefined) {
            this._router.navigate(['/catalogo/contractregister', { id: idContract }], { relativeTo: this._route });
        } else {
            this._router.navigate(['/catalogo/contractregister'], { relativeTo: this._route });
        }

    }

    onCleanFilter = () => {
        this.filters = {
            search: ''
        };
        this.firstPage();
    }

    onCancel = () => {
        this._commonService.cancelContract(this.idContract).toPromise()
            .then(result => {
                this.firstPage();
                this._notification.success('La contracto se ha cancelado correctamente');
            }).catch(error => {
                console.error(error);
                this._notification.error('Ha ocurrido un error al cancelar el contrato');
            });
    }

}