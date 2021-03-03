(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-Catalogos-catalogo-module"],{

/***/ "/DOo":
/*!****************************************************!*\
  !*** ./src/app/views/Catalogos/catalogo.module.ts ***!
  \****************************************************/
/*! exports provided: CatalogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoModule", function() { return CatalogoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "qC+V");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipe.module */ "K95I");
/* harmony import */ var _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalogo-routing.module */ "mdUE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contracts.component */ "EDVH");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _contract_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contract-manage.component */ "iPFL");
/* harmony import */ var _import_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./import-image.component */ "YJ9z");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _contract_resume_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contract-resume.component */ "9wPd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _contract_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contract-register.component */ "NPdu");






















let CatalogoModule = class CatalogoModule {
};
CatalogoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_12__["CatalogoRoutingModule"],
            _pipe_module__WEBPACK_IMPORTED_MODULE_11__["ApplicationPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"].forRoot({}),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot()
        ],
        declarations: [
            _contracts_component__WEBPACK_IMPORTED_MODULE_14__["ContractsComponent"],
            _contract_manage_component__WEBPACK_IMPORTED_MODULE_16__["ContractManageComponent"],
            _import_image_component__WEBPACK_IMPORTED_MODULE_17__["ImportImageComponent"],
            _contract_resume_component__WEBPACK_IMPORTED_MODULE_19__["ContractResumeComponent"],
            _contract_register_component__WEBPACK_IMPORTED_MODULE_21__["ContractRegisterComponent"]
        ],
        exports: [],
        providers: [
            _Services_common_service_service__WEBPACK_IMPORTED_MODULE_9__["commonService"],
            _Services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]
        ]
    })
], CatalogoModule);



/***/ }),

/***/ "2xLn":
/*!***********************************!*\
  !*** ./src/app/model/Contract.ts ***!
  \***********************************/
/*! exports provided: Contract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract; });
class Contract {
}


/***/ }),

/***/ "7+aZ":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/Catalogos/contract-manage.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mb-6\">\r\n      <!-- Nav tabs -->\r\n      <tabset>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-folder\"></i> Contrato &nbsp;\r\n            <span *ngIf=\"idContract === 0\" class=\"badge badge-success\">Nuevo</span>\r\n            <span *ngIf=\"idContract !== 0\" class=\"badge badge-info\">Editar</span>\r\n          </ng-template>\r\n          <app-conctract-register [idContract]=\"idContract\"></app-conctract-register>\r\n        </tab>\r\n        <tab *ngIf=\"idContract !== 0\">\r\n          <ng-template tabHeading><i class=\"icon-cloud-upload\"></i> Adjuntar imagen</ng-template>\r\n          <import-image [idContract]=\"idContract\"></import-image>\r\n\r\n        </tab>\r\n        <tab *ngIf=\"idContract !== 0\">\r\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Resumen</ng-template>\r\n          <app-resume-contract></app-resume-contract>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "9wPd":
/*!**************************************************************!*\
  !*** ./src/app/views/Catalogos/contract-resume.component.ts ***!
  \**************************************************************/
/*! exports provided: ContractResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractResumeComponent", function() { return ContractResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contract_resume_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contract-resume.component.html */ "m0pO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let ContractResumeComponent = class ContractResumeComponent {
    constructor() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
};
ContractResumeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-resume-contract',
        template: _raw_loader_contract_resume_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ContractResumeComponent);



/***/ }),

/***/ "NPdu":
/*!****************************************************************!*\
  !*** ./src/app/views/Catalogos/contract-register.component.ts ***!
  \****************************************************************/
/*! exports provided: ContractRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractRegisterComponent", function() { return ContractRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contract_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contract-register.component.html */ "mnCy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "U9ZV");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _model_Contract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/Contract */ "2xLn");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");










