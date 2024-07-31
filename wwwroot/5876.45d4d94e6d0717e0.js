"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[5876],{93416:(E,_,r)=>{r.d(_,{U:()=>v});var o=r(94650),d=r(11481);class v{constructor(f){this.sanitizer=f}ngOnInit(){this.imageSrc=this.sanitizer.bypassSecurityTrustResourceUrl(`data:${this.archivoTipoMime};base64,${this.archivo}`)}cancelar(){this.onCloseCallback&&this.onCloseCallback(!0)}static#e=this.\u0275fac=function(u){return new(u||v)(o.Y36(d.H7))};static#t=this.\u0275cmp=o.Xpm({type:v,selectors:[["app-imagen-visor"]],inputs:{archivo:"archivo",nombreImagen:"nombreImagen",archivoTipoMime:"archivoTipoMime"},decls:12,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","offset-md-3"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["alt","Imagen",1,"img-fluid",3,"src"]],template:function(u,l){1&u&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div"),o._uU(6),o.qZA(),o.TgZ(7,"button",5),o.NdJ("click",function(){return l.cancelar()}),o.TgZ(8,"span",6),o._uU(9,"\xd7"),o.qZA()()(),o.TgZ(10,"div",7),o._UZ(11,"img",8),o.qZA()()()()()),2&u&&(o.xp6(6),o.Oqu(l.nombreImagen),o.xp6(5),o.Q6J("src",l.imageSrc,o.LSH))}})}},4837:(E,_,r)=>{r.d(_,{x:()=>x});var o=r(94650),d=r(19904),v=r(93416),h=r(44826),f=r(50986),u=r(20388),l=r(24006);const A=["inputArchivo"];class x{constructor(C,m){this.modalService=C,this.bsModalRef=m,this.label="Etiqueta",this.habilitado=!1,this.contieneAyuda=!0,this.archivoDto=new o.vpe,this.idArchivoDescarga=new o.vpe,this.idArchivoAyuda=new o.vpe}ngOnInit(){0==this.nombreArchivo.length&&(this.nombreArchivo="Archivo - Fecha - Hora")}previsualizar(){this.tipoMime.startsWith("image/")?this.previsualizarImagen():(this.bsModalRef=this.modalService.show(h.O,f.g.CONFIG_MODAL_DEFAULT),this.bsModalRef.content.archivo=this.archivo,this.bsModalRef.content.nombre=this.nombreArchivo,this.bsModalRef.content.archivoNombre=this.nombreArchivo,this.bsModalRef.content.onClose=C=>{this.bsModalRef.hide()})}previsualizarImagen(){const C={initialState:{archivo:this.archivo,nombreImagen:this.nombreArchivo,archivoTipoMime:this.tipoMime,onCloseCallback:m=>{this.bsModalRef.hide()}},...f.g.CONFIG_MODAL_DEFAULT};this.bsModalRef=this.modalService.show(v.U,C)}previsualizarAyuda(){this.idArchivoAyuda.emit(this.idRegistroArchivoAyuda)}fileChange(C){if(C.target.files&&C.target.files[0]){this.inputArchivo.control.markAsTouched();const m=new FileReader,g=C.target.files[0];m.readAsDataURL(g),m.onload=()=>{this.archivo=m.result.toString().split(",")[1],this.tipoMime=g.type,this.nombreArchivo=g.name;let e=new d.q;e.idArchivo=this.idRegistroArchivo,e.archivo=this.archivo,e.nombreArchivo=this.nombreArchivo,e.tipoMime=this.tipoMime,this.archivoDto.emit(e)}}}getElement(){document.getElementById(this.id).click()}descargarArchivo(){this.downl_endpoint(this.idRegistroArchivo).subscribe(m=>{if("vacio"!=m.tipoMime){let e,R=((m,g="",e=512)=>{const R=atob(m),N=[];for(let M=0;M<R.length;M+=e){const p=R.slice(M,M+e),y=new Array(p.length);for(let T=0;T<p.length;T++)y[T]=p.charCodeAt(T);const L=new Uint8Array(y);N.push(L)}return new Blob(N,{type:g})})(m.archivo,m.tipoMime);e=URL.createObjectURL(R);var g=document.createElement("a");g.href=e,g.download=m.nombreArchivo,g.click()}})}static#e=this.\u0275fac=function(m){return new(m||x)(o.Y36(u.tT),o.Y36(u.UZ))};static#t=this.\u0275cmp=o.Xpm({type:x,selectors:[["app-input-archivo"]],viewQuery:function(m,g){if(1&m&&o.Gf(A,5),2&m){let e;o.iGM(e=o.CRH())&&(g.inputArchivo=e.first)}},inputs:{label:"label",nombreArchivo:"nombreArchivo",archivo:"archivo",tipoMime:"tipoMime",fechaEvidencia:"fechaEvidencia",categoria:"categoria",habilitado:"habilitado",contieneAyuda:"contieneAyuda",id:"id",indice1:"indice1",indice2:"indice2",idRegistroArchivo:"idRegistroArchivo",idRegistroArchivoAyuda:"idRegistroArchivoAyuda",downl_endpoint:"downl_endpoint"},outputs:{archivoDto:"archivoDto",idArchivoDescarga:"idArchivoDescarga",idArchivoAyuda:"idArchivoAyuda"},decls:16,vars:8,consts:[[1,"form-group",2,"margin-top","40px"],[1,"label-input","required-label",2,"margin-left","30px","margin-top","-5px","font-size","12px"],[1,"d-flex","justify-content-around"],["type","button",1,"btn-subir",3,"disabled","click"],["src","assets/img/svg/ico-15x15-Boton-Circular-Naranja-Subir_Archivo-Cargar.svg",1,"icono"],["ngModel","","type","file","autocomplete","off",1,"col-md-7",3,"id","name","hidden","change"],["inputArchivo","ngModel"],["name","nombre","type","text","maxlength","100","readonly","","disabled","",1,"form-control",2,"height","calc(1.5em + 0.75rem + 7px)  !important",3,"ngModel","ngModelChange"],["nombre","ngModel"],["src","assets/img/svg/ico-15x15-Boton-Circular-Naranja-Ver_Archivo.svg",1,"icono"],["type","button",1,"btn-subir",3,"click"],["src","assets/img/svg/ico-15x15-Boton-Circular-Naranja-Descargar.svg",1,"icono"],["type","button",1,"btn-subir","btn-ayuda",3,"disabled","click"],["src","assets/img/svg/ico-15x15-Boton-Circular-Amarillo-Ayuda.svg",1,"icono"]],template:function(m,g){1&m&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.qZA(),o.TgZ(3,"div",2)(4,"button",3),o.NdJ("click",function(){return g.getElement()}),o._UZ(5,"img",4),o.qZA(),o.TgZ(6,"input",5,6),o.NdJ("change",function(R){return g.fileChange(R)}),o.qZA(),o.TgZ(8,"input",7,8),o.NdJ("ngModelChange",function(R){return g.nombreArchivo=R}),o.qZA(),o.TgZ(10,"button",3),o.NdJ("click",function(){return g.previsualizar()}),o._UZ(11,"img",9),o.qZA(),o.TgZ(12,"button",10),o.NdJ("click",function(){return g.descargarArchivo()}),o._UZ(13,"img",11),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return g.previsualizarAyuda()}),o._UZ(15,"img",13),o.qZA()()()),2&m&&(o.xp6(2),o.Oqu(g.label),o.xp6(2),o.Q6J("disabled",g.habilitado),o.xp6(2),o.Q6J("id",g.id)("name",g.label)("hidden",!0),o.xp6(2),o.Q6J("ngModel",g.nombreArchivo),o.xp6(2),o.Q6J("disabled",g.habilitado),o.xp6(4),o.Q6J("disabled",!g.contieneAyuda))},dependencies:[l.Fj,l.JJ,l.nD,l.On],styles:["[_ngcontent-%COMP%]:root{--color-primario: #3f75d2;--color-primario-hover: #F9EFFB;--color-menu: #3f75d2}.btn-subir[_ngcontent-%COMP%]{font-size:small;color:#fbe5d6;padding:0;margin:1px 5px;height:calc(1.3em + .7rem + 6px);background-color:transparent;transition:.2s;border:none;color:#fff;font-size:14px;text-align:center;border-radius:20px;text-wrap:true;max-width:100%;max-height:100%;align-content:center}.form-control[_ngcontent-%COMP%]{color:gray}.icono[_ngcontent-%COMP%]{height:80%;background-color:transparent;border-radius:50%}.icono[_ngcontent-%COMP%]:hover{background-color:#f3f3f3}.btn-ayuda[_ngcontent-%COMP%]:disabled{opacity:0}"]})}},98520:(E,_,r)=>{r.d(_,{G:()=>h});var o=r(36895),d=r(24006),v=r(94650);class h{static#e=this.\u0275fac=function(l){return new(l||h)};static#t=this.\u0275mod=v.oAB({type:h});static#i=this.\u0275inj=v.cJS({imports:[o.ez,d.u5]})}},44826:(E,_,r)=>{r.d(_,{O:()=>v});var o=r(94650),d=r(3930);class v{constructor(){this.height="80vh"}ngOnInit(){}cancelar(){this.onClose(!0)}static#e=this.\u0275fac=function(u){return new(u||v)};static#t=this.\u0275cmp=o.Xpm({type:v,selectors:[["app-pdf-visor"]],inputs:{archivo:"archivo",nombre:"nombre",archivoNombre:"archivoNombre",height:"height"},decls:7,vars:6,consts:[[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],[3,"base64Src","filenameForDownload","useBrowserLocale","zoom","height"]],template:function(u,l){1&u&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div"),o._uU(3),o.qZA(),o.TgZ(4,"button",2),o.NdJ("click",function(){return l.cancelar()}),o._UZ(5,"i",3),o.qZA()(),o._UZ(6,"ngx-extended-pdf-viewer",4),o.qZA()),2&u&&(o.xp6(3),o.hij("",l.nombre," "),o.xp6(3),o.Q6J("base64Src",l.archivo)("filenameForDownload",l.archivoNombre)("useBrowserLocale",!0)("zoom","page-actual")("height",l.height))},dependencies:[d.S3]})}},19904:(E,_,r)=>{r.d(_,{q:()=>o});class o{}},12846:(E,_,r)=>{r.d(_,{Y:()=>h});var o=r(50986),d=r(94650),v=r(2060);class h{constructor(u){this.modalMensajeService=u}validarCamposRequeridos(u){Object.keys(u.controls).forEach(l=>{const A=u.controls[l];A.markAsTouched({onlySelf:!0}),A.markAsDirty({onlySelf:!0})})}validarCamposRequeridosConMensaje(u){Object.keys(u.controls).forEach(l=>{const A=u.controls[l];A.markAsTouched({onlySelf:!0}),A.markAsDirty({onlySelf:!0})}),Object.keys(u.controls).some(l=>{const A=u.controls[l];return!!(A.errors&&A.errors.required&&A.invalid)&&(this.modalMensajeService.modalError(o.g.MENSAJE_REQUERIDOS),!0)})}markAsUntouched(u){Object.keys(u.controls).forEach(l=>{u.controls[l].markAsUntouched({onlySelf:!0})})}static#e=this.\u0275fac=function(l){return new(l||h)(d.LFG(v.V))};static#t=this.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}},40675:(E,_,r)=>{r.d(_,{V_:()=>d,aQ:()=>h,vf:()=>v});var d,f;r(40675);(f=d||(d={})).Agregar="Agregar",f.Editar="Editar",f.Ver="Consultar";const v="Seleccione una opci\xf3n",h="No hay opciones disponibles"},14815:(E,_,r)=>{var o,d;r.d(_,{m:()=>o}),(d=o||(o={})).Cruz="fa fa-times",d.Pesos="fa fa-dollar-sign",d.Cambio="fas fa-exchange-alt",d.CheckOut="fas fa-door-open",d.Exito="fas fa-check"},94540:(E,_,r)=>{r.d(_,{gy:()=>d,sO:()=>v});var d,h;r(94540);(h=d||(d={})).Editar="edit",h.Eliminar="delete",h.Ver="see",h.DescargarPdf="DescargarPdf",h.Revisar="Revisar",h.Presentar="presentar";const v={headerName:"",field:"",cellClass:"center-ag",minWidth:44,maxWidth:44,suppressMovable:!0,resizable:!1,filter:!1,lockPinned:!0,pinned:"right",lockPosition:!0}},25876:(E,_,r)=>{r.r(_),r.d(_,{ReactivoModule:()=>J});var o=r(36895),d=r(20388),v=r(71436),h=r(9116),f=r(31321),u=r(13050),l=r(40675),A=r(14815),x=r(94540),U=r(52522),C=r(73562),m=r(50986);class g{constructor(){}}var e=r(94650),R=r(12846),N=r(2060),P=r(80529);class M{constructor(i){this.http=i,this.dataUrl="respuesta/"}consultarTodosPorReactivo(i){return this.http.get(this.dataUrl+`consultarTodosPorReactivo/${i}`)}consultarParaFormulario(i){return this.http.get(this.dataUrl+`consultar/${i}`)}agregar(i){return this.http.post(this.dataUrl+"agregar",i)}editar(i){return this.http.put(this.dataUrl+"editar",i)}eliminar(i){return this.http.delete(this.dataUrl+`eliminar/${i}`)}static#e=this.\u0275fac=function(t){return new(t||M)(e.LFG(P.eN))};static#t=this.\u0275prov=e.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}var p=r(24006);function y(s,i){1&s&&(e.TgZ(0,"div",32),e._uU(1," La clave es requerida "),e.qZA())}function L(s,i){1&s&&(e.TgZ(0,"div",32),e._uU(1," La asignatura es requerida "),e.qZA())}class T{constructor(i,t,a){this.formularioService=i,this.mensajeService=t,this.respuestaService=a,this.MENSAJE_AGREGAR="La respuesta ha sido agregado",this.MENSAJE_EDITAR="La respuesta ha sido modificado",this.submitting=!1,this.resp=new g}ngOnInit(){console.log(this.resp),this.resp.idReactivo=this.idReactivo,null==this.resp.respuestaCorrecta&&(this.resp.respuestaCorrecta=!1)}cancelar(){this.onClose(!1)}enviarFormulario(i){if(this.submitting=!0,!i.valid)return this.formularioService.validarCamposRequeridos(i),void(this.submitting=!1);this.accion===l.V_.Agregar?this.agregar():this.accion===l.V_.Editar&&this.editar()}agregar(){this.respuestaService.agregar(this.resp).subscribe({next:()=>{this.mensajeService.modalExito(this.MENSAJE_AGREGAR),this.onClose(!0)},error:i=>{this.submitting=!1}})}editar(){this.respuestaService.editar(this.resp).subscribe({next:()=>{this.mensajeService.modalExito(this.MENSAJE_EDITAR),this.onClose(!0)},error:i=>{this.submitting=!1}})}static#e=this.\u0275fac=function(t){return new(t||T)(e.Y36(R.Y),e.Y36(N.V),e.Y36(M))};static#t=this.\u0275cmp=e.Xpm({type:T,selectors:[["app-respuesta-formulario"]],decls:56,vars:11,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],["id","modal",1,"modal-body"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","maxlength","30",1,"form-control",3,"ngModel","required","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],[1,"col-md-12"],["name","respuesta1",1,"respuestaTextArea","form-control",3,"ngModel","required","ngModelChange"],["respuesta","ngModel"],["name","valor","type","number","min","0","maxlength","30",1,"form-control",3,"ngModel","ngModelChange"],["valor","ngModel"],[1,"label-input","required-label",2,"margin-top","10px","margin-bottom","-10px"],[1,"switch"],["checked","checked","id","correcta","name","correcta","type","checkbox",1,"accent",3,"ngModel","ngModelChange"],["correcta",""],[1,"slider","round"],[1,"on"],[1,"off"],[1,"modal-footer"],[1,"text-right"],["type","button",1,"btn-secundario","mr-3",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"],[1,"error"]],template:function(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return a.cancelar()}),e._UZ(7,"i",5),e.qZA()(),e.TgZ(8,"form",6,7),e.NdJ("keydown.enter",function(b){return b.preventDefault()})("ngSubmit",function(){e.CHM(n);const b=e.MAs(9);return e.KtG(a.enviarFormulario(b))}),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"label",12),e._uU(15,"Identificador"),e.qZA(),e.TgZ(16,"div")(17,"input",13,14),e.NdJ("ngModelChange",function(b){return a.resp.clave=b}),e.qZA()(),e.YNc(19,y,2,0,"div",15),e.qZA()()(),e.TgZ(20,"div",9)(21,"div",16)(22,"div",11)(23,"label",12),e._uU(24,"Respuesta"),e.qZA(),e.TgZ(25,"div")(26,"textarea",17,18),e.NdJ("ngModelChange",function(b){return a.resp.respuesta1=b}),e.qZA()(),e.YNc(28,L,2,0,"div",15),e.qZA()()(),e.TgZ(29,"div",9)(30,"div",10)(31,"div",11)(32,"label",12),e._uU(33,"Valor"),e.qZA(),e.TgZ(34,"div")(35,"input",19,20),e.NdJ("ngModelChange",function(b){return a.resp.valor=b}),e.qZA()()()()(),e.TgZ(37,"div",9)(38,"div",10)(39,"label",21),e._uU(40,"\xbfRespuesta Correcta?"),e.qZA(),e._UZ(41,"br"),e.TgZ(42,"label",22)(43,"input",23,24),e.NdJ("ngModelChange",function(b){return a.resp.respuestaCorrecta=b}),e.qZA(),e.TgZ(45,"span",25)(46,"span",26),e._uU(47,"S\xed"),e.qZA(),e.TgZ(48,"span",27),e._uU(49,"No"),e.qZA()()()()()(),e.TgZ(50,"div",28)(51,"div",29)(52,"button",30),e.NdJ("click",function(){return a.cancelar()}),e._uU(53," Cancelar "),e.qZA(),e.TgZ(54,"button",31),e._uU(55," Guardar Respuesta "),e.qZA()()()()()()}if(2&t){const n=e.MAs(18),c=e.MAs(27);e.xp6(5),e.hij("",a.accion," Respuesta"),e.xp6(12),e.Q6J("ngModel",a.resp.clave)("required",!0)("disabled","Editar"==a.accion),e.xp6(2),e.Q6J("ngIf",(null==n.errors?null:n.errors.required)&&n.touched),e.xp6(7),e.Q6J("ngModel",a.resp.respuesta1)("required",!0),e.xp6(2),e.Q6J("ngIf",(null==c.errors?null:c.errors.required)&&c.touched),e.xp6(7),e.Q6J("ngModel",a.resp.valor),e.xp6(8),e.Q6J("ngModel",a.resp.respuestaCorrecta),e.xp6(11),e.Q6J("disabled",a.submitting)}},dependencies:[o.O5,p._Y,p.Fj,p.wV,p.Wl,p.JJ,p.JL,p.Q7,p.nD,p.qQ,p.On,p.F],styles:['@charset "UTF-8";.switch[_ngcontent-%COMP%]{top:1px;height:calc(1.5em + .8rem + 10px);width:110px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{background-color:#fff;transform:translate(70px)}.switch[_ngcontent-%COMP%]   input.accent[_ngcontent-%COMP%]:checked + .slider.round[_ngcontent-%COMP%]{background-color:#ed7d31}.switch[_ngcontent-%COMP%]   input.accent[_ngcontent-%COMP%]:checked + .slider.round[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%]{color:#fff}.respuestaTextArea[_ngcontent-%COMP%]{height:9em!important}']})}class Z{constructor(i){this.http=i,this.dataUrl="reactivo/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(i){return this.http.get(this.dataUrl+`consultar/${i}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(i){return this.http.post(this.dataUrl+"agregar",i)}editar(i){return this.http.put(this.dataUrl+"editar",i)}eliminar(i){return this.http.delete(this.dataUrl+`eliminar/${i}`)}consultarArchivo(i){return this.http.get(this.dataUrl+`consultarArchivo/${i}`)}static#e=this.\u0275fac=function(t){return new(t||Z)(e.LFG(P.eN))};static#t=this.\u0275prov=e.Yz7({token:Z,factory:Z.\u0275fac,providedIn:"root"})}var D=r(21722),q=r(66606),G=r(11481),Q=r(28229),k=r(88796),Y=r(4837),w=r(58390);function B(s,i){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.hij("",t.accion," Reactivo")}}function K(s,i){1&s&&(e.TgZ(0,"div"),e._uU(1,"Ver Respuestas"),e.qZA())}function H(s,i){1&s&&(e.TgZ(0,"div",25),e._uU(1," La clave es requerida "),e.qZA())}function W(s,i){1&s&&(e.TgZ(0,"div",25),e._uU(1," La asignatura es requerida "),e.qZA())}function j(s,i){1&s&&(e.TgZ(0,"div",25),e._uU(1," El nivel es requerido "),e.qZA())}function V(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"label",17),e._uU(4,"Clave"),e.qZA(),e.TgZ(5,"div")(6,"input",18,19),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.clave=n)}),e.qZA()(),e.YNc(8,H,2,0,"div",20),e.qZA()(),e.TgZ(9,"div",15)(10,"div",16)(11,"label",17),e._uU(12,"Asignatura"),e.qZA(),e.TgZ(13,"div")(14,"ng-select",21,22),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.idAsignatura=n)}),e.qZA()(),e.YNc(16,W,2,0,"div",20),e.qZA()(),e.TgZ(17,"div",15)(18,"div",16)(19,"label",17),e._uU(20,"Nivel"),e.qZA(),e.TgZ(21,"div")(22,"ng-select",23,24),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.idNivelExamen=n)}),e.qZA()(),e.YNc(24,j,2,0,"div",20),e.qZA()()()}if(2&s){const t=e.MAs(7),a=e.MAs(15),n=e.MAs(23),c=e.oxw();e.xp6(6),e.Q6J("ngModel",c.reactivo.clave)("required",!0)("disabled","Editar"==c.accion),e.xp6(2),e.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),e.xp6(6),e.Q6J("items",c.asignaturaList)("required",!0)("ngModel",c.reactivo.idAsignatura)("placeholder",c.placeHolderSelect)("notFoundText",c.placeHolderNoOptions),e.xp6(2),e.Q6J("ngIf",(null==a.errors?null:a.errors.required)&&a.touched),e.xp6(6),e.Q6J("items",c.nivelExamenList)("required",!0)("ngModel",c.reactivo.idNivelExamen)("placeholder",c.placeHolderSelect)("notFoundText",c.placeHolderNoOptions),e.xp6(2),e.Q6J("ngIf",(null==n.errors?null:n.errors.required)&&n.touched)}}function z(s,i){1&s&&(e.TgZ(0,"div",25),e._uU(1," La pregunta es requerida "),e.qZA())}function $(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",26)(2,"div",16)(3,"label",17),e._uU(4,"Pregunta"),e.qZA(),e.TgZ(5,"div")(6,"textarea",27,28),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.pregunta=n)}),e.qZA()(),e.YNc(8,z,2,0,"div",20),e.qZA()()()}if(2&s){const t=e.MAs(7),a=e.oxw();e.xp6(6),e.Q6J("ngModel",a.reactivo.pregunta)("required",!0),e.xp6(2),e.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched)}}function X(s,i){1&s&&(e.TgZ(0,"div",29),e._uU(1," Imagen de Soporte visual "),e.qZA())}function ee(s,i){if(1&s&&e._UZ(0,"img",34),2&s){const t=e.oxw(2);e.Q6J("src",t.imagenBase64,e.LSH)}}function te(s,i){if(1&s&&e._UZ(0,"img",34),2&s){const t=e.oxw(2);e.Q6J("src",t.URL_IMAGEN_DEFAULT,e.LSH)}}function ie(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"div",16),e._UZ(3,"label",17),e.TgZ(4,"div")(5,"app-input-archivo",30),e.NdJ("archivoDto",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.recibirImagen(n))})("downl_endpoint",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.downl_endpoint.bind(n))}),e.qZA()()()(),e.TgZ(6,"div",15)(7,"div",31),e.YNc(8,ee,1,1,"img",32),e.YNc(9,te,1,1,"img",32),e.qZA()(),e.TgZ(10,"div",15)(11,"button",33),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.borrarImagen())}),e._uU(12," Limpiar Imagen "),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(5),e.Q6J("label","Cargar Imagen")("contieneAyuda",!1)("id","archivoImagen")("idRegistroArchivo",t.reactivo.idReactivo)("nombreArchivo",t.reactivo.imagenNombre),e.xp6(3),e.Q6J("ngIf",t.reactivo.imagen),e.xp6(1),e.Q6J("ngIf",!t.reactivo.imagen)}}function oe(s,i){1&s&&(e.TgZ(0,"div",29),e._uU(1," Respuestas a Mostrar "),e.qZA())}function ae(s,i){1&s&&(e.TgZ(0,"div",25),e._uU(1," La clasificacion es requerida "),e.qZA())}function ne(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"div",14)(3,"div",15)(4,"label",35),e._uU(5,"Escala de Likert"),e.qZA(),e.TgZ(6,"label",36)(7,"input",37,38),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.escalaLikert=n)})("ngModelChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cambiosReglasNegocio())}),e.qZA(),e.TgZ(9,"span",39)(10,"span",40),e._uU(11,"S\xed"),e.qZA(),e.TgZ(12,"span",41),e._uU(13,"No"),e.qZA()()()(),e.TgZ(14,"div",42)(15,"div",43)(16,"label",17),e._uU(17,"Clasificaci\xf3n Pregunta"),e.qZA(),e.TgZ(18,"div")(19,"ng-select",44,45),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.idClasificacionPregunta=n)}),e.qZA()(),e.YNc(21,ae,2,0,"div",20),e.qZA()()()(),e.TgZ(22,"div",15)(23,"div",15)(24,"label",35),e._uU(25,"Pregunta Abierta"),e.qZA(),e.TgZ(26,"label",36)(27,"input",46,47),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.abierta=n)})("ngModelChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cambiosReglasNegocio())}),e.qZA(),e.TgZ(29,"span",39)(30,"span",40),e._uU(31,"S\xed"),e.qZA(),e.TgZ(32,"span",41),e._uU(33,"No"),e.qZA()()()()(),e.TgZ(34,"div",15)(35,"div",14)(36,"div",48)(37,"label",35),e._uU(38,"\xbfNecesita Revisi\xf3n?"),e.qZA(),e.TgZ(39,"label",36)(40,"input",49,50),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.necesitaRevision=n)}),e.qZA(),e.TgZ(42,"span",39)(43,"span",40),e._uU(44,"S\xed"),e.qZA(),e.TgZ(45,"span",41),e._uU(46,"No"),e.qZA()()()()()()()}if(2&s){const t=e.MAs(20),a=e.oxw();e.xp6(7),e.Q6J("ngModel",a.reactivo.escalaLikert)("disabled",a.reactivo.abierta),e.xp6(12),e.Q6J("items",a.clasificacionPreguntaList)("required",!0)("ngModel",a.reactivo.idClasificacionPregunta)("placeholder",a.placeHolderSelect)("notFoundText",a.placeHolderNoOptions)("required",a.reactivo.escalaLikert)("disabled",!a.reactivo.escalaLikert||a.reactivo.abierta),e.xp6(2),e.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),e.xp6(6),e.Q6J("ngModel",a.reactivo.abierta)("disabled",a.reactivo.escalaLikert),e.xp6(13),e.Q6J("ngModel",a.reactivo.necesitaRevision)}}function re(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"button",51),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.abrirRespuesta())}),e._uU(3," Agregar Respuesta "),e.qZA()(),e.TgZ(4,"div",15)(5,"div",15)(6,"label",35),e._uU(7,"Respuesta Simple"),e.qZA(),e.TgZ(8,"label",36)(9,"input",52,53),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.simple=n)})("ngModelChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cambiosReglasNegocio())}),e.qZA(),e.TgZ(11,"span",39)(12,"span",40),e._uU(13,"S\xed"),e.qZA(),e.TgZ(14,"span",41),e._uU(15,"No"),e.qZA()()()()(),e.TgZ(16,"div",15)(17,"div",14)(18,"div",48)(19,"label",35),e._uU(20,"Respuesta M\xfaltiple"),e.qZA(),e.TgZ(21,"label",36)(22,"input",54,55),e.NdJ("ngModelChange",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.reactivo.multiple=n)})("ngModelChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cambiosReglasNegocio())}),e.qZA(),e.TgZ(24,"span",39)(25,"span",40),e._uU(26,"S\xed"),e.qZA(),e.TgZ(27,"span",41),e._uU(28,"No"),e.qZA()()()()()()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("disabled",t.reactivo.abierta||"Agregar"===t.accion||t.reactivo.escalaLikert)("hidden","Agregar"===t.accion),e.xp6(7),e.Q6J("disabled",t.reactivo.escalaLikert||t.reactivo.abierta||t.reactivo.multiple)("ngModel",t.reactivo.simple),e.xp6(13),e.Q6J("disabled",t.reactivo.escalaLikert||t.reactivo.abierta||t.reactivo.simple)("ngModel",t.reactivo.multiple)}}function se(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",56)(1,"div",57)(2,"app-grid-general",58,59),e.NdJ("event",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.onGridClick(n))}),e.qZA()()()}if(2&s){const t=e.oxw();e.Q6J("hidden","Agregar"===t.accion),e.xp6(2),e.Q6J("disableXLS",!0)("data",t.respuestasList)("children",t.preguntasColumns)("accesoEditar",t.accesoEditarRespuesta)("accesoEliminar",t.accesoEliminarRespuesta)("disableEdit",t.reactivo.escalaLikert)("disableDelete",t.reactivo.escalaLikert)}}function ce(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",26)(2,"app-grid-general",60,59),e.NdJ("event",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.onGridClick(n))}),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("disableXLS",!0)("data",t.respuestasList)("children",t.preguntasColumns)("accesoEditar",t.noAcceso)("accesoEliminar",t.noAcceso)}}function le(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",61)(1,"div",62)(2,"button",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancelar())}),e._uU(3,"Cancelar "),e.qZA(),e.TgZ(4,"button",64),e._uU(5," Guardar Reactivo "),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(4),e.Q6J("disabled",t.submitting)}}function de(s){return`<svg width="106" height="28" xmlns="http://www.w3.org/2000/svg">\n    \n    <rect x="5%" y="15%" width="18" height="18" fill="${s.value?"#ed7d31":"#fff"}" stroke="gray" stroke-width="2" />\n    </svg>`}class S{constructor(i,t,a,n,c,b,ve,_e,fe){this.formularioService=i,this.mensajeService=t,this.reactivoService=a,this.asignaturaService=n,this.nivelExamenService=c,this.sanitizer=b,this.modalService=ve,this.respuestaService=_e,this.clasificacionPreguntaService=fe,this.URL_IMAGEN_DEFAULT="assets/img/svg/image-solid.png",this.TOOLTIP_INSTRUCCIONES="Para saltar l\xednea necesita presionar 'Shift + Enter'",this.submitting=!1,this.reactivo=new C.s,this.placeHolderSelect=l.vf,this.placeHolderNoOptions=l.aQ,this.asignaturaList=[],this.nivelExamenList=[],this.respuestasList=[],this.clasificacionPreguntaList=[],this.MENSAJE_AGREGAR="El reactivo ha sido agregado",this.MENSAJE_EDITAR="El reactivo ha sido modificado",this.esEdicion=!1,this.soloRespuestas=!0,this.accesoEditarRespuesta=f.rW.Editar,this.accesoEliminarRespuesta=f.rW.Eliminar,this.noAcceso=f.rW.NoAcceso,this.preguntasColumns=[{headerName:"Identificador",field:"clave",minWidth:10,maxWidth:130},{headerName:"Respuesta",field:"respuesta1",minWidth:200},{headerName:"Respuesta Correcta",field:"respuestaCorrecta",minWidth:25,maxWidth:170,cellRenderer:de},{headerName:"Valor",field:"valor"}]}ngOnInit(){this.accion===l.V_.Agregar?(this.reactivo.fechaAlta=new Date,this.reactivo.estatus=!0,this.reactivo.necesitaRevision=!1):this.accion===l.V_.Editar&&this.consultarReactivo(this.idReactivo),this.reactivo.imagenNombre="",this.consultarAsignaturas(),this.consultarNivelesExamen(),this.consultarClasificacionPregunta()}consultarReactivo(i){this.reactivoService.consultar(i).subscribe(t=>{t.fechaAlta=new Date(t.fechaAlta),this.reactivo=t,this.imagenBase64=this.sanitizer.bypassSecurityTrustResourceUrl(`data:${t.imagenTipoMime};base64,${t.imagen}`),this.respuestasList=t.respuestaList})}consultarAsignaturas(){this.asignaturaService.consultarTodosParaSelector().subscribe(i=>{this.asignaturaList=i})}consultarNivelesExamen(){this.nivelExamenService.consultarTodosParaSelector().subscribe(i=>{this.nivelExamenList=i})}recibirImagen(i){this.reactivo.imagen=i.archivo,this.reactivo.imagenTipoMime=i.tipoMime,this.reactivo.imagenNombre=i.nombreArchivo,this.imagenBase64=this.sanitizer.bypassSecurityTrustResourceUrl(`data:${i.tipoMime};base64,${i.archivo}`)}enviarFormulario(i){if(this.submitting=!0,!i.valid)return this.formularioService.validarCamposRequeridos(i),void(this.submitting=!1);this.accion===l.V_.Agregar?this.agregar():this.accion===l.V_.Editar&&this.editar()}agregar(){this.reactivoService.agregar(this.reactivo).subscribe({next:()=>{this.mensajeService.modalExito(this.MENSAJE_AGREGAR),this.onClose(!0),this.consultarGridRespuestas(),this.submitting=!1},error:i=>{this.submitting=!1}})}editar(){this.reactivoService.editar(this.reactivo).subscribe({next:()=>{this.mensajeService.modalExito(this.MENSAJE_EDITAR),this.consultarGridRespuestas(),this.submitting=!1},error:i=>{this.submitting=!1}})}cancelar(){this.onClose(!1)}onGridClick(i){i.accion===m.g.GRID_ACCION_EDITAR?this.editarRespuesta(i.data):i.accion===m.g.GRID_ACCION_ELIMINAR&&this.mensajeService.modalConfirmacion("\xbfDesea eliminar la selecci\xf3n?","Eliminar",m.g.ICONO_CRUZ).then(t=>{this.respuestaService.eliminar(i.data.idRespuesta).subscribe(a=>{this.mensajeService.modalExito("Eliminado con Exito"),this.consultarGridRespuestas()})})}borrarImagen(){this.imagenBase64="",this.reactivo.imagen="",this.reactivo.imagenTipoMime="",this.reactivo.imagenNombre=""}downl_endpoint(i){return this.reactivoService.consultarArchivo(i)}consultarGridRespuestas(){this.respuestaService.consultarTodosPorReactivo(this.idReactivo).subscribe(i=>{this.respuestasList=i,this.reactivo.respuestaList=this.respuestasList})}abrirRespuesta(){const i={accion:l.V_.Agregar,esEdicion:!1,idReactivo:this.idReactivo,onClose:a=>{a&&this.consultarGridRespuestas(),t.hide()}},t=this.modalService.show(T,{initialState:i,...U.OS.Medium})}editarRespuesta(i){const t={accion:l.V_.Editar,esEdicion:!1,idReactivo:this.idReactivo,resp:i,onClose:n=>{n&&this.consultarGridRespuestas(),a.hide()}},a=this.modalService.show(T,{initialState:t,...U.OS.Medium})}cambiosReglasNegocio(){this.reactivo.escalaLikert&&(this.reactivo.simple=!1,this.reactivo.multiple=!1,this.reactivo.abierta=!1),this.reactivo.abierta&&(this.reactivo.simple=!1,this.reactivo.multiple=!1,this.reactivo.escalaLikert=!1,this.reactivo.necesitaRevision=!0),this.reactivo.abierta||(this.reactivo.necesitaRevision=!1)}consultarClasificacionPregunta(){this.clasificacionPreguntaService.consultarSelector().subscribe(i=>{this.clasificacionPreguntaList=i})}static#e=this.\u0275fac=function(t){return new(t||S)(e.Y36(R.Y),e.Y36(N.V),e.Y36(Z),e.Y36(D.x),e.Y36(q.y),e.Y36(G.H7),e.Y36(d.tT),e.Y36(M),e.Y36(Q.A))};static#t=this.\u0275cmp=e.Xpm({type:S,selectors:[["app-reactivo-formulario"]],decls:21,vars:12,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"modal-content"],[1,"modal-header"],[4,"ngIf"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["id","modal",1,"modal-body"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],["class","row",4,"ngIf"],["class","subseccion",4,"ngIf"],["class","row",3,"hidden",4,"ngIf"],["class","modal-footer",4,"ngIf"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","maxlength","30",1,"form-control",3,"ngModel","required","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],["name","asignaturaLstName","bindLabel","descripcion","bindValue","idAsignatura",3,"items","required","ngModel","placeholder","notFoundText","ngModelChange"],["asignaturaLst","ngModel"],["name","nivelLstName","bindLabel","descripcion","bindValue","idNivelExamen",3,"items","required","ngModel","placeholder","notFoundText","ngModelChange"],["nivelLst","ngModel"],[1,"error"],[1,"col-md-12"],["name","pregunta",1,"form-control","preguntaTextArea",3,"ngModel","required","ngModelChange"],["pregunta","ngModel"],[1,"subseccion"],[3,"label","contieneAyuda","id","idRegistroArchivo","nombreArchivo","archivoDto","downl_endpoint"],[2,"text-align","center","margin-top","15px"],["id","logo","height","200",3,"src",4,"ngIf"],["type","button",1,"btn-secundario","btn-alinear",3,"click"],["id","logo","height","200",3,"src"],[1,"label-input","required-label",2,"font-size","12px"],[1,"switch"],["checked","checked","id","escalaLikert","name","escalaLikert","type","checkbox",1,"accent",3,"ngModel","disabled","ngModelChange"],["escalaLikert",""],[1,"slider","round"],[1,"on"],[1,"off"],[1,"col-md-7"],[1,"form-group","contenedor-inferior"],["name","clasificacionLstName","bindLabel","value","bindValue","id",3,"items","required","ngModel","placeholder","notFoundText","disabled","ngModelChange"],["clasificacionLst","ngModel"],["checked","checked","id","preguntaAbierta","name","preguntaAbierta","type","checkbox",1,"accent",3,"ngModel","disabled","ngModelChange"],["preguntaAbierta",""],[1,"col-md-6"],["checked","checked","id","necesitaRevision","name","necesitaRevision","type","checkbox",1,"accent",3,"ngModel","ngModelChange"],["necesitaRevision",""],["type","button",1,"btn-primario","btn-alinear",3,"disabled","hidden","click"],["checked","checked","id","respuestaSimple","name","respuestaSimple","type","checkbox",1,"accent",3,"disabled","ngModel","ngModelChange"],["respuestaSimple",""],["checked","checked","id","respuestaMultiple","name","respuestaMultiple","type","checkbox",1,"accent",3,"disabled","ngModel","ngModelChange"],["respuestaMultiple",""],[1,"row",3,"hidden"],[1,"col-md-8"],[3,"disableXLS","data","children","accesoEditar","accesoEliminar","disableEdit","disableDelete","event"],["gridRespuestas",""],[3,"disableXLS","data","children","accesoEditar","accesoEliminar","event"],[1,"modal-footer"],[1,"text-right"],["type","button",1,"btn-secundario","mr-3",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"]],template:function(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,B,2,1,"div",4),e.YNc(5,K,2,0,"div",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return a.cancelar()}),e._UZ(7,"i",6),e.qZA()(),e.TgZ(8,"div",7)(9,"form",8,9),e.NdJ("keydown.enter",function(b){return b.preventDefault()})("ngSubmit",function(){e.CHM(n);const b=e.MAs(10);return e.KtG(a.enviarFormulario(b))}),e.YNc(11,V,25,16,"div",10),e.YNc(12,$,9,3,"div",10),e.YNc(13,X,2,0,"div",11),e.YNc(14,ie,13,7,"div",10),e.YNc(15,oe,2,0,"div",11),e.YNc(16,ne,47,13,"div",10),e.YNc(17,re,29,6,"div",10),e.YNc(18,se,4,8,"div",12),e.YNc(19,ce,4,5,"div",10),e.YNc(20,le,6,1,"div",13),e.qZA()()()()}2&t&&(e.xp6(4),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",!a.soloRespuestas),e.xp6(6),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",!a.soloRespuestas),e.xp6(1),e.Q6J("ngIf",a.soloRespuestas))},dependencies:[o.O5,p._Y,p.Fj,p.Wl,p.JJ,p.JL,p.Q7,p.nD,p.On,p.F,k.w9,Y.x,w.$],styles:['@charset "UTF-8";.cuerpo-contenedor[_ngcontent-%COMP%]{padding-left:1em;padding-right:1em}.preguntaTextArea[_ngcontent-%COMP%]{height:7em!important}.respuestaTextArea[_ngcontent-%COMP%]{height:9em!important}.btn-cargar[_ngcontent-%COMP%]{background-color:#92d050;border:0px;color:#000;margin-top:4em;font-weight:400}.switchLabel[_ngcontent-%COMP%]{margin-left:.5em!important;margin-right:.5em}.switchContainer[_ngcontent-%COMP%]{margin-top:.5em}.modal-content[_ngcontent-%COMP%]{overflow:overlay!important}.btn-alinear[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:20px}.switch[_ngcontent-%COMP%]{top:1px;height:calc(1.5em + .8rem + 10px);width:110px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{background-color:#fff;transform:translate(70px)}.switch[_ngcontent-%COMP%]   input.accent[_ngcontent-%COMP%]:checked + .slider.round[_ngcontent-%COMP%]{background-color:#ed7d31}.switch[_ngcontent-%COMP%]   input.accent[_ngcontent-%COMP%]:checked + .slider.round[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%]{color:#fff}.contenedor-inferior[_ngcontent-%COMP%]{margin-top:33px}']})}var ue=r(62861);function ge(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.agregar())}),e.TgZ(1,"button",9),e._uU(2,"Agregar Reactivos"),e.qZA()()}}class O{constructor(i,t,a,n){this.accesoService=i,this.mensajeService=t,this.modalService=a,this.reactivoService=n,this.HEADER_GRID="Reactivos",this.tieneAccesoAgregar=!1,this.EDITAR_ASIGNATURA=f.A4.Editar,this.ELIMINAR_ASIGNATURA=f.A4.Eliminar,this.reactivoList=[],this.verRespuestasButton={headerName:"",field:"",cellRenderer:"actionButton",minWidth:20,maxWidth:40,resizable:!0,sortable:!1,filter:!1,action:m.g.GRID_ACCION_VER,pinned:void 0},this.columns=[{headerName:"",field:"idReactivo",sort:"desc",hide:!0},{headerName:"Clave",field:"clave",minWidth:80},{headerName:"Asignatura",field:"asignatura",minWidth:80},{headerName:"Nivel de Evaluaci\xf3n",field:"nivelExamen",minWidth:80},{headerName:"Pregunta",field:"pregunta",minWidth:150,cellStyle:{"white-space":"normal"}},{headerName:"Respuestas",field:"respuesta",minWidth:80,cellStyle:{"white-space":"break-spaces"}},{headerName:"Respuesta Correcta",field:"respuestaCorrecta",minWidth:60,width:60},this.verRespuestasButton]}ngOnInit(){this.consultarGrid(),this.consultarAccesoAgregar()}consultarAccesoAgregar(){this.accesoService.tieneAcceso(f.A4.Agregar).subscribe(i=>{this.tieneAccesoAgregar=i})}consultarGrid(){this.reactivoService.consultarGeneral().subscribe(i=>{this.reactivoList=i})}onGridClick(i){i.accion===x.gy.Editar?this.editar(i.data.idReactivo):i.accion===x.gy.Eliminar?this.eliminar(i.data):i.accion===x.gy.Ver&&this.verRespuestas(i.data.idReactivo)}agregar(){const i={accion:l.V_.Agregar,esEdicion:!1,onClose:a=>{a&&this.consultarGrid(),t.hide()}},t=this.modalService.show(S,{initialState:i,...U.OS.Large})}editar(i){const t={accion:l.V_.Editar,esEdicion:!0,idReactivo:i,onClose:n=>{n&&this.consultarGrid(),a.hide()}},a=this.modalService.show(S,{initialState:t,...U.OS.Large})}eliminar(i){const n=`\xbfDesea eliminar la pregunta: <strong>${i.pregunta}</strong>?`;this.mensajeService.modalConfirmacion(n,"Eliminar Reactivo",A.m.Cruz).then(()=>{this.reactivoService.eliminar(i.idReactivo).subscribe(()=>{this.mensajeService.modalExito("El reactivo ha sido eliminado"),this.consultarGrid()})})}verRespuestas(i){const t={accion:l.V_.Editar,esEdicion:!0,idReactivo:i,soloRespuestas:!1,onClose:n=>{n&&this.consultarGrid(),a.hide()}},a=this.modalService.show(S,{initialState:t,...U.OS.Medium})}static#e=this.\u0275fac=function(t){return new(t||O)(e.Y36(ue.Q),e.Y36(N.V),e.Y36(d.tT),e.Y36(Z))};static#t=this.\u0275cmp=e.Xpm({type:O,selectors:[["app-reactivo"]],decls:9,vars:7,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row","justify-content-center"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","accesoEditar","accesoEliminar","biggerRows","event"],["gridNecesidad",""],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Reactivos"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e.YNc(6,ge,3,0,"div",5),e.TgZ(7,"app-grid-general",6,7),e.NdJ("event",function(c){return a.onGridClick(c)}),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",a.tieneAccesoAgregar),e.xp6(1),e.Q6J("headerName",a.HEADER_GRID)("data",a.reactivoList)("children",a.columns)("accesoEditar",a.EDITAR_ASIGNATURA)("accesoEliminar",a.ELIMINAR_ASIGNATURA)("biggerRows",!0))},dependencies:[o.O5,w.$],encapsulation:2})}const me=[{path:"",component:O,canActivate:[u.m],data:{title:"Reactivos",acceso:f.A4.Consultar}}];class F{static#e=this.\u0275fac=function(t){return new(t||F)};static#t=this.\u0275mod=e.oAB({type:F});static#i=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(me),h.Bz]})}var pe=r(90061),he=r(98520);class I{static#e=this.\u0275fac=function(t){return new(t||I)};static#t=this.\u0275mod=e.oAB({type:I});static#i=this.\u0275inj=e.cJS({providers:[M,Z],imports:[o.ez,p.u5,k.A0,pe.kn,he.G,v.a]})}class J{static#e=this.\u0275fac=function(t){return new(t||J)};static#t=this.\u0275mod=e.oAB({type:J});static#i=this.\u0275inj=e.cJS({imports:[o.ez,F,v.a,d.zk.forChild(),I]})}}}]);