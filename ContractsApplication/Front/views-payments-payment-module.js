(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-payments-payment-module"],{

/***/ "68uT":
/*!**************************************************************!*\
  !*** ./src/app/views/payments/payment-contract.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContractComponent", function() { return PaymentContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_contract_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-contract.component.html */ "QkB+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let PaymentContractComponent = class PaymentContractComponent {
    constructor() {
        this.disableEdit = true;
        this.disableCancel = true;
        this.disablePamentContract = false;
        this.disablePamentWater = true;
    }
};
PaymentContractComponent.ctorParameters = () => [];
PaymentContractComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_payment_contract_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentContractComponent);



/***/ }),

/***/ "QkB+":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payments/payment-contract.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-contract-list [disableEdit]=\"disableEdit\" [disableCancel]=\"disableCancel\" [disablePamentContract]=\"disablePamentContract\" [disablePamentWater]=\"disablePamentWater\"></app-contract-list>");

/***/ }),

/***/ "SEax":
/*!**************************************************!*\
  !*** ./src/app/views/payments/payment.module.ts ***!
  \**************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "qC+V");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");
/* harmony import */ var _Catalogos_contracts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Catalogos/contracts.component */ "EDVH");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipe.module */ "K95I");
/* harmony import */ var _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment-contract-register.component */ "xEPz");
/* harmony import */ var _payment_contract_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment-contract.component */ "68uT");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment-routing.module */ "qVUI");
/* harmony import */ var _payment_water_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment-water.component */ "VCWr");



















let PaymentModule = class PaymentModule {
};
PaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_17__["PaymentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _pipe_module__WEBPACK_IMPORTED_MODULE_14__["ApplicationPipeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"].forRoot({}),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
        ],
        declarations: [
            _payment_contract_component__WEBPACK_IMPORTED_MODULE_16__["PaymentContractComponent"],
            _payment_water_component__WEBPACK_IMPORTED_MODULE_18__["PaymentWaterComponent"],
            _Catalogos_contracts_component__WEBPACK_IMPORTED_MODULE_13__["ContractsComponent"],
            _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_15__["PaymentContractRegisterComponent"]
        ],
        providers: [
            _Services_common_service_service__WEBPACK_IMPORTED_MODULE_11__["commonService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]
        ]
    })
], PaymentModule);



/***/ }),

/***/ "SZuB":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payments/payment-contract-register.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\r\n    <div class=\"col-md-5\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <strong>Registro de pago de Contrato</strong>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"paymentForm\" autocomplete=\"off\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"company\">Nombre del beneficiario</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"\"\r\n                            formControlName=\"nameControl\" maxlength=\"150\">\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"city\">Metodo de pago</label>\r\n                            <select class=\"form-control\" id=\"\" [formControl]=\"f.methodPayControl\">\r\n                                <option value=\"\">Seleccione un metodo de pago</option>\r\n                                <option value=\"0\">Cheque</option>\r\n                                <option value=\"1\">Efectivo</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"postal-code\">Fecha</label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" size=\"16\" readonly [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY'}\"\r\n                                    #dp=\"bsDatepicker\" placeholder=\"Seleccione una fecha\" formControlName=\"dateControl\"\r\n                                    class=\"form-control\" bsDatepicker>\r\n                                <span class=\"input-group-append\">\r\n                                    <button class=\"btn btn-success\" (click)=\"dp.toggle()\"\r\n                                        [attr.aria-expanded]=\"dp.isOpen\"><i class=\"fa fa-calendar\"\r\n                                            aria-hidden=\"true\"></i></button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"postal-code\">Monto</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"postal-code\" appOnlyNumbers formControlName=\"amountControl\"\r\n                                placeholder=\"\">\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\" *ngIf=\"f.methodPayControl.value === '0'\">\r\n                            <label for=\"city\">Banco</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"vat\" maxlength=\"100\" formControlName=\"bankControl\"\r\n                                placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"f.methodPayControl.value === '0'\">\r\n                        <label for=\"vat\">No. Cheque</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"vat2\" maxlength=\"100\" formControlName=\"noCheckControl\"\r\n                            placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"vat\">Imagen</label>\r\n                        <input #fileInput type=\"file\" (change)=\"handleFileInput($event.target.files)\" class=\"dropify\"\r\n                            data-max-file-size=\"20M\" (click)=\"fileInput.value = null\"\r\n                            data-allowed-file-extensions=\"png jpg bmp jpeg\" data-show-loader=\"false\"\r\n                            data-height=\"150\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"vat\">Descripción</label>\r\n                        <textarea id=\"description\" name=\"textarea-input\" maxlength=\"500\" rows=\"3\" class=\"form-control\"\r\n                            formControlName=\"descriptionControl\" maxlength=\"500\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button type=\"submit\" class=\"btn btn-primary float-right\" style=\"margin-left: 9px\"\r\n                    tooltip=\"Click para guardar los cambios del contrato\" (click)=\"onSave()\"><i\r\n                        class=\"fa fa-dot-circle-o\"></i>\r\n                    Guardar</button>\r\n                <button type=\"reset\" class=\"btn btn-danger float-right\"\r\n                    tooltip=\"Click para cancelar los cambios del contrato\" (click)=\"back()\"><i class=\"fa fa-ban\"></i>\r\n                    Cancelar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <i class=\"fa fa-align-justify\"></i> Imagenes del contrato\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nombre</th>\r\n                            <th>Acciones</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let image of imageList\">\r\n                            <td>{{image.Id}}</td>\r\n                            <td>{{image.Name}}</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-danger active\" aria-pressed=\"true\"\r\n                                    (click)=\"dangerModal.show();idImage=image.Id;imageName=image.Name;\"\r\n                                    tooltip=\"Click para eliminar la imagen\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                <button type=\"button\" class=\"btn btn-info active\" aria-pressed=\"true\"\r\n                                    tooltip=\"Click para descargar la imagen\" (click)=\"onDownload(image)\"><i\r\n                                        class=\"fa cil-cloud-download\"></i></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Mensaje del sistema</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h5>Está seguro que desea eliminar la imagen {{imageName}} del contrato?</h5>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Cancelar</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteImage();dangerModal.hide()\">&nbsp;&nbsp;Sí\r\n                    &nbsp;&nbsp;</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->");

