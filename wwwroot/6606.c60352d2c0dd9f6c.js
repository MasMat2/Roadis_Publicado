"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[6606],{80780:(b,_,o)=>{o.d(_,{m:()=>h});var f=o(94650),v=o(80529);class h{constructor(c){this.http=c,this.dataUrl="rol/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarTodosParaGrid(){return this.http.get(this.dataUrl+"consultarTodosParaGrid")}consultarRolesUsuarioSesion(){return this.http.get(this.dataUrl+"consultarRolesUsuarioSesion")}consultar(c){return this.http.get(this.dataUrl+`consultar/${c}`)}agregar(c){return this.http.post(this.dataUrl+"agregar",c)}editar(c){return this.http.put(this.dataUrl+"editar",c)}eliminar(c){return this.http.delete(this.dataUrl+`eliminar/${c}`)}static#e=this.\u0275fac=function(a){return new(a||h)(f.LFG(v.eN))};static#t=this.\u0275prov=f.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}},12846:(b,_,o)=>{o.d(_,{Y:()=>p});var f=o(50986),v=o(94650),h=o(2060);class p{constructor(a){this.modalMensajeService=a}validarCamposRequeridos(a){Object.keys(a.controls).forEach(s=>{const r=a.controls[s];r.markAsTouched({onlySelf:!0}),r.markAsDirty({onlySelf:!0})})}validarCamposRequeridosConMensaje(a){Object.keys(a.controls).forEach(s=>{const r=a.controls[s];r.markAsTouched({onlySelf:!0}),r.markAsDirty({onlySelf:!0})}),Object.keys(a.controls).some(s=>{const r=a.controls[s];return!!(r.errors&&r.errors.required&&r.invalid)&&(this.modalMensajeService.modalError(f.g.MENSAJE_REQUERIDOS),!0)})}markAsUntouched(a){Object.keys(a.controls).forEach(s=>{a.controls[s].markAsUntouched({onlySelf:!0})})}static#e=this.\u0275fac=function(s){return new(s||p)(v.LFG(h.V))};static#t=this.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}},16606:(b,_,o)=>{o.r(_),o.d(_,{RolModule:()=>M});var f=o(80780),v=o(20388),h=o(41283),p=o(63405),c=o(9116),a=o(13050),s=o(85087),r=o(50986);class S{constructor(){}}var e=o(94650),T=o(2060),O=o(12846),g=o(24006),I=o(36895);function Z(m,t){1&m&&(e.TgZ(0,"div",33),e._uU(1," La clave es requerida "),e.qZA())}function N(m,t){1&m&&(e.TgZ(0,"div",33),e._uU(1," El formato de la clave es inv\xe1lido "),e.qZA())}function U(m,t){1&m&&(e.TgZ(0,"div",33),e._uU(1," El rol es requerido "),e.qZA())}function D(m,t){1&m&&(e.TgZ(0,"div",34),e._UZ(1,"img",35),e.TgZ(2,"span"),e._uU(3,"Procesando... por favor espere"),e.qZA()())}class A{constructor(t,n,i){this.mensajeService=t,this.formularioService=n,this.rolService=i,this.mensajeAgregar="El rol ha sido agregado",this.mensajeEditar="El rol ha sido modificado",this.btnSubmit=!1,this.rol=new S}ngOnInit(){}enviarFormulario(t){if(this.btnSubmit=!0,null==this.rol.filtrado&&(this.rol.filtrado=!1),!t.valid)return this.formularioService.validarCamposRequeridos(t),void(this.btnSubmit=!1);this.accion===r.g.MODAL_ACCION_AGREGAR?this.agregar():this.accion===r.g.MODAL_ACCION_EDITAR&&this.editar()}agregar(){this.rolService.agregar(this.rol).subscribe(t=>{this.mensajeService.modalExito(this.mensajeAgregar),this.onClose(!0)},t=>{this.btnSubmit=!1})}editar(){this.rolService.editar(this.rol).subscribe(t=>{this.mensajeService.modalExito(this.mensajeEditar),this.onClose(!0)},t=>{this.btnSubmit=!1})}cancelar(){this.onClose(!0)}static#e=this.\u0275fac=function(n){return new(n||A)(e.Y36(T.V),e.Y36(O.Y),e.Y36(f.m))};static#t=this.\u0275cmp=e.Xpm({type:A,selectors:[["app-rol-formulario"]],decls:51,vars:10,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"fa","fa-plus"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],["id","modal",1,"modal-body"],[1,"row","justify-content-md-center"],[1,"row"],[1,"col-md-3"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","maxlength","20","autocomplete","off","required","","appFormatoSoloAlfanumerico","","autofocus","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],[1,"col-md-6"],["name","nombre","type","text","maxlength","50","autocomplete","off","required","",1,"form-control",3,"ngModel","ngModelChange"],["nombre","ngModel"],[2,"display","flex","flex-direction","column"],["for","filtrado",1,"switch"],["name","filtradoName","type","checkbox","id","filtrado",3,"ngModel","ngModelChange"],["filtrado","ngModel"],[1,"slider","round"],[1,"on"],[1,"off"],[1,"modal-footer"],[1,"text-center"],["type","button",1,"btn-secundario","mr-3",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"],["id","loading-cdis",4,"ngIf"],[1,"error"],["id","loading-cdis"],["src","assets/img/spinner.gif","alt","Procesando..."]],template:function(n,i){if(1&n){const d=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return i.cancelar()}),e._UZ(8,"i",6),e.qZA()(),e.TgZ(9,"form",7,8),e.NdJ("keydown.enter",function(u){return u.preventDefault()})("ngSubmit",function(){e.CHM(d);const u=e.MAs(10);return e.KtG(i.enviarFormulario(u))}),e.TgZ(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"div",13)(16,"label",14),e._uU(17,"Clave"),e.qZA(),e.TgZ(18,"div")(19,"input",15,16),e.NdJ("ngModelChange",function(u){return i.rol.clave=u}),e.qZA(),e.YNc(21,Z,2,0,"div",17),e.YNc(22,N,2,0,"div",17),e.qZA()()(),e.TgZ(23,"div",18)(24,"div",13)(25,"label",14),e._uU(26,"Rol"),e.qZA(),e.TgZ(27,"div")(28,"input",19,20),e.NdJ("ngModelChange",function(u){return i.rol.nombre=u}),e.qZA(),e.YNc(30,U,2,0,"div",17),e.qZA()()(),e.TgZ(31,"div",12)(32,"div",13)(33,"div",21)(34,"label",14),e._uU(35,"Filtrado"),e.qZA(),e.TgZ(36,"label",22)(37,"input",23,24),e.NdJ("ngModelChange",function(u){return i.rol.filtrado=u}),e.qZA(),e.TgZ(39,"div",25)(40,"span",26),e._uU(41,"S\xed"),e.qZA(),e.TgZ(42,"span",27),e._uU(43,"No"),e.qZA()()()()()()()()(),e.TgZ(44,"div",28)(45,"div",29)(46,"button",30),e.NdJ("click",function(){return i.cancelar()}),e._uU(47,"Cancelar "),e.qZA(),e.TgZ(48,"button",31),e._uU(49,"Guardar "),e.qZA()()()()()(),e.YNc(50,D,4,0,"div",32)}if(2&n){const d=e.MAs(20),l=e.MAs(29);e.xp6(6),e.hij("Rol - ",i.accion,""),e.xp6(13),e.Q6J("ngModel",i.rol.clave)("disabled",i.rol.idRol>0),e.xp6(2),e.Q6J("ngIf",(null==d.errors?null:d.errors.required)&&d.touched),e.xp6(1),e.Q6J("ngIf",null==d.errors?null:d.errors.formatoSoloAlfanumerico),e.xp6(6),e.Q6J("ngModel",i.rol.nombre),e.xp6(2),e.Q6J("ngIf",(null==l.errors?null:l.errors.required)&&l.touched),e.xp6(7),e.Q6J("ngModel",i.rol.filtrado),e.xp6(11),e.Q6J("disabled",i.btnSubmit),e.xp6(2),e.Q6J("ngIf",i.btnSubmit)}},dependencies:[g._Y,g.Fj,g.Wl,g.JJ,g.JL,g.Q7,g.nD,g.On,g.F,I.O5],encapsulation:2})}var y=o(62861),L=o(73687),F=o(58390);function G(m,t){if(1&m){const n=e.EpF();e.TgZ(0,"div",7),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.agregar())}),e.TgZ(1,"button",8),e._uU(2,"Agregar Rol"),e.qZA()()}}class R{constructor(t,n,i,d,l,u){this.mensajeService=t,this.rolService=n,this.accesoService=i,this.modalService=d,this.bsModalRef=l,this.sessionService=u,this.tieneAccesoAgregar=!1,this.accesoEditar=s.v.EDITAR_ROL,this.accesoEliminar=s.v.ELIMINAR_ROL,this.HEADER_GRID="Rol",this.MENSAJE_EXITO_ELIMINAR="El rol ha sido eliminado",this.TITULO_MODAL_ELIMINAR="Eliminar Rol",this.columnaEditar=Object.assign({action:r.g.GRID_ACCION_EDITAR,title:"Editar",acceso:this.accesoEditar,cellRendererSelector:C=>C.data.idCompania!==this.idCompaniaUsuarioSesion?null:{component:"actionButton",params:{disabled:!1}}},r.g.CONFIG_COLUMN_ACTION),this.columnaEliminar=Object.assign({action:r.g.GRID_ACCION_ELIMINAR,title:"Eliminar",acceso:this.accesoEliminar,cellRendererSelector:C=>C.data.idCompania!==this.idCompaniaUsuarioSesion?null:{component:"actionButton",params:{disabled:!1}}},r.g.CONFIG_COLUMN_ACTION),this.columns=[{headerName:"Clave",field:"clave",minWidth:150},{headerName:"Rol",field:"nombre",minWidth:150},{headerName:"Filtrado",field:"filtrado",minWidth:150,valueGetter:C=>C.data.filtrado?"S\xed":"No"},this.columnaEditar,this.columnaEliminar]}ngOnInit(){this.accesoService.tieneAcceso(s.v.AGREGAR_ROL).subscribe({next:t=>{this.tieneAccesoAgregar=t}}),this.idCompaniaUsuarioSesion=this.sessionService.obtenerIdCompaniaUsuarioSesion()??0,this.consultarGrid()}consultarGrid(){this.rolService.consultarTodosParaGrid().subscribe(t=>{this.RolList=t})}onGridClick(t){t.accion!==r.g.GRID_ACCION_EDITAR?t.accion!==r.g.GRID_ACCION_ELIMINAR||this.eliminar(t.data):this.editar(t.data.idRol)}agregar(){this.bsModalRef=this.modalService.show(A,r.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.accion=r.g.MODAL_ACCION_AGREGAR,this.bsModalRef.content.onClose=t=>{t&&this.consultarGrid(),this.bsModalRef.hide()}}editar(t){this.rolService.consultar(t).subscribe(n=>{this.bsModalRef=this.modalService.show(A,r.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.rol=n,this.bsModalRef.content.accion=r.g.MODAL_ACCION_EDITAR,this.bsModalRef.content.onClose=i=>{i&&this.consultarGrid(),this.bsModalRef.hide()}})}eliminar(t){this.mensajeService.modalConfirmacion("\xbfDesea eliminar el rol <strong>"+t.nombre+"</strong>?",this.TITULO_MODAL_ELIMINAR).then(n=>{this.rolService.eliminar(t.idRol).subscribe(i=>{this.mensajeService.modalExito(this.MENSAJE_EXITO_ELIMINAR),this.consultarGrid()})})}static#e=this.\u0275fac=function(n){return new(n||R)(e.Y36(T.V),e.Y36(f.m),e.Y36(y.Q),e.Y36(v.tT),e.Y36(v.UZ),e.Y36(L.m))};static#t=this.\u0275cmp=e.Xpm({type:R,selectors:[["app-rol"]],decls:8,vars:6,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","disableDelete","disableEdit","event"],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Roles"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e.YNc(6,G,3,0,"div",5),e.TgZ(7,"app-grid-general",6),e.NdJ("event",function(l){return i.onGridClick(l)}),e.qZA()()()()()),2&n&&(e.xp6(6),e.Q6J("ngIf",i.tieneAccesoAgregar),e.xp6(1),e.Q6J("headerName",i.HEADER_GRID)("data",i.RolList)("children",i.columns)("disableDelete",!0)("disableEdit",!0))},dependencies:[I.O5,F.$]})}const j=[{path:"",component:R,canActivate:[a.m],data:{title:"Consulta",acceso:s.v.CONSULTAR_ROL}}];class E{static#e=this.\u0275fac=function(n){return new(n||E)};static#t=this.\u0275mod=e.oAB({type:E});static#o=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(j),c.Bz]})}class M{static#e=this.\u0275fac=function(n){return new(n||M)};static#t=this.\u0275mod=e.oAB({type:M});static#o=this.\u0275inj=e.cJS({providers:[f.m],imports:[E,p.m,h.Z,v.zk.forChild()]})}}}]);