let ContractRegisterComponent = class ContractRegisterComponent {
    constructor(_router, _route, _commonService, _notification, localeService) {
        this._router = _router;
        this._route = _route;
        this._commonService = _commonService;
        this._notification = _notification;
        this.localeService = localeService;
        this.disableButtonSave = false;
        this.idContract = 0;
        this.reset = () => {
            this.idContract = 0;
            this.contractForm.reset();
        };
        this.onSave = () => {
            const contract = this.getContractObject();
            this.disableButtonSave = true;
            this._commonService.onSaveContract(contract).toPromise()
                .then(result => {
                this.back();
                this._notification.success('El contrato se guardó Correctamente');
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al guardar el contrato');
            });
        };
        this.getContract = (id) => {
            this._commonService.getContract(id)
                .subscribe(result => {
                this.setContract(result);
            });
        };
        this.setContract = (contract) => {
            this.f['nameControl'].setValue(contract.Name);
            this.f['acresControl'].setValue(contract.Acres);
            this.f['amountControl'].setValue(contract.Amount);
            this.f['ubicationControl'].setValue(contract.Location);
            this.f['phoneControl'].setValue(contract.Phone);
            const datePartsStart = contract.StartDate.split("/");
            this.f['startDateControl'].setValue(new Date(+datePartsStart[2], +datePartsStart[1] - 1, +datePartsStart[0]));
            const datePartsEnd = contract.EndDate.split("/");
            this.f['endControl'].setValue(new Date(+datePartsEnd[2], +datePartsEnd[1] - 1, +datePartsEnd[0]));
            this.f['descriptionControl'].setValue(contract.Description);
        };
        this.back = () => {
            this._router.navigate(['/catalogo/contracts'], { relativeTo: this._route });
        };
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])('es', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["esLocale"]);
        this.localeService.use('es');
    }
    ngOnInit() {
        this.contractForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            acresControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amountControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ubicationControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            phoneControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            startDateControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            endControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            descriptionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        if (this.idContract !== 0) {
            this.getContract(this.idContract);
        }
    }
    get f() { return this.contractForm.controls; }
    getContractObject() {
        const obj = new _model_Contract__WEBPACK_IMPORTED_MODULE_7__["Contract"]();
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
};
ContractRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _Services_common_service_service__WEBPACK_IMPORTED_MODULE_8__["commonService"] },
    { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] }
];
ContractRegisterComponent.propDecorators = {
    idContract: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ContractRegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-conctract-register',
        template: _raw_loader_contract_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _Services_common_service_service__WEBPACK_IMPORTED_MODULE_8__["commonService"],
        _Services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]])
], ContractRegisterComponent);



/***/ }),

/***/ "YJ9z":
/*!***********************************************************!*\
  !*** ./src/app/views/Catalogos/import-image.component.ts ***!
  \***********************************************************/
/*! exports provided: ImportImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportImageComponent", function() { return ImportImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_import_image_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-image.component.html */ "b8rK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _model_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Image */ "HrNf");
/* harmony import */ var _Services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/common-service.service */ "7DoW");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/notification.service */ "B+sD");






let ImportImageComponent = class ImportImageComponent {
    constructor(_commonService, _notification) {
        this._commonService = _commonService;
        this._notification = _notification;
        this.imageList = [];
        this.imageName = '';
        this.idImage = 0;
        this.idContract = 0;
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
        this.handleFileInput = (files) => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[0];
                    const myReader = new FileReader();
                    myReader.onloadend = (e) => {
                        const binaryString = myReader.result;
                        this.imageSelected = new _model_Image__WEBPACK_IMPORTED_MODULE_3__["ImageDto"]();
                        this.imageSelected.Base = 'data:' + file.type + ';base64,' + btoa(binaryString);
                        this.imageSelected.Name = file.name;
                        this.imageSelected.IdContract = this.idContract;
                    };
                    myReader.readAsBinaryString(file);
                }
            }
        };
        this.importImage = () => {
            this._commonService.onSaveImageContract(this.imageSelected).toPromise()
                .then(result => {
                this._notification.success('La imagen se ha añadido con éxito al contrato');
                this.clearDropofy();
                this.getImages();
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al añadir la imagen al contrato');
            });
        };
        this.getImages = () => {
            this._commonService.getAllImagesContracts(this.idContract).toPromise()
                .then(result => {
                this.imageList = result;
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al consultar las imagenes');
            });
        };
        this.onDeleteImage = () => {
            this._commonService.onDeleteImageContract(this.idImage).toPromise()
                .then(result => {
                this.getImages();
                this._notification.success('La imagen se ha eliminado con éxito.');
            }).catch(error => {
                this._notification.error('Ha ocurrido un error al eliminar la imagen');
            });
        };
    }
    ngOnInit() {
        this.clearDropofy();
        this.getImages();
        this.initDropify();
        this.dropifyElement.on('dropify.afterClear', () => {
            this.imageSelected = undefined;
        });
    }
    onDownload(image) {
        const a = document.createElement('a');
        a.href = image.Base;
        a.download = image.Name;
        a.click();
    }
};
ImportImageComponent.ctorParameters = () => [
    { type: _Services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["commonService"] },
    { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
ImportImageComponent.propDecorators = {
    idContract: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ImportImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "import-image",
        template: _raw_loader_import_image_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["commonService"],
        _Services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
], ImportImageComponent);



/***/ }),

