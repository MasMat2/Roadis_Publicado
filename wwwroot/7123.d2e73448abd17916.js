"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[7123],{7123:(y,G,a)=>{a.r(G),a.d(G,{GiroComercialModule:()=>h});var v=a(20388),_=a(62861),I=a(41283),T=a(63405),f=a(40293),E=a(9116),b=a(13050),u=a(85087),c=a(50986),A=a(15861);class R{constructor(){}}var Z=a(90429),e=a(94650),p=a(2060),s=a(24006),M=a(36895);function O(d,i){1&d&&(e.TgZ(0,"div",25),e._uU(1," La clave es requerida "),e.qZA())}function N(d,i){1&d&&(e.TgZ(0,"div",25),e._uU(1," El nombre es requerido "),e.qZA())}class m{constructor(i,o){this.giroComercialService=i,this.mensajeService=o,this.giroComercial=new R,this.MENSAJE_EXITO_AGREGAR="El Giro Comercial ha sido agregado",this.MENSAJE_EXITO_EDITAR="El Giro Comercial ha sido editado"}ngOnInit(){}cancelar(){this.onClose(!1)}esEditar(){return this.accion===c.g.MODAL_ACCION_EDITAR}enviarFormulario(i){var o=this;return(0,A.Z)(function*(){if(o.disableSubmit=!0,!i.valid)return Z.CW(i),void(o.disableSubmit=!1);let r,t;r=!0,t="",o.accion===c.g.MODAL_ACCION_AGREGAR?(r=yield o.agregar(),t=o.MENSAJE_EXITO_AGREGAR):o.accion===c.g.MODAL_ACCION_EDITAR&&(r=yield o.editar(),t=o.MENSAJE_EXITO_EDITAR),r?(o.onClose(!0),o.mensajeService.modalExito(t)):o.disableSubmit=!1})()}agregar(){var i=this;return(0,A.Z)(function*(){try{return yield i.giroComercialService.agregar(i.giroComercial).toPromise(),!0}catch{return!1}})()}editar(){var i=this;return(0,A.Z)(function*(){try{return yield i.giroComercialService.editar(i.giroComercial).toPromise(),!0}catch{return!1}})()}static#e=this.\u0275fac=function(o){return new(o||m)(e.Y36(f.p),e.Y36(p.V))};static#i=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-giro-comercial-formulario"]],decls:42,vars:10,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"fa","fa-plus"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],["id","modal",1,"cuerpo-contenedor"],[1,"row"],[1,"col-md-3"],[1,"form-group"],[1,"label-input","required-label"],["id","idGiroComercial","name","idGiroComercial","type","text","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["clave","ngModel"],["id","clave","name","claveName","type","text","maxlength","20","autofocus","",1,"form-control",3,"ngModel","required","disabled","ngModelChange"],["class","error",4,"ngIf"],[1,"col-md-6"],["id","nombre","name","nombreName","type","text","maxlength","30",1,"form-control",3,"ngModel","required","ngModelChange"],["nombre","ngModel"],[1,"modal-footer"],[1,"text-right"],["type","button",1,"btn-secundario","btn-margin-left",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"],[1,"error"]],template:function(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return r.cancelar()}),e._UZ(8,"i",6),e.qZA()(),e.TgZ(9,"form",7,8),e.NdJ("keydown.enter",function(l){return l.preventDefault()})("ngSubmit",function(){e.CHM(t);const l=e.MAs(10);return e.KtG(r.enviarFormulario(l))}),e.TgZ(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),e._uU(16,"Id Giro Comercial"),e.qZA(),e.TgZ(17,"div")(18,"input",14,15),e.NdJ("ngModelChange",function(l){return r.giroComercial.idGiroComercial=l}),e.qZA()()()(),e.TgZ(20,"div",11)(21,"div",12)(22,"label",13),e._uU(23,"Clave"),e.qZA(),e.TgZ(24,"div")(25,"input",16,15),e.NdJ("ngModelChange",function(l){return r.giroComercial.clave=l}),e.qZA(),e.YNc(27,O,2,0,"div",17),e.qZA()()(),e.TgZ(28,"div",18)(29,"div",12)(30,"label",13),e._uU(31,"Giro Comercial"),e.qZA(),e.TgZ(32,"div")(33,"input",19,20),e.NdJ("ngModelChange",function(l){return r.giroComercial.nombre=l}),e.qZA(),e.YNc(35,N,2,0,"div",17),e.qZA()()()()(),e.TgZ(36,"div",21)(37,"div",22)(38,"button",23),e.NdJ("click",function(){return r.cancelar()}),e._uU(39,"Cancelar"),e.qZA(),e.TgZ(40,"button",24),e._uU(41,"Guardar"),e.qZA()()()()()()}if(2&o){const t=e.MAs(19),n=e.MAs(34);e.xp6(6),e.hij("Giro Comercial - ",r.accion,""),e.xp6(12),e.Q6J("ngModel",r.giroComercial.idGiroComercial),e.xp6(7),e.Q6J("ngModel",r.giroComercial.clave)("required",!0)("disabled",r.esEditar()),e.xp6(2),e.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),e.xp6(6),e.Q6J("ngModel",r.giroComercial.nombre)("required",!0),e.xp6(2),e.Q6J("ngIf",(null==n.errors?null:n.errors.required)&&n.touched),e.xp6(5),e.Q6J("disabled",r.disableSubmit)}},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.On,s.F,M.O5]})}var S=a(58390);function J(d,i){if(1&d){const o=e.EpF();e.TgZ(0,"div",7),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.agregar())}),e.TgZ(1,"button",8),e._uU(2,"Agregar Giro Comercial"),e.qZA()()}}class g{constructor(i,o,r,t,n,l){this.modalMensajeService=i,this.accesoService=o,this.bsModalRef=r,this.mensajeService=t,this.modalService=n,this.giroComercialService=l,this.TITULO_MODAL_ELIMINAR="Eliminar Giro Comercial",this.MENSAJE_EXITO_ELIMINAR="El Giro Comercial ha sido eliminado",this.HEADER_GRID="Giro Comercial",this.tieneAccesoAgregar=!1,this.accesoEditar=u.v.EDITAR_GIRO_COMERCIAL,this.accesoEliminar=u.v.ELIMINAR_GIRO_COMERCIAL,this.columns=[{headerName:"Id Giro Comercial",field:"idGiroComercial",maxWidth:200},{headerName:"Clave",field:"clave",maxWidth:200},{headerName:"Giro Comercial",field:"nombre",minWidth:200}]}ngOnInit(){this.accesoService.tieneAcceso(u.v.AGREGAR_GIRO_COMERCIAL).subscribe(i=>{this.tieneAccesoAgregar=i}),this.consultarGrid()}consultarGrid(){this.giroComercialService.consultarTodos().subscribe(i=>{this.giroComercialList=i})}onGridClick(i){i.accion===c.g.GRID_ACCION_EDITAR?this.editar(i.data.idGiroComercial):i.accion===c.g.GRID_ACCION_ELIMINAR&&this.eliminar(i.data)}agregar(){this.bsModalRef=this.modalService.show(m,c.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.accion=c.g.MODAL_ACCION_AGREGAR,this.bsModalRef.content.onClose=i=>{i&&this.consultarGrid(),this.bsModalRef.hide()}}editar(i){this.giroComercialService.consultar(i).subscribe(o=>{this.bsModalRef=this.modalService.show(m,c.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.giroComercial=o,this.bsModalRef.content.accion=c.g.MODAL_ACCION_EDITAR,this.bsModalRef.content.onClose=r=>{r&&this.consultarGrid(),this.bsModalRef.hide()}})}eliminar(i){this.modalMensajeService.modalConfirmacion("\xbfDesea eliminar el Giro Comercial <strong>"+i.nombre+"</strong>?",this.TITULO_MODAL_ELIMINAR,c.g.ICONO_CRUZ).then(o=>{this.giroComercialService.eliminar(i.idGiroComercial).subscribe(r=>{this.modalMensajeService.modalExito(this.MENSAJE_EXITO_ELIMINAR),this.consultarGrid()})})}static#e=this.\u0275fac=function(o){return new(o||g)(e.Y36(p.V),e.Y36(_.Q),e.Y36(v.UZ),e.Y36(p.V),e.Y36(v.tT),e.Y36(f.p))};static#i=this.\u0275cmp=e.Xpm({type:g,selectors:[["app-giro-comercial"]],decls:8,vars:6,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","accesoEditar","accesoEliminar","event"],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Giro Comercial"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e.YNc(6,J,3,0,"div",5),e.TgZ(7,"app-grid-general",6),e.NdJ("event",function(n){return r.onGridClick(n)}),e.qZA()()()()()),2&o&&(e.xp6(6),e.Q6J("ngIf",r.tieneAccesoAgregar),e.xp6(1),e.Q6J("headerName",r.HEADER_GRID)("data",r.giroComercialList)("children",r.columns)("accesoEditar",r.accesoEditar)("accesoEliminar",r.accesoEliminar))},dependencies:[M.O5,S.$]})}const L=[{path:"",component:g,canActivate:[b.m],data:{title:"Consulta",acceso:u.v.CONSULTAR_GIRO_COMERCIAL}}];class C{static#e=this.\u0275fac=function(o){return new(o||C)};static#i=this.\u0275mod=e.oAB({type:C});static#o=this.\u0275inj=e.cJS({imports:[E.Bz.forChild(L),E.Bz]})}class h{static#e=this.\u0275fac=function(o){return new(o||h)};static#i=this.\u0275mod=e.oAB({type:h});static#o=this.\u0275inj=e.cJS({providers:[_.Q,f.p],imports:[C,T.m,I.Z,v.zk.forChild()]})}}}]);