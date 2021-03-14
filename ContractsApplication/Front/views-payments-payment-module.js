(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-payments-payment-module"],{

/***/ "4tVF":
/*!***************************************************!*\
  !*** ./src/app/Services/SharedService.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let SharedService = class SharedService {
    constructor() {
        this.amountResumeByContractEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SharedService);



/***/ }),

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
/* harmony import */ var _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Services/SharedService.service */ "4tVF");
/* harmony import */ var _Catalogos_catalogo_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Catalogos/catalogo.module */ "/DOo");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipe.module */ "K95I");
/* harmony import */ var _amount_resume_by_contract_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./amount-resume-by-contract.component */ "Wcb7");
/* harmony import */ var _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment-contract-register.component */ "xEPz");
/* harmony import */ var _payment_contract_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment-contract.component */ "68uT");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-routing.module */ "qVUI");
/* harmony import */ var _payment_water_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment-water.component */ "VCWr");





















let PaymentModule = class PaymentModule {
};
PaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_19__["PaymentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _pipe_module__WEBPACK_IMPORTED_MODULE_15__["ApplicationPipeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"].forRoot({}),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            _Catalogos_catalogo_module__WEBPACK_IMPORTED_MODULE_14__["CatalogoModule"]
        ],
        declarations: [
            _payment_contract_component__WEBPACK_IMPORTED_MODULE_18__["PaymentContractComponent"],
            _payment_water_component__WEBPACK_IMPORTED_MODULE_20__["PaymentWaterComponent"],
            _payment_contract_register_component__WEBPACK_IMPORTED_MODULE_17__["PaymentContractRegisterComponent"],
            _amount_resume_by_contract_component__WEBPACK_IMPORTED_MODULE_16__["AmountResumeByContractComponent"]
        ],
        providers: [
            _Services_common_service_service__WEBPACK_IMPORTED_MODULE_11__["commonService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
            _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"]
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
/* harmony default export */ __webpack_exports__["default"] = ("<h3 *ngIf=\"PaymentType === 0\">Abonos del Contrato: {{contract?.Name}}</h3>\r\n<h3 *ngIf=\"PaymentType === 1\">Pagos agua del Contrato: {{contract?.Name}}</h3>\r\n<div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n        <app-amount-resume [idContract]=\"idContract\" [PaymentType]=\"PaymentType\"></app-amount-resume>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <i class=\"fa fa-align-justify\"></i> Imagenes del contrato\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nombre</th>\r\n                            <th>Cantidad</th>\r\n                            <th>Acciones</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let payment of paymentList\">\r\n                            <td>{{payment.Id}}</td>\r\n                            <td>{{payment.Name}}</td>\r\n                            <td>{{payment.Amount | currency}}</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-warning active\" tooltip=\"Click para editar el pago\"\r\n                                    aria-pressed=\"true\" (click)=\"onEditPayment(payment)\"><i\r\n                                        class=\"fa fa-pencil\"></i></button>\r\n                                <button *ngIf=\"!contract?.IsFinalize\" type=\"button\" class=\"btn btn-danger active\" aria-pressed=\"true\"\r\n                                    (click)=\"dangerModal.show();paymentSelected=payment;\"\r\n                                    tooltip=\"Click para eliminar el pago\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                <button *ngIf=\"payment.Base\" type=\"button\" class=\"btn btn-info active\"\r\n                                    aria-pressed=\"true\" tooltip=\"Click para descargar la imagen\"\r\n                                    (click)=\"onDownload(payment)\"><i class=\"fa cil-cloud-download\"></i></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <strong>Registro de pago</strong>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"paymentForm\" autocomplete=\"off\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"company\">Nombre del beneficiario</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"\"\r\n                            formControlName=\"nameControl\" maxlength=\"150\">\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"city\">Metodo de pago</label>\r\n                            <select class=\"form-control\" id=\"\" [formControl]=\"f.methodPayControl\">\r\n                                <option value=\"\">Seleccione un metodo de pago</option>\r\n                                <option value=\"0\">Cheque</option>\r\n                                <option value=\"1\">Efectivo</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"postal-code\">Fecha</label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" size=\"16\" readonly [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY'}\"\r\n                                    #dp=\"bsDatepicker\" placeholder=\"Seleccione una fecha\" formControlName=\"dateControl\"\r\n                                    class=\"form-control\" bsDatepicker>\r\n                                <span class=\"input-group-append\">\r\n                                    <button class=\"btn btn-success\" (click)=\"dp.toggle()\"\r\n                                        [attr.aria-expanded]=\"dp.isOpen\"><i class=\"fa fa-calendar\"\r\n                                            aria-hidden=\"true\"></i></button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-sm-6\">\r\n                            <label for=\"postal-code\">Monto</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"postal-code\" appOnlyNumbers\r\n                                formControlName=\"amountControl\" placeholder=\"\">\r\n                        </div>\r\n                        <div class=\"form-group col-sm-6\" *ngIf=\"f.methodPayControl.value === '0'\">\r\n                            <label for=\"city\">Banco</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"vat\" maxlength=\"100\"\r\n                                formControlName=\"bankControl\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"f.methodPayControl.value === '0'\">\r\n                        <label for=\"vat\">No. Cheque</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"vat2\" maxlength=\"100\"\r\n                            formControlName=\"noCheckControl\" placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"vat\">Imagen &nbsp; <button [hidden]=\"paymentSelected?.Base === null\" type=\"button\"\r\n                                class=\"btn btn-danger active\" aria-pressed=\"true\" (click)=\"removeImage();\"\r\n                                tooltip=\"Click para remover la imagen\"><i class=\"fa fa-trash-o\"></i></button></label>\r\n                        <div [hidden]=\"paymentSelected?.Base === null\">\r\n                            <img src=\"{{paymentSelected?.Base}}\" height=\"150\">\r\n                        </div>\r\n                        <div [hidden]=\"paymentSelected?.Base !== null\">\r\n                            <input #fileInput type=\"file\" (change)=\"handleFileInput($event.target.files)\"\r\n                                class=\"dropify\" data-max-file-size=\"20M\" (click)=\"fileInput.value = null\"\r\n                                data-allowed-file-extensions=\"png jpg bmp jpeg\" data-show-loader=\"false\"\r\n                                data-height=\"150\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"vat\">Descripción</label>\r\n                        <textarea id=\"description\" name=\"textarea-input\" maxlength=\"500\" rows=\"3\" class=\"form-control\"\r\n                            formControlName=\"descriptionControl\" maxlength=\"500\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button *ngIf=\"!contract?.IsFinalize\" type=\"submit\" class=\"btn btn-primary float-right\" style=\"margin-left: 9px\"\r\n                    tooltip=\"Click para guardar los cambios del pago\" (click)=\"onSave()\"[disabled]=\"paymentForm.invalid\"><i\r\n                        class=\"fa fa-dot-circle-o\"></i>\r\n                    Guardar</button>\r\n                <button *ngIf=\"!contract?.IsFinalize\" type=\"reset\" class=\"btn btn-danger float-right\"\r\n                    tooltip=\"Click para cancelar los cambios del pago\" (click)=\"onResetForm()\"><i class=\"fa fa-ban\"></i>\r\n                    Cancelar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Mensaje del sistema</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h5>Está seguro que desea eliminar el registro de pago {{paymentSelected?.Name}} del contrato?</h5>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Cancelar</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeletePayment();dangerModal.hide()\">&nbsp;&nbsp;Sí\r\n                    &nbsp;&nbsp;</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->");

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
    constructor() {
        this.disableEdit = true;
        this.disableCancel = true;
        this.disablePamentContract = true;
        this.disablePamentWater = false;
    }
};
PaymentWaterComponent.ctorParameters = () => [];
PaymentWaterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_payment_water_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentWaterComponent);