/***/ }),

/***/ "UfuC":
/*!**********************************!*\
  !*** ./src/app/model/payment.ts ***!
  \**********************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
class Payment {
}


/***/ }),

/***/ "VCWr":
/*!***********************************************************!*\
  !*** ./src/app/views/payments/payment-water.component.ts ***!
  \***********************************************************/
/*! exports provided: PaymentWaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentWaterComponent", function() { return PaymentWaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_water_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-water.component.html */ "Z9DZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let PaymentWaterComponent = class PaymentWaterComponent {
    constructor() { }
};
PaymentWaterComponent.ctorParameters = () => [];
PaymentWaterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_payment_water_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentWaterComponent);



/***/ }),

/***/ "Z9DZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payments/payment-water.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>pago de agua</h1>");

/***/ }),

/***/ "qVUI":
/*!**********************************************************!*\
  !*** ./src/app/views/payments/payment-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-contract-register.component */ "xEPz");
/* harmony import */ var _payment_contract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-contract.component */ "68uT");
/* harmony import */ var _payment_water_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-water.component */ "VCWr");






const routes = [
    {
        path: '',
        data: {
            title: 'Pagos'
        },
        children: [
            {
                path: '',
                redirectTo: 'payment-contract'
            },
            {
                path: 'payment-contract',
                component: _payment_contract_component__WEBPACK_IMPORTED_MODULE_4__["PaymentContractComponent"],
                data: {
                    title: 'Pago de contrato'
                }
            },
            {
                path: 'payment-contract-register',
                component: _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_3__["PaymentContractRegisterComponent"],
                data: {
                    title: 'Registro pago de contracto'
                }
            },
            {
                path: 'payment-water',
                component: _payment_water_component__WEBPACK_IMPORTED_MODULE_5__["PaymentWaterComponent"],
                data: {
                    title: 'Pago de agua'
                }
            }
        ]
    }
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentRoutingModule);



/***/ }),

/***/ "xEPz":
/*!***********************************************************************!*\
  !*** ./src/app/views/payments/payment-contract-register.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentContractRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentContractRegisterComponent", function() { return PaymentContractRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_contract_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-contract-register.component.html */ "SZuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "U9ZV");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _model_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/Image */ "HrNf");
/* harmony import */ var _model_payment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/payment */ "UfuC");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");











let PaymentContractRegisterComponent = class PaymentContractRegisterComponent {
    constructor(_commonService, _notification, _router, _route, localeService) {
        this._commonService = _commonService;
        this._notification = _notification;
        this._router = _router;
        this._route = _route;
        this.localeService = localeService;
        this.idContract = 0;
        this.PaymentType = 0;
        this.clearDropofy = () => {
            $('.dropify-clear').trigger('click');
        };
        this.initDropify = () => {
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
        };
        this.handleFileInput = (files) => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[0];
                    const myReader = new FileReader();
                    myReader.onloadend = (e) => {
                        const binaryString = myReader.result;
                        this.imageSelected = new _model_Image__WEBPACK_IMPORTED_MODULE_7__["ImageDto"]();
                        this.imageSelected.Base = 'data:' + file.type + ';base64,' + btoa(binaryString);
                        this.imageSelected.Name = file.name;
                        //this.imageSelected.IdContract = this.idContract;
                    };
                    myReader.readAsBinaryString(file);
                }
            }
        };
        this.getPaymentObject = () => {
            const pay = new _model_payment__WEBPACK_IMPORTED_MODULE_8__["Payment"]();
            pay.IdContract = this.idContract;
            pay.Name = this.f['nameControl'].value;
            pay.Method = this.f['methodPayControl'].value;
            pay.Date = this.f['dateControl'].value;
            pay.Amount = this.f['amountControl'].value;
            pay.Bank = this.f['bankControl'].value;
            pay.NoCheck = this.f['noCheckControl'].value;
            pay.Description = this.f['descriptionControl'].value;
            pay.Type = this.PaymentType;
            if (this.imageSelected != undefined) {
                pay.NameImage = this.imageSelected.Name;
                pay.Base = this.imageSelected.Base;
            }
            return pay;
        };
        this.onSave = () => {
            const payment = this.getPaymentObject();
            console.log(payment);
        };
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])('es', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["esLocale"]);
        this.localeService.use('es');
    }
    ngOnInit() {
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            methodPayControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dateControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amountControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            bankControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            noCheckControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            descriptionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
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
    get f() { return this.paymentForm.controls; }
};
PaymentContractRegisterComponent.ctorParameters = () => [
    { type: _Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__["commonService"] },
    { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] }
];
PaymentContractRegisterComponent.propDecorators = {
    PaymentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PaymentContractRegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_payment_contract_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__["commonService"],
        _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]])
], PaymentContractRegisterComponent);



/***/ })

}]);
//# sourceMappingURL=views-payments-payment-module.js.map