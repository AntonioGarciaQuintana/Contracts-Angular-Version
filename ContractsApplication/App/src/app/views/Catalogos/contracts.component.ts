import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contract } from "../../model/Contract";
import { commonService } from "../../Services/common-service.service";

@Component({
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

    contractsList: Contract[] = [];


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private commonService: commonService) { }


    ngOnInit(): void {
        this.firstPage();
    }

    firstPage = () => {
        this.currentPage = 0;
        this.getPage(this.currentPage);
    }

    getPage = (page: number) => {
        //this._spinnerService.show();
        this.commonService.getPages(page, this.pageSize, this.sorting, this.filters.search).toPromise()
            .then(
                result => {
                    const ret: any = result;
                    this.contractsList = ret.Data;
                    this.totalElements = ret.TotalElements;
                }
            ).catch(error => {
                console.log(error);
            });
    }

    pageChanged = (page: number) => {
        const currentPage = (page - 1);
        this.getPage(currentPage);
    }

    getAllContracts = () => {
        this.commonService.getAllContracts().toPromise().then(result => {
            this.contractsList = result;
        }).catch(error => {
            console.error(error);
        })
    }

    goToRegister(idContract?: number) {
        if (idContract !== undefined) {
            this.router.navigate(['/catalogo/contractregister', { id: idContract }], { relativeTo: this.route });
        } else {
            this.router.navigate(['/catalogo/contractregister'], { relativeTo: this.route });
        }

    }

}