/***/ }),

/***/ "Wcb7":
/*!***********************************************************************!*\
  !*** ./src/app/views/payments/amount-resume-by-contract.component.ts ***!
  \***********************************************************************/
/*! exports provided: AmountResumeByContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountResumeByContractComponent", function() { return AmountResumeByContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_amount_resume_by_contract_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./amount-resume-by-contract.component.html */ "xLb3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");
/* harmony import */ var _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/SharedService.service */ "4tVF");






let AmountResumeByContractComponent = class AmountResumeByContractComponent {
    constructor(_commonService, _notification, _shareService) {
        this._commonService = _commonService;
        this._notification = _notification;
        this._shareService = _shareService;
        this.idContract = 0;
        this.PaymentType = 0;
        this.TotalPayment = 0;
        this.TotalRestremaining = 0;
        this.getResume = () => {
            this._commonService.getAmountResumeByContract(this.idContract, this.PaymentType).toPromise()
                .then(result => {
                this.TotalPayment = result.TotalPayment;
                this.TotalRestremaining = result.TotalRestremaining;
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al consultar el resumen del contrato');
            });
        };
        this._shareService.amountResumeByContractEvent.subscribe((data) => {
            this.getResume();
        });
    }
    ngOnInit() {
        if (this.idContract > 0) {
            this.getResume();
        }
    }
};
AmountResumeByContractComponent.ctorParameters = () => [
    { type: _Services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["commonService"] },
    { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
AmountResumeByContractComponent.propDecorators = {
    idContract: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    PaymentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AmountResumeByContractComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-amount-resume',
        template: _raw_loader_amount_resume_by_contract_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["commonService"],
        _Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
        _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
], AmountResumeByContractComponent);



/***/ }),