/***/ "b8rK":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/Catalogos/import-image.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <label for=\"nf-price\">Importar imagen para el contrato</label><br>\r\n    <input #fileInput type=\"file\" (change)=\"handleFileInput($event.target.files)\" class=\"dropify\"\r\n      data-max-file-size=\"20M\" (click)=\"fileInput.value = null\" data-allowed-file-extensions=\"png jpg bmp jpeg\"\r\n      data-show-loader=\"false\" data-height=\"290\" />\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <button type=\"button\" (click)=\"importImage();\" class=\"btn btn-success active float-right\"\r\n          tooltip=\"Click guardar la imagen en el contrato\" aria-pressed=\"true\" style=\"margin-left: 9px;\"><i\r\n            class=\"fa cil-cloud-upload\"></i>&nbsp;Importar\r\n          Imagen</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Imagenes del contrato\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Nombre</th>\r\n              <th>Acciones</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let image of imageList\">\r\n              <td>{{image.Id}}</td>\r\n              <td>{{image.Name}}</td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-danger active\" aria-pressed=\"true\"\r\n                  (click)=\"dangerModal.show();idImage=image.Id;imageName=image.Name;\"\r\n                  tooltip=\"Click para eliminar la imagen\"><i class=\"fa fa-trash-o\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-info active\" aria-pressed=\"true\"\r\n                  tooltip=\"Click para descargar la imagen\" (click)=\"onDownload(image)\"><i\r\n                    class=\"fa cil-cloud-download\"></i></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Mensaje del sistema</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h5>Está seguro que desea eliminar la imagen {{imageName}} del contrato?</h5>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteImage();dangerModal.hide()\">&nbsp;&nbsp;Sí\r\n          &nbsp;&nbsp;</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->");

/***/ }),

/***/ "iPFL":
/*!**************************************************************!*\
  !*** ./src/app/views/Catalogos/contract-manage.component.ts ***!
  \**************************************************************/
/*! exports provided: ContractManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractManageComponent", function() { return ContractManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contract_manage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contract-manage.component.html */ "7+aZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




let ContractManageComponent = class ContractManageComponent {
    constructor(_route) {
        this._route = _route;
        this.idContract = 0;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.idContract = params['id'] !== undefined ? +params['id'] : 0;
        });
    }
};
ContractManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ContractManageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_contract_manage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ContractManageComponent);



/***/ }),

/***/ "m0pO":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/Catalogos/contract-resume.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card-columns cols-2\">\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Bar Chart\r\n                <div class=\"card-header-actions\">\r\n                    <a href=\"http://www.chartjs.org\">\r\n                        <small class=\"text-muted\">docs</small>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"chart-wrapper\">\r\n                    <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\"\r\n                        [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\"\r\n                        (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Pie Chart\r\n                <div class=\"card-header-actions\">\r\n                    <a href=\"http://www.chartjs.org\">\r\n                        <small class=\"text-muted\">docs</small>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"chart-wrapper\">\r\n                    <canvas baseChart class=\"chart\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\"\r\n                        [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "mdUE":
/*!************************************************************!*\
  !*** ./src/app/views/Catalogos/catalogo-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CatalogoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoRoutingModule", function() { return CatalogoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _contract_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-manage.component */ "iPFL");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contracts.component */ "EDVH");





