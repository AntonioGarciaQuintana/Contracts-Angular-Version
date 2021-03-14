import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { defineLocale, esLocale } from "ngx-bootstrap/chronos";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { pathToFileURL } from "url";
import { Contract } from "../../model/Contract";
import { ImageDto } from "../../model/Image";
import { Payment } from "../../model/payment";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";
import { SharedService } from "../../Services/SharedService.service";

declare var $: any;

@Component({
    templateUrl: './payment-contract-register.component.html'
})
export class PaymentContractRegisterComponent implements OnInit {

    dropifyElement: any;
    paymentSelected: Payment;
    paymentForm: FormGroup;
    idContract = 0;
    imageSelected: ImageDto;
    paymentList: Payment[] = [];

    contract:Contract;

    @Input() PaymentType = 0;


    constructor(
        private _commonService: commonService,
        private _notification: NotificationService,
        private _route: ActivatedRoute,
        private _localeService: BsLocaleService,
        private _shareService: SharedService) {
        defineLocale('es', esLocale);
        this._localeService.use('es');

    }

    ngOnInit(): void {

        this.paymentForm = new FormGroup({
            nameControl: new FormControl('', Validators.required),
            methodPayControl: new FormControl('', Validators.required),
            dateControl: new FormControl('', Validators.required),
            amountControl: new FormControl('', Validators.required),
            bankControl: new FormControl(''),
            noCheckControl: new FormControl(''),
            descriptionControl: new FormControl('')
        });

        this._route.params.subscribe(params => {
            this.idContract = params['id'] !== undefined ? +params['id'] : 0;
            this.PaymentType = params['type'] !== undefined ? +params['type'] : 0;
            if(this.idContract) {
                this.getContractById(this.idContract);
            }
        });

        this.clearDropofy();

        this.initDropify();

        this.dropifyElement.on('dropify.afterClear', () => {
            this.imageSelected = undefined;
        });

        this.onGetAllPaymentContrac();
    }

    clearDropofy = () => {
        $('.dropify-clear').trigger('click');
    }

    initDropify = () => {
        this.dropifyElement = $('.dropify').dropify({
            messages: {
                'default': 'Imagen',
                'replace': 'Imagen',
                'remove': 'Eliminar',
                'error': 'Ooops, algo paso mal'
            },
            error: {
                'fileSize': 'El tamaño maximo de la imagen permitido es de ({{ value }}).',
                'imageFormat': 'El tipo de archivo es incorrecto solo se permiten imagenes de tipo {{ value }}.'
            }
        });
    }

    getContractById = (id: number) => {
        this._commonService.getContract(id).toPromise()
        .then(result => {
            this.contract = result;
        });
    }

    handleFileInput = (files: FileList) => {
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file: File = files[0];
                const myReader = new FileReader();
                myReader.onloadend = (e) => {
                    const binaryString = myReader.result as string;
                    this.imageSelected = new ImageDto();
                    this.imageSelected.Base = 'data:' + file.type + ';base64,' + btoa(binaryString);
                    this.imageSelected.Name = file.name;
                };
                myReader.readAsBinaryString(file);
            }
        }
    }

    get f() { return this.paymentForm.controls; }

    getPaymentObject = () => {
        const pay = new Payment();
        pay.Id = this.paymentSelected === undefined ? 0 : this.paymentSelected.Id;
        pay.IdContract = this.idContract;
        pay.Name = this.f['nameControl'].value;
        pay.Method = this.f['methodPayControl'].value;
        pay.Date = this.f['dateControl'].value;
        pay.Amount = this.f['amountControl'].value;
        pay.Bank = this.f['bankControl'].value;
        pay.NoCheck = this.f['noCheckControl'].value;
        pay.Description = this.f['descriptionControl'].value;
        pay.Type = this.PaymentType;

        if (this.imageSelected !== undefined) {
            pay.NameImage = this.imageSelected.Name;
            pay.Base = this.imageSelected.Base;
        } else if (this.paymentSelected !== undefined && this.paymentSelected.Base !== null) {
            pay.NameImage = this.paymentSelected.NameImage;
            pay.Base = this.paymentSelected.Base;
        }

        return pay;
    }

    onResetForm = () => {
        this.paymentForm.reset('');
        this.clearDropofy();
        this.imageSelected = undefined;
        this.paymentSelected = undefined;
    }

    onSave = () => {
        const payment = this.getPaymentObject();
        this._commonService.onSavePayment(payment).toPromise()
            .then(result => {
                this._notification.success('El pago de ha guardado correctamnete');
                this.onGetAllPaymentContrac();
                this.onResetForm();
                this._shareService.amountResumeByContractEvent.emit();
            }).catch(error => {
                this._notification.error('Ha ocurrido un erro al guardar el pago');
            });

    }

    onGetAllPaymentContrac = () => {
        this._commonService.getAllPaymentContract(this.idContract, this.PaymentType).toPromise()
            .then(result => {
                this.paymentList = result;
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al Consultar la lista de pagos');
            });
    }

    onEditPayment(payment: Payment) {
        this.paymentSelected = { ...payment };
        this.f['nameControl'].setValue(payment.Name);
        this.f['methodPayControl'].setValue(payment.Method + '');
        this.f['dateControl'].setValue(payment.Date);
        this.f['amountControl'].setValue(payment.Amount);
        this.f['bankControl'].setValue(payment.Bank);
        this.f['noCheckControl'].setValue(payment.NoCheck);
        this.f['descriptionControl'].setValue(payment.Description);
    }

    onDownload(payment: Payment) {
        const a = document.createElement('a');
        a.href = payment.Base;
        a.download = payment.NameImage;
        a.click();
    }
    removeImage = () => {
        this.paymentSelected.Base = null;
        this.paymentSelected.NameImage = null;
    }

    onDeletePayment = () => {
        this._commonService.OnDeletePayment(this.paymentSelected.Id).toPromise()
        .then(result => {
            this._notification.success('El pago se ha eliminado con éxito');
            this.onGetAllPaymentContrac();
        }).catch(error => {
            this._notification.error('Ha ocurrido un error al eliminar el pago');
        });
    }

}
