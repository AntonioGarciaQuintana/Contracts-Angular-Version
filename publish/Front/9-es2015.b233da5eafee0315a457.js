(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{SEax:function(t,e,a){"use strict";a.r(e),a.d(e,"PaymentModule",function(){return U});var n=a("SVse"),o=a("IheW"),i=a("s7LF"),c=a("hzby"),r=a("K3ix"),l=a("Mfq2"),s=a("qC+V"),b=a("oOf3"),d=a("5eHb"),m=a("7DoW"),p=a("B+sD"),u=a("8Y7J");let h=(()=>{class t{constructor(){this.amountResumeByContractEvent=new u.q}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Pb({token:t,factory:t.\u0275fac}),t})();var f=a("/DOo"),g=a("K95I"),y=a("iInd"),v=a("U9ZV"),C=a("HrNf");class Y{}function Z(t,e){if(1&t&&(u.Zb(0,"div",1),u.Zb(1,"div",2),u.Zb(2,"div",3),u.Ub(3,"i",8),u.Zb(4,"div",9),u.Ic(5),u.kc(6,"currency"),u.Yb(),u.Zb(7,"div",6),u.Ic(8,"Cantidad restante"),u.Yb(),u.Yb(),u.Yb(),u.Yb()),2&t){const t=u.jc();u.Hb(5),u.Jc(u.lc(6,1,t.TotalRestremaining))}}let I=(()=>{class t{constructor(t,e,a){this._commonService=t,this._notification=e,this._shareService=a,this.idContract=0,this.PaymentType=0,this.TotalPayment=0,this.TotalRestremaining=0,this.getResume=()=>{this._commonService.getAmountResumeByContract(this.idContract,this.PaymentType).toPromise().then(t=>{this.TotalPayment=t.TotalPayment,this.TotalRestremaining=t.TotalRestremaining}).catch(t=>{this._notification.error("Ha ocurrido un error al consultar el resumen del contrato")})},this._shareService.amountResumeByContractEvent.subscribe(t=>{this.getResume()})}ngOnInit(){this.idContract>0&&this.getResume()}}return t.\u0275fac=function(e){return new(e||t)(u.Tb(m.a),u.Tb(p.a),u.Tb(h))},t.\u0275cmp=u.Nb({type:t,selectors:[["app-amount-resume"]],inputs:{idContract:"idContract",PaymentType:"PaymentType"},decls:11,vars:4,consts:[[1,"row"],[1,"col-6","col-lg-6"],[1,"card"],[1,"card-body","p-3","clearfix"],[1,"fa","fa-laptop","bg-info","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-info","mb-0","mt-2"],[1,"text-muted","text-uppercase","font-weight-bold","font-xs"],["class","col-6 col-lg-6",4,"ngIf"],[1,"fa","fa-bell","bg-danger","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-danger","mb-0","mt-2"]],template:function(t,e){1&t&&(u.Zb(0,"div",0),u.Zb(1,"div",1),u.Zb(2,"div",2),u.Zb(3,"div",3),u.Ub(4,"i",4),u.Zb(5,"div",5),u.Ic(6),u.kc(7,"currency"),u.Yb(),u.Zb(8,"div",6),u.Ic(9,"Total cantidad abonada"),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Hc(10,Z,9,3,"div",7),u.Yb()),2&t&&(u.Hb(6),u.Jc(u.lc(7,2,e.TotalPayment)),u.Hb(4),u.pc("ngIf",0===e.PaymentType))},directives:[n.m],pipes:[n.d],encapsulation:2}),t})();var P=a("pO/D");function k(t,e){if(1&t&&(u.Zb(0,"h3"),u.Ic(1),u.Yb()),2&t){const t=u.jc();u.Hb(1),u.Kc("Abonos del Contrato: ",null==t.contract?null:t.contract.Name,"")}}function S(t,e){if(1&t&&(u.Zb(0,"h3"),u.Ic(1),u.Yb()),2&t){const t=u.jc();u.Hb(1),u.Kc("Pagos agua del Contrato: ",null==t.contract?null:t.contract.Name,"")}}function H(t,e){if(1&t){const t=u.ac();u.Zb(0,"button",58),u.gc("click",function(){u.Bc(t);const e=u.jc().$implicit,a=u.jc();return u.zc(79).show(),a.paymentSelected=e}),u.Ub(1,"i",33),u.Yb()}}function w(t,e){if(1&t){const t=u.ac();u.Zb(0,"button",59),u.gc("click",function(){u.Bc(t);const e=u.jc().$implicit;return u.jc().onDownload(e)}),u.Ub(1,"i",60),u.Yb()}}function T(t,e){if(1&t){const t=u.ac();u.Zb(0,"tr"),u.Zb(1,"td"),u.Ic(2),u.Yb(),u.Zb(3,"td"),u.Ic(4),u.Yb(),u.Zb(5,"td"),u.Ic(6),u.kc(7,"currency"),u.Yb(),u.Zb(8,"td"),u.Zb(9,"button",54),u.gc("click",function(){u.Bc(t);const a=e.$implicit;return u.jc().onEditPayment(a)}),u.Ub(10,"i",55),u.Yb(),u.Hc(11,H,2,0,"button",56),u.Hc(12,w,2,0,"button",57),u.Yb(),u.Yb()}if(2&t){const t=e.$implicit,a=u.jc();u.Hb(2),u.Jc(t.Id),u.Hb(2),u.Jc(t.Name),u.Hb(2),u.Jc(u.lc(7,5,t.Amount)),u.Hb(5),u.pc("ngIf",!(null!=a.contract&&a.contract.IsFinalize)),u.Hb(1),u.pc("ngIf",t.Base)}}function B(t,e){1&t&&(u.Zb(0,"div",15),u.Zb(1,"label",16),u.Ic(2,"Banco"),u.Yb(),u.Ub(3,"input",61),u.Yb())}function x(t,e){1&t&&(u.Zb(0,"div",12),u.Zb(1,"label",31),u.Ic(2,"No. Cheque"),u.Yb(),u.Ub(3,"input",62),u.Yb())}function N(t,e){if(1&t){const t=u.ac();u.Zb(0,"button",63),u.gc("click",function(){return u.Bc(t),u.jc().onSave()}),u.Ub(1,"i",64),u.Ic(2," Guardar"),u.Yb()}if(2&t){const t=u.jc();u.pc("disabled",t.paymentForm.invalid)}}function D(t,e){if(1&t){const t=u.ac();u.Zb(0,"button",65),u.gc("click",function(){return u.Bc(t),u.jc().onResetForm()}),u.Ub(1,"i",66),u.Ic(2," Cancelar"),u.Yb()}}const E=function(){return{dateInputFormat:"DD/MM/YYYY"}};let R=(()=>{class t{constructor(t,e,a,n,o){this._commonService=t,this._notification=e,this._route=a,this._localeService=n,this._shareService=o,this.idContract=0,this.paymentList=[],this.PaymentType=0,this.clearDropofy=()=>{$(".dropify-clear").trigger("click")},this.initDropify=()=>{this.dropifyElement=$(".dropify").dropify({messages:{default:"Imagen",replace:"Imagen",remove:"Eliminar",error:"Ooops, algo paso mal"},error:{fileSize:"El tama\xf1o maximo de la imagen permitido es de ({{ value }}).",imageFormat:"El tipo de archivo es incorrecto solo se permiten imagenes de tipo {{ value }}."}})},this.getContractById=t=>{this._commonService.getContract(t).toPromise().then(t=>{this.contract=t})},this.handleFileInput=t=>{if(t)for(let e=0;e<t.length;e++){const e=t[0],a=new FileReader;a.onloadend=t=>{const n=a.result;this.imageSelected=new C.a,this.imageSelected.Base="data:"+e.type+";base64,"+btoa(n),this.imageSelected.Name=e.name},a.readAsBinaryString(e)}},this.getPaymentObject=()=>{const t=new Y;return t.Id=void 0===this.paymentSelected?0:this.paymentSelected.Id,t.IdContract=this.idContract,t.Name=this.f.nameControl.value,t.Method=this.f.methodPayControl.value,t.Date=this.f.dateControl.value,t.Amount=this.f.amountControl.value,t.Bank=this.f.bankControl.value,t.NoCheck=this.f.noCheckControl.value,t.Description=this.f.descriptionControl.value,t.Type=this.PaymentType,void 0!==this.imageSelected?(t.NameImage=this.imageSelected.Name,t.Base=this.imageSelected.Base):void 0!==this.paymentSelected&&null!==this.paymentSelected.Base&&(t.NameImage=this.paymentSelected.NameImage,t.Base=this.paymentSelected.Base),t},this.onResetForm=()=>{this.paymentForm.reset(""),this.clearDropofy(),this.imageSelected=void 0,this.paymentSelected=void 0},this.onSave=()=>{const t=this.getPaymentObject();this._commonService.onSavePayment(t).toPromise().then(t=>{this._notification.success("El pago de ha guardado correctamnete"),this.onGetAllPaymentContrac(),this.onResetForm(),this._shareService.amountResumeByContractEvent.emit()}).catch(t=>{this._notification.error("Ha ocurrido un erro al guardar el pago")})},this.onGetAllPaymentContrac=()=>{this._commonService.getAllPaymentContract(this.idContract,this.PaymentType).toPromise().then(t=>{this.paymentList=t}).catch(t=>{this._notification.error("Ha ocurrido un error al Consultar la lista de pagos")})},this.removeImage=()=>{this.paymentSelected.Base=null,this.paymentSelected.NameImage=null},this.onDeletePayment=()=>{this._commonService.OnDeletePayment(this.paymentSelected.Id).toPromise().then(t=>{this._notification.success("El pago se ha eliminado con \xe9xito"),this.onGetAllPaymentContrac()}).catch(t=>{this._notification.error("Ha ocurrido un error al eliminar el pago")})},Object(v.a)("es",v.c),this._localeService.use("es")}ngOnInit(){this.paymentForm=new i.e({nameControl:new i.b("",i.q.required),methodPayControl:new i.b("",i.q.required),dateControl:new i.b("",i.q.required),amountControl:new i.b("",i.q.required),bankControl:new i.b(""),noCheckControl:new i.b(""),descriptionControl:new i.b("")}),this._route.params.subscribe(t=>{this.idContract=void 0!==t.id?+t.id:0,this.PaymentType=void 0!==t.type?+t.type:0,this.idContract&&this.getContractById(this.idContract)}),this.clearDropofy(),this.initDropify(),this.dropifyElement.on("dropify.afterClear",()=>{this.imageSelected=void 0}),this.onGetAllPaymentContrac()}get f(){return this.paymentForm.controls}onEditPayment(t){this.paymentSelected=Object.assign({},t),this.f.nameControl.setValue(t.Name),this.f.methodPayControl.setValue(t.Method+""),this.f.dateControl.setValue(t.Date),this.f.amountControl.setValue(t.Amount),this.f.bankControl.setValue(t.Bank),this.f.noCheckControl.setValue(t.NoCheck),this.f.descriptionControl.setValue(t.Description)}onDownload(t){const e=document.createElement("a");e.href=t.Base,e.download=t.NameImage,e.click()}}return t.\u0275fac=function(e){return new(e||t)(u.Tb(m.a),u.Tb(p.a),u.Tb(y.a),u.Tb(c.d),u.Tb(h))},t.\u0275cmp=u.Nb({type:t,selectors:[["ng-component"]],inputs:{PaymentType:"PaymentType"},decls:96,vars:19,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-7"],[3,"idContract","PaymentType"],[1,"card"],[1,"card-header"],[1,"fa","fa-align-justify"],[1,"card-body"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"col-md-5"],["autocomplete","off",3,"formGroup"],[1,"form-group"],["for","company"],["type","text","id","company","placeholder","","formControlName","nameControl","maxlength","150",1,"form-control"],[1,"form-group","col-sm-6"],["for","city"],["id","",1,"form-control",3,"formControl"],["value",""],["value","0"],["value","1"],["for","postal-code"],[1,"input-group"],["type","text","size","16","readonly","","placeholder","Seleccione una fecha","formControlName","dateControl","bsDatepicker","",1,"form-control",3,"bsConfig"],["dp","bsDatepicker"],[1,"input-group-append"],[1,"btn","btn-success",3,"click"],["aria-hidden","true",1,"fa","fa-calendar"],["type","text","id","postal-code","appOnlyNumbers","","formControlName","amountControl","placeholder","",1,"form-control"],["class","form-group col-sm-6",4,"ngIf"],["class","form-group",4,"ngIf"],["for","vat"],["type","button","aria-pressed","true","tooltip","Click para remover la imagen",1,"btn","btn-danger","active",3,"hidden","click"],[1,"fa","fa-trash-o"],[3,"hidden"],["height","150",3,"src"],["type","file","data-max-file-size","20M","data-allowed-file-extensions","png jpg bmp jpeg","data-show-loader","false","data-height","150",1,"dropify",3,"change","click"],["fileInput",""],["id","description","name","textarea-input","maxlength","500","rows","3","formControlName","descriptionControl","maxlength","500",1,"form-control"],[1,"card-footer"],["type","submit","class","btn btn-primary float-right","style","margin-left: 9px","tooltip","Click para guardar los cambios del pago",3,"disabled","click",4,"ngIf"],["type","reset","class","btn btn-danger float-right","tooltip","Click para cancelar los cambios del pago",3,"click",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["dangerModal","bs-modal"],["role","document",1,"modal-dialog","modal-danger"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button","tooltip","Click para editar el pago","aria-pressed","true",1,"btn","btn-warning","active",3,"click"],[1,"fa","fa-pencil"],["type","button","class","btn btn-danger active","aria-pressed","true","tooltip","Click para eliminar el pago",3,"click",4,"ngIf"],["type","button","class","btn btn-info active","aria-pressed","true","tooltip","Click para descargar la imagen",3,"click",4,"ngIf"],["type","button","aria-pressed","true","tooltip","Click para eliminar el pago",1,"btn","btn-danger","active",3,"click"],["type","button","aria-pressed","true","tooltip","Click para descargar la imagen",1,"btn","btn-info","active",3,"click"],[1,"fa","cil-cloud-download"],["type","text","id","vat","maxlength","100","formControlName","bankControl","placeholder","",1,"form-control"],["type","text","id","vat2","maxlength","100","formControlName","noCheckControl","placeholder","",1,"form-control"],["type","submit","tooltip","Click para guardar los cambios del pago",1,"btn","btn-primary","float-right",2,"margin-left","9px",3,"disabled","click"],[1,"fa","fa-dot-circle-o"],["type","reset","tooltip","Click para cancelar los cambios del pago",1,"btn","btn-danger","float-right",3,"click"],[1,"fa","fa-ban"]],template:function(t,e){if(1&t){const t=u.ac();u.Hc(0,k,2,1,"h3",0),u.Hc(1,S,2,1,"h3",0),u.Zb(2,"div",1),u.Zb(3,"div",2),u.Ub(4,"app-amount-resume",3),u.Zb(5,"div",4),u.Zb(6,"div",5),u.Ub(7,"i",6),u.Ic(8," Imagenes del contrato "),u.Yb(),u.Zb(9,"div",7),u.Zb(10,"table",8),u.Zb(11,"thead"),u.Zb(12,"tr"),u.Zb(13,"th"),u.Ic(14,"#"),u.Yb(),u.Zb(15,"th"),u.Ic(16,"Nombre"),u.Yb(),u.Zb(17,"th"),u.Ic(18,"Cantidad"),u.Yb(),u.Zb(19,"th"),u.Ic(20,"Acciones"),u.Yb(),u.Yb(),u.Yb(),u.Zb(21,"tbody"),u.Hc(22,T,13,7,"tr",9),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Zb(23,"div",10),u.Zb(24,"div",4),u.Zb(25,"div",5),u.Zb(26,"strong"),u.Ic(27,"Registro de pago"),u.Yb(),u.Yb(),u.Zb(28,"div",7),u.Zb(29,"form",11),u.Zb(30,"div",12),u.Zb(31,"label",13),u.Ic(32,"Nombre del beneficiario"),u.Yb(),u.Ub(33,"input",14),u.Yb(),u.Zb(34,"div",1),u.Zb(35,"div",15),u.Zb(36,"label",16),u.Ic(37,"Metodo de pago"),u.Yb(),u.Zb(38,"select",17),u.Zb(39,"option",18),u.Ic(40,"Seleccione un metodo de pago"),u.Yb(),u.Zb(41,"option",19),u.Ic(42,"Cheque"),u.Yb(),u.Zb(43,"option",20),u.Ic(44,"Efectivo"),u.Yb(),u.Yb(),u.Yb(),u.Zb(45,"div",15),u.Zb(46,"label",21),u.Ic(47,"Fecha"),u.Yb(),u.Zb(48,"div",22),u.Ub(49,"input",23,24),u.Zb(51,"span",25),u.Zb(52,"button",26),u.gc("click",function(){return u.Bc(t),u.zc(50).toggle()}),u.Ub(53,"i",27),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Zb(54,"div",1),u.Zb(55,"div",15),u.Zb(56,"label",21),u.Ic(57,"Monto"),u.Yb(),u.Ub(58,"input",28),u.Yb(),u.Hc(59,B,4,0,"div",29),u.Yb(),u.Hc(60,x,4,0,"div",30),u.Zb(61,"div",12),u.Zb(62,"label",31),u.Ic(63,"Imagen \xa0 "),u.Zb(64,"button",32),u.gc("click",function(){return e.removeImage()}),u.Ub(65,"i",33),u.Yb(),u.Yb(),u.Zb(66,"div",34),u.Ub(67,"img",35),u.Yb(),u.Zb(68,"div",34),u.Zb(69,"input",36,37),u.gc("change",function(t){return e.handleFileInput(t.target.files)})("click",function(){return u.Bc(t),u.zc(70).value=null}),u.Yb(),u.Yb(),u.Yb(),u.Zb(71,"div",12),u.Zb(72,"label",31),u.Ic(73,"Descripci\xf3n"),u.Yb(),u.Ub(74,"textarea",38),u.Yb(),u.Yb(),u.Yb(),u.Zb(75,"div",39),u.Hc(76,N,3,1,"button",40),u.Hc(77,D,3,0,"button",41),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Zb(78,"div",42,43),u.Zb(80,"div",44),u.Zb(81,"div",45),u.Zb(82,"div",46),u.Zb(83,"h4",47),u.Ic(84,"Mensaje del sistema"),u.Yb(),u.Zb(85,"button",48),u.gc("click",function(){return u.Bc(t),u.zc(79).hide()}),u.Zb(86,"span",49),u.Ic(87,"\xd7"),u.Yb(),u.Yb(),u.Yb(),u.Zb(88,"div",50),u.Zb(89,"h5"),u.Ic(90),u.Yb(),u.Yb(),u.Zb(91,"div",51),u.Zb(92,"button",52),u.gc("click",function(){return u.Bc(t),u.zc(79).hide()}),u.Ic(93,"Cancelar"),u.Yb(),u.Zb(94,"button",53),u.gc("click",function(){u.Bc(t);const a=u.zc(79);return e.onDeletePayment(),a.hide()}),u.Ic(95,"\xa0\xa0S\xed \xa0\xa0"),u.Yb(),u.Yb(),u.Yb(),u.Yb(),u.Yb()}if(2&t){const t=u.zc(50);u.pc("ngIf",0===e.PaymentType),u.Hb(1),u.pc("ngIf",1===e.PaymentType),u.Hb(3),u.pc("idContract",e.idContract)("PaymentType",e.PaymentType),u.Hb(18),u.pc("ngForOf",e.paymentList),u.Hb(7),u.pc("formGroup",e.paymentForm),u.Hb(9),u.pc("formControl",e.f.methodPayControl),u.Hb(11),u.pc("bsConfig",u.sc(18,E)),u.Hb(3),u.Ib("aria-expanded",t.isOpen),u.Hb(7),u.pc("ngIf","0"===e.f.methodPayControl.value),u.Hb(1),u.pc("ngIf","0"===e.f.methodPayControl.value),u.Hb(4),u.pc("hidden",null===(null==e.paymentSelected?null:e.paymentSelected.Base)),u.Hb(2),u.pc("hidden",null===(null==e.paymentSelected?null:e.paymentSelected.Base)),u.Hb(1),u.qc("src",null==e.paymentSelected?null:e.paymentSelected.Base,u.Dc),u.Hb(1),u.pc("hidden",null!==(null==e.paymentSelected?null:e.paymentSelected.Base)),u.Hb(8),u.pc("ngIf",!(null!=e.contract&&e.contract.IsFinalize)),u.Hb(1),u.pc("ngIf",!(null!=e.contract&&e.contract.IsFinalize)),u.Hb(13),u.Kc("Est\xe1 seguro que desea eliminar el registro de pago ",null==e.paymentSelected?null:e.paymentSelected.Name," del contrato?")}},directives:[n.m,I,n.l,i.s,i.l,i.f,i.a,i.k,i.d,i.h,i.p,i.c,i.n,i.r,c.b,c.a,P.a,l.a,r.a],pipes:[n.d],encapsulation:2}),t})();var _=a("EDVH");const j=[{path:"",data:{title:"Pagos"},children:[{path:"",redirectTo:"payment-contract"},{path:"payment-contract",component:(()=>{class t{constructor(){this.disableEdit=!0,this.disableCancel=!0,this.disablePamentContract=!1,this.disablePamentWater=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Nb({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[[3,"disableEdit","disableCancel","disablePamentContract","disablePamentWater"]],template:function(t,e){1&t&&u.Ub(0,"app-contract-list",0),2&t&&u.pc("disableEdit",e.disableEdit)("disableCancel",e.disableCancel)("disablePamentContract",e.disablePamentContract)("disablePamentWater",e.disablePamentWater)},directives:[_.a],encapsulation:2}),t})(),data:{title:"Pago de contrato"}},{path:"payment-contract-register",component:R,data:{title:"Registro pago de contracto"}},{path:"payment-water",component:(()=>{class t{constructor(){this.disableEdit=!0,this.disableCancel=!0,this.disablePamentContract=!0,this.disablePamentWater=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Nb({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[[3,"disableEdit","disableCancel","disablePamentContract","disablePamentWater"]],template:function(t,e){1&t&&u.Ub(0,"app-contract-list",0),2&t&&u.pc("disableEdit",e.disableEdit)("disableCancel",e.disableCancel)("disablePamentContract",e.disablePamentContract)("disablePamentWater",e.disablePamentWater)},directives:[_.a],encapsulation:2}),t})(),data:{title:"Pago de agua"}}]}];let F=(()=>{class t{}return t.\u0275mod=u.Rb({type:t}),t.\u0275inj=u.Qb({factory:function(e){return new(e||t)},imports:[[y.g.forChild(j)],y.g]}),t})(),U=(()=>{class t{}return t.\u0275mod=u.Rb({type:t}),t.\u0275inj=u.Qb({factory:function(e){return new(e||t)},providers:[m.a,p.a,h],imports:[[n.c,F,i.g,o.b,b.a,i.o,g.a,d.a.forRoot(),s.b.forRoot({}),c.c.forRoot(),r.b.forRoot(),l.b.forRoot(),f.CatalogoModule]]}),t})()}}]);