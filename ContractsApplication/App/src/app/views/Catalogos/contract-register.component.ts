import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { createImportSpecifier } from "typescript";
import { Contract } from "../../model/Contract";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";

@Component({
    templateUrl: './contract-register.component.html'
})
export class ContractRegisterComponent implements OnInit {

    contractSelected: Contract;
    contractForm: FormGroup;
    disableButtonSave = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _commonService: commonService,
        private _notification: NotificationService) { }

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
    }

    get f() { return this.contractForm.controls; }

    getContractObject() {
        const obj: Contract = new Contract();
        obj.Id = this.contractSelected !== undefined ? this.contractSelected.Id : 0;
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
        this.contractSelected = undefined;
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

    back = () => {
        this._router.navigate(['/catalogo/contracts'], { relativeTo: this._route });
    }

}
