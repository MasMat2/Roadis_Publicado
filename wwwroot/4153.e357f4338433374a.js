"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[4153],{12846:(T,A,n)=>{n.d(A,{Y:()=>g});var f=n(50986),v=n(94650),C=n(2060);class g{constructor(a){this.modalMensajeService=a}validarCamposRequeridos(a){Object.keys(a.controls).forEach(r=>{const c=a.controls[r];c.markAsTouched({onlySelf:!0}),c.markAsDirty({onlySelf:!0})})}validarCamposRequeridosConMensaje(a){Object.keys(a.controls).forEach(r=>{const c=a.controls[r];c.markAsTouched({onlySelf:!0}),c.markAsDirty({onlySelf:!0})}),Object.keys(a.controls).some(r=>{const c=a.controls[r];return!!(c.errors&&c.errors.required&&c.invalid)&&(this.modalMensajeService.modalError(f.g.MENSAJE_REQUERIDOS),!0)})}markAsUntouched(a){Object.keys(a.controls).forEach(r=>{a.controls[r].markAsUntouched({onlySelf:!0})})}static#o=this.\u0275fac=function(r){return new(r||g)(v.LFG(C.V))};static#e=this.\u0275prov=v.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}},74153:(T,A,n)=>{n.r(A),n.d(A,{ColoniaModule:()=>E});var f=n(36895),v=n(79231),C=n(20388),g=n(41283),I=n(63405),a=n(9116),r=n(85087),c=n(13050),m=n(50986);class N{constructor(){}}var o=n(94650),O=n(12846),b=n(2060),u=n(24006);function Z(h,e){1&h&&(o.TgZ(0,"div",25),o._uU(1," La clave es requerida "),o.qZA())}function R(h,e){1&h&&(o.TgZ(0,"div",25),o._uU(1," El c\xf3digo postal es requerido. "),o.qZA())}function S(h,e){1&h&&(o.TgZ(0,"div",25),o._uU(1," El nombre es requerido. "),o.qZA())}class p{constructor(e,t,i){this.formularioService=e,this.coloniaService=t,this.mensajeService=i,this.mensajeAgregar="La colonia ha sido agregada",this.mensajeEditar="La colonia ha sido modificada",this.btnSubmit=!1,this.colonia=new N}ngOnInit(){}enviarFormulario(e){if(this.btnSubmit=!0,!e.valid)return this.formularioService.validarCamposRequeridos(e),void(this.btnSubmit=!1);this.accion===m.g.MODAL_ACCION_AGREGAR?this.agregar():this.accion===m.g.MODAL_ACCION_EDITAR&&this.editar()}agregar(){this.coloniaService.agregar(this.colonia).subscribe(e=>{this.mensajeService.modalExito(this.mensajeAgregar),this.onClose(!0)},e=>{this.btnSubmit=!1})}editar(){this.coloniaService.editar(this.colonia).subscribe(e=>{this.mensajeService.modalExito(this.mensajeEditar),this.onClose(!0)},e=>{this.btnSubmit=!1})}cancelar(){this.onClose(!0)}static#o=this.\u0275fac=function(t){return new(t||p)(o.Y36(O.Y),o.Y36(v.T),o.Y36(b.V))};static#e=this.\u0275cmp=o.Xpm({type:p,selectors:[["app-colonia-formulario"]],decls:42,vars:9,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],["id","modal",1,"modal-body"],[1,"row"],[1,"col-md-2"],[1,"form-group"],[1,"label-input","required-label"],["name","claveName","type","text","maxlength","200","autocomplete","off","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],["name","codigoPostalName","type","text","maxlength","200","autocomplete","off","required","",1,"form-control",3,"ngModel","ngModelChange"],["codigoPostal","ngModel"],[1,"col-md-8"],["name","nombreName","type","text","maxlength","200","autocomplete","off","required","",1,"form-control",3,"ngModel","ngModelChange"],["nombre","ngModel"],[1,"modal-footer"],[1,"text-center"],["type","button",1,"btn-secundario","mr-3",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"],[1,"error"]],template:function(t,i){if(1&t){const d=o.EpF();o.TgZ(0,"div",0),o._UZ(1,"div",1),o.TgZ(2,"div",2)(3,"div",3)(4,"div"),o._uU(5),o.qZA(),o.TgZ(6,"button",4),o.NdJ("click",function(){return i.cancelar()}),o._UZ(7,"i",5),o.qZA()(),o.TgZ(8,"form",6,7),o.NdJ("keydown.enter",function(l){return l.preventDefault()})("ngSubmit",function(){o.CHM(d);const l=o.MAs(9);return o.KtG(i.enviarFormulario(l))}),o.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"label",12),o._uU(15,"Clave"),o.qZA(),o.TgZ(16,"div")(17,"input",13,14),o.NdJ("ngModelChange",function(l){return i.colonia.clave=l}),o.qZA(),o.YNc(19,Z,2,0,"div",15),o.qZA()()(),o.TgZ(20,"div",10)(21,"div",11)(22,"label",12),o._uU(23,"C\xf3digo Postal"),o.qZA(),o.TgZ(24,"div")(25,"input",16,17),o.NdJ("ngModelChange",function(l){return i.colonia.codigoPostal=l}),o.qZA()(),o.YNc(27,R,2,0,"div",15),o.qZA()(),o.TgZ(28,"div",18)(29,"div",11)(30,"label",12),o._uU(31,"Colonia"),o.qZA(),o.TgZ(32,"div")(33,"input",19,20),o.NdJ("ngModelChange",function(l){return i.colonia.nombre=l}),o.qZA(),o.YNc(35,S,2,0,"div",15),o.qZA()()()()(),o.TgZ(36,"div",21)(37,"div",22)(38,"button",23),o.NdJ("click",function(){return i.cancelar()}),o._uU(39,"Cancelar "),o.qZA(),o.TgZ(40,"button",24),o._uU(41,"Guardar "),o.qZA()()()()()()}if(2&t){const d=o.MAs(18),s=o.MAs(26),l=o.MAs(34);o.xp6(5),o.hij("Colonia - ",i.accion," "),o.xp6(12),o.Q6J("ngModel",i.colonia.clave)("disabled",i.colonia.idColonia>0),o.xp6(2),o.Q6J("ngIf",(null==d.errors?null:d.errors.required)&&d.touched),o.xp6(6),o.Q6J("ngModel",i.colonia.codigoPostal),o.xp6(2),o.Q6J("ngIf",(null==s.errors?null:s.errors.required)&&s.touched),o.xp6(6),o.Q6J("ngModel",i.colonia.nombre),o.xp6(2),o.Q6J("ngIf",(null==l.errors?null:l.errors.required)&&l.touched),o.xp6(5),o.Q6J("disabled",i.btnSubmit)}},dependencies:[f.O5,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.nD,u.On,u.F]})}var y=n(62861),L=n(58390);function G(h,e){if(1&h){const t=o.EpF();o.TgZ(0,"div",8),o.NdJ("click",function(){o.CHM(t);const d=o.oxw();return o.KtG(d.agregar())}),o.TgZ(1,"button",9),o._uU(2,"Agregar Colonia"),o.qZA()()}}class _{constructor(e,t,i,d,s){this.accesoService=e,this.coloniaService=t,this.mensajeService=i,this.modalService=d,this.bsModalRef=s,this.tieneAccesoAgregar=!1,this.accesoEditar=r.v.EDITAR_COLONIA,this.accesoEliminar=r.v.ELIMINAR_COLONIA,this.HEADER_GRID="Colonias",this.MENSAJE_EXITO_ELIMINAR="La colonia ha sido eliminada",this.TITULO_MODAL_ELIMINAR="Eliminar Colonia",this.cargandoGrid=!1,this.loading=!1,this.columns=[{headerName:"Id Colonia",field:"idColonia",maxWidth:150},{headerName:"Clave",field:"clave",minWidth:150},{headerName:"Codigo Postal",field:"codigoPostal",maxnWidth:150},{headerName:"Nombre",field:"nombre",minWidth:150}]}ngOnInit(){this.accesoService.tieneAcceso(r.v.AGREGAR_COLONIA).subscribe({next:e=>{this.tieneAccesoAgregar=e}}),this.consultarGrid()}consultarGrid(){this.cargandoGrid=!0,this.loading=!0,this.coloniaService.consultarParaGrid().subscribe(e=>{this.coloniaList=e,this.cargandoGrid=!1,this.loading=!1})}onGridClick(e){e.accion!==m.g.GRID_ACCION_EDITAR?e.accion!==m.g.GRID_ACCION_ELIMINAR||this.eliminar(e.data):this.editar(e.data)}agregar(){this.bsModalRef=this.modalService.show(p,m.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.accion=m.g.MODAL_ACCION_AGREGAR,this.bsModalRef.content.onClose=e=>{e&&this.consultarGrid(),this.bsModalRef.hide()}}editar(e){this.bsModalRef=this.modalService.show(p,m.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.accion=m.g.MODAL_ACCION_EDITAR,this.bsModalRef.content.colonia=e,this.bsModalRef.content.onClose=t=>{t&&this.consultarGrid(),this.bsModalRef.hide()}}eliminar(e){this.mensajeService.modalConfirmacion("\xbfDesea eliminar la colonia <strong>"+e.nombre+"</strong>?",this.TITULO_MODAL_ELIMINAR).then(t=>{this.coloniaService.eliminar(e.idColonia).subscribe(i=>{this.mensajeService.modalExito(this.MENSAJE_EXITO_ELIMINAR),this.consultarGrid()})})}static#o=this.\u0275fac=function(t){return new(t||_)(o.Y36(y.Q),o.Y36(v.T),o.Y36(b.V),o.Y36(C.tT),o.Y36(C.UZ))};static#e=this.\u0275cmp=o.Xpm({type:_,selectors:[["app-colonia"]],decls:9,vars:7,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row","justify-content-center"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","accesoEditar","accesoEliminar","cargandoGrid","event"],["gridNecesidad",""],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2,"Colonias"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3)(5,"div",4),o.YNc(6,G,3,0,"div",5),o.TgZ(7,"app-grid-general",6,7),o.NdJ("event",function(s){return i.onGridClick(s)}),o.qZA()()()()()),2&t&&(o.xp6(6),o.Q6J("ngIf",i.tieneAccesoAgregar),o.xp6(1),o.Q6J("headerName",i.HEADER_GRID)("data",i.coloniaList)("children",i.columns)("accesoEditar",i.accesoEditar)("accesoEliminar",i.accesoEliminar)("cargandoGrid",i.cargandoGrid))},dependencies:[f.O5,L.$]})}const D=[{path:"",component:_,canActivate:[c.m],data:{title:"Consulta",acceso:r.v.CONSULTAR_COLONIA}}];class M{static#o=this.\u0275fac=function(t){return new(t||M)};static#e=this.\u0275mod=o.oAB({type:M});static#i=this.\u0275inj=o.cJS({imports:[a.Bz.forChild(D),a.Bz]})}var F=n(71436);class E{static#o=this.\u0275fac=function(t){return new(t||E)};static#e=this.\u0275mod=o.oAB({type:E});static#i=this.\u0275inj=o.cJS({providers:[v.T],imports:[f.ez,I.m,g.Z,C.zk.forChild(),M,F.a]})}}}]);