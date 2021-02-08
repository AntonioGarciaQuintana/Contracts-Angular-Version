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
    templateUrl: './contract-register.component.html'
})
export class ContractRegisterComponent implements OnInit {

    contractSelected: Contract;
    contractForm: FormGroup;
    disableButtonSave = false;
    idContract = 0;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _commonService: commonService,
        private _notification: NotificationService,
        private localeService: BsLocaleService) {
        defineLocale('es', esLocale);
        this.localeService.use('es');
    }

    ngOnInit(): void {
        this.contractForm = new FormGroup({
            nameControl: new FormControl('', Validators.required),
            acresControl: new FormControl('', Validators.required),
            amountControl: new FormControl('', Validators.required),
            ubicationControl: new FormControl(''),
            phoneControl: new FormControl(''),
            startDateControl: new FormControl('', Validators.required),
            endControl: new FormControl('', Validators.required),
            descriptionControl: new FormControl('')
        });

        this._route.params.subscribe(params => {
            this.idContract = params['id'] !== undefined ? +params['id'] : 0;
            if (this.idContract !== 0) {
                this.getContract(this.idContract);
            }
        });
    }

    get f() { return this.contractForm.controls; }

    getContractObject() {
        const obj: Contract = new Contract();
        obj.Id = this.idContract;
        obj.Name = this.f['nameControl'].value;
        obj.Acres = this.f['acresControl'].value;
        obj.Amount = this.f['amountControl'].value;
        obj.Location = this.f['ubicationControl'].value;
        obj.Phone = this.f['phoneControl'].value;
        obj.StartDate = this.f['startDateControl'].value;
        obj.EndDate = this.f['endControl'].value;
        obj.Description = this.f['descriptionControl'].value;

        return obj;
    }

    reset = () => {
        this.idContract = 0;
        this.contractForm.reset();
    }

    onSave = () => {
        const contract = this.getContractObject();
        this.disableButtonSave = true;
        this._commonService.onSaveContract(contract).toPromise()
            .then(result => {
                this.back();
                this._notification.success('El contrato se guardó Correctamente');
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al guardar el contrato');
            });
    }

    getContract = (id: number) => {
        this._commonService.getContract(id)
            .subscribe(
                result => {
                    this.setContract(result);
                }
            );
    }

    setContract = (contract: Contract) => {
        this.f['nameControl'].setValue(contract.Name);
        this.f['acresControl'].setValue(contract.Acres);
        this.f['amountControl'].setValue(contract.Amount);
        this.f['ubicationControl'].setValue(contract.Location);
        this.f['phoneControl'].setValue(contract.Phone);
        this.f['startDateControl'].setValue(contract.StartDate);
        this.f['endControl'].setValue(contract.EndDate);
        this.f['descriptionControl'].setValue(contract.Description);
    }

    back = () => {
        this._router.navigate(['/catalogo/contracts'], { relativeTo: this._route });
    }

}