/***/ "Z9DZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payments/payment-water.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-contract-list [disableEdit]=\"disableEdit\" [disableCancel]=\"disableCancel\" [disablePamentContract]=\"disablePamentContract\" [disablePamentWater]=\"disablePamentWater\"></app-contract-list>");

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
/* harmony import */ var _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/SharedService.service */ "4tVF");












let PaymentContractRegisterComponent = class PaymentContractRegisterComponent {
    constructor(_commonService, _notification, _route, _localeService, _shareService) {
        this._commonService = _commonService;
        this._notification = _notification;
        this._route = _route;
        this._localeService = _localeService;
        this._shareService = _shareService;
        this.idContract = 0;
        this.paymentList = [];
        this.PaymentType = 0;
        this.clearDropofy = () => {
            $('.dropify-clear').trigger('click');
        };
        this.initDropify = () => {
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
        };
        this.getContractById = (id) => {
            this._commonService.getContract(id).toPromise()
                .then(result => {
                this.contract = result;
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
                    };
                    myReader.readAsBinaryString(file);
                }
            }
        };
        this.getPaymentObject = () => {
            const pay = new _model_payment__WEBPACK_IMPORTED_MODULE_8__["Payment"]();
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
            }
            else if (this.paymentSelected !== undefined && this.paymentSelected.Base !== null) {
                pay.NameImage = this.paymentSelected.NameImage;
                pay.Base = this.paymentSelected.Base;
            }
            return pay;
        };
        this.onResetForm = () => {
            this.paymentForm.reset('');
            this.clearDropofy();
            this.imageSelected = undefined;
            this.paymentSelected = undefined;
        };
        this.onSave = () => {
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
        };
        this.onGetAllPaymentContrac = () => {
            this._commonService.getAllPaymentContract(this.idContract, this.PaymentType).toPromise()
                .then(result => {
                this.paymentList = result;
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al Consultar la lista de pagos');
            });
        };
        this.removeImage = () => {
            this.paymentSelected.Base = null;
            this.paymentSelected.NameImage = null;
        };
        this.onDeletePayment = () => {
            this._commonService.OnDeletePayment(this.paymentSelected.Id).toPromise()
                .then(result => {
                this._notification.success('El pago se ha eliminado con éxito');
                this.onGetAllPaymentContrac();
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al eliminar el pago');
            });
        };
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])('es', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["esLocale"]);
        this._localeService.use('es');
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
            this.PaymentType = params['type'] !== undefined ? +params['type'] : 0;
            if (this.idContract) {
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
    get f() { return this.paymentForm.controls; }
    onEditPayment(payment) {
        this.paymentSelected = Object.assign({}, payment);
        this.f['nameControl'].setValue(payment.Name);
        this.f['methodPayControl'].setValue(payment.Method + '');
        this.f['dateControl'].setValue(payment.Date);
        this.f['amountControl'].setValue(payment.Amount);
        this.f['bankControl'].setValue(payment.Bank);
        this.f['noCheckControl'].setValue(payment.NoCheck);
        this.f['descriptionControl'].setValue(payment.Description);
    }
    onDownload(payment) {
        const a = document.createElement('a');
        a.href = payment.Base;
        a.download = payment.NameImage;
        a.click();
    }
};
PaymentContractRegisterComponent.ctorParameters = () => [
    { type: _Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__["commonService"] },
    { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _Services_SharedService_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
], PaymentContractRegisterComponent);



/***/ }),

/***/ "xLb3":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payments/amount-resume-by-contract.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-6 col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body p-3 clearfix\">\r\n            <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\r\n            <div class=\"h5 text-info mb-0 mt-2\">{{TotalPayment | currency}}</div>\r\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Total cantidad abonada</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-lg-6\" *ngIf=\"PaymentType === 0\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body p-3 clearfix\">\r\n            <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\r\n            <div class=\"h5 text-danger mb-0 mt-2\">{{TotalRestremaining | currency}}</div>\r\n            <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Cantidad restante</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-payments-payment-module.js.map