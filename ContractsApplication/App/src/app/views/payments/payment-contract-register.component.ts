import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { defineLocale, esLocale } from "ngx-bootstrap/chronos";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ImageDto } from "../../model/Image";
import { Payment } from "../../model/payment";
import { commonService } from "../../Services/common-service.service";
import { NotificationService } from "../../Services/notification.service";

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

    @Input() PaymentType = 0


    constructor(
        private _commonService: commonService,
        private _notification: NotificationService,
        private _router: Router,
        private _route: ActivatedRoute,
        private localeService: BsLocaleService) {
        defineLocale('es', esLocale);
        this.localeService.use('es');

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
        });

        this.clearDropofy();

        this.initDropify();

        this.dropifyElement.on('dropify.afterClear', () => {
            this.paymentSelected = undefined;
        });
    }

    clearDropofy = () => {
        $('.dropify-clear').trigger('click');
    }

    initDropify = () => {
        this.dropifyElement = $('.dropify').dropify({
            messages: {
                'default': 'Selecciona una imagen',
                'replace': 'Selecciona una imagen',
                'remove': 'Eliminar',
                'error': 'Ooops, algo paso mal'
            },
            error: {
                'fileSize': 'El tamaño maximo de la imagen permitido es de ({{ value }}).',
                'imageFormat': 'El tipo de archivo es incorrecto solo se permiten imagenes de tipo {{ value }}.'
            }
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
                    //this.imageSelected.IdContract = this.idContract;
                };
                myReader.readAsBinaryString(file);
            }
        }
    }

    get f() { return this.paymentForm.controls; }

    getPaymentObject = () => {
        const pay = new Payment();
        pay.IdContract = this.idContract;
        pay.Name = this.f['nameControl'].value
        pay.Method = this.f['methodPayControl'].value
        pay.Date = this.f['dateControl'].value
        pay.Amount = this.f['amountControl'].value
        pay.Bank = this.f['bankControl'].value
        pay.NoCheck = this.f['noCheckControl'].value
        pay.Description = this.f['descriptionControl'].value
        pay.Type = this.PaymentType;

        if (this.imageSelected != undefined) {
            pay.NameImage = this.imageSelected.Name;
            pay.Base = this.imageSelected.Base
        }

        return pay;
    }

    onSave = () => {
        const payment = this.getPaymentObject();
        console.log(payment);

    }


}