const routes = [
    {
        path: '',
        data: {
            title: 'Catalogo'
        },
        children: [
            {
                path: '',
                redirectTo: 'contracts'
            },
            {
                path: 'contracts',
                component: _contracts_component__WEBPACK_IMPORTED_MODULE_4__["ContractsComponent"],
                data: {
                    title: 'Contratos'
                }
            },
            {
                path: 'contractregister',
                component: _contract_manage_component__WEBPACK_IMPORTED_MODULE_3__["ContractManageComponent"],
                data: {
                    title: 'Registro de Contratos'
                }
            }
        ]
    }
];
let CatalogoRoutingModule = class CatalogoRoutingModule {
};
CatalogoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CatalogoRoutingModule);



/***/ }),

/***/ "mnCy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/Catalogos/contract-register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-9\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <strong>Campos del contrato</strong>\r\n            <!-- <small>Form</small> -->\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"contractForm\" autocomplete=\"off\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"name\" class=\"col-md-3 col-form-label\">Nombre del Rentador:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" maxlength=\"150\" formControlName=\"nameControl\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">No. Hectáreas:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"acres\" maxlength=\"50\"\r\n                            formControlName=\"acresControl\">\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Cantidad:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" appOnlyNumbers [aceptDecimal]=\"true\" id=\"amont\"\r\n                            formControlName=\"amountControl\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Ubicación</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"ubicaiton\" maxlength=\"200\"\r\n                            formControlName=\"ubicationControl\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Teléfono</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" maxlength=\"50\"\r\n                            formControlName=\"phoneControl\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Fecha inicio del contrato editado</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" size=\"16\" readonly [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY'}\"\r\n                                #dp=\"bsDatepicker\" placeholder=\"Seleccione una fecha\" formControlName=\"startDateControl\"\r\n                                class=\"form-control\" bsDatepicker>\r\n                            <span class=\"input-group-append\">\r\n                                <button class=\"btn btn-success\" (click)=\"dp.toggle()\"\r\n                                    [attr.aria-expanded]=\"dp.isOpen\"><i class=\"fa fa-calendar\"\r\n                                        aria-hidden=\"true\"></i></button>\r\n                            </span>\r\n                        </div>\r\n                        <!-- <input type=\"date\" class=\"form-control\" id=\"startdate\" data-date-format=\"DD MMMM YYYY\" formControlName=\"startDateControl\"> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Fecha fin del contrato</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" size=\"16\" readonly [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY'}\"\r\n                                #dp=\"bsDatepicker\" placeholder=\"Seleccione una fecha\" formControlName=\"endControl\"\r\n                                class=\"form-control\" bsDatepicker>\r\n                            <span class=\"input-group-append\">\r\n                                <button class=\"btn btn-success\" (click)=\"dp.toggle()\"\r\n                                    [attr.aria-expanded]=\"dp.isOpen\"><i class=\"fa fa-calendar\"\r\n                                        aria-hidden=\"true\"></i></button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ccnumber\" class=\"col-md-3 col-form-label\">Descripción</label>\r\n                    <div class=\"col-md-9\">\r\n                        <textarea id=\"description\" name=\"textarea-input\" maxlength=\"500\" rows=\"3\" class=\"form-control\"\r\n                            formControlName=\"descriptionControl\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary float-right\" style=\"margin-left: 9px\"\r\n                tooltip=\"Click para guardar los cambios del contrato\" (click)=\"onSave()\"\r\n                [disabled]=\"contractForm.invalid || disableButtonSave\"><i class=\"fa fa-dot-circle-o\"></i>\r\n                Guardar</button>\r\n            <button type=\"reset\" class=\"btn btn-danger float-right\"\r\n                tooltip=\"Click para cancelar los cambios del contrato\" (click)=\"back()\"><i class=\"fa fa-ban\"></i>\r\n                Cancelar</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-Catalogos-catalogo-module.js.map