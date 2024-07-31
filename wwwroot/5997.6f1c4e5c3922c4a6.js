"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[5997],{8923:(I,v,a)=>{a.d(v,{X:()=>m});var c=a(94650),p=a(80529);class m{constructor(r){this.http=r,this.dataUrl="tipoGuia/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(r){return this.http.get(this.dataUrl+`consultar/${r}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(r){return this.http.post(this.dataUrl+"agregar",r)}editar(r){return this.http.put(this.dataUrl+"editar",r)}eliminar(r){return this.http.delete(this.dataUrl+`eliminar/${r}`)}static#e=this.\u0275fac=function(T){return new(T||m)(c.LFG(p.eN))};static#i=this.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac})}},65997:(I,v,a)=>{a.r(v),a.d(v,{TipoGuiaModule:()=>G});var c=a(20388),p=a(8923),m=a(41283),R=a(63405),r=a(9116),T=a(13050),U=a(85087),l=a(50986);class _{constructor(){}}var N=a(90429),e=a(94650),E=a(2060),u=a(24006),Z=a(36895),b=a(90061);function D(h,i){1&h&&(e.TgZ(0,"div",32),e._uU(1," La clave es requerido "),e.qZA())}function S(h,i){1&h&&(e.TgZ(0,"div",32),e._uU(1," La fecha alta es requerida "),e.qZA())}const O=function(){return{dateInputFormat:"DD/MM/YYYY"}};class g{constructor(i,o,t){this.bsModalRef=i,this.modalMensajeService=o,this.tipoGuiaService=t,this.placeHolderSelect=l.g.PLACEHOLDER_DROPDOWN,this.mensajeAgregar="El tipo de gu\xeda de curso ha sido agregado",this.mensajeEditar="El tipo de gu\xeda de curso ha sido modificado",this.btnSubmit=!1,this.tipoGuia=new _}ngOnInit(){}limpiarFormulario(){this.tipoGuia=new _,this.accion=l.g.MODAL_ACCION_AGREGAR}agregar(i){this.tipoGuiaService.agregar(this.tipoGuia).subscribe(o=>{this.modalMensajeService.modalExito(this.mensajeAgregar),i.reset(),this.limpiarFormulario(),this.onClose(!0),this.btnSubmit=!1},o=>{this.btnSubmit=!1})}editar(){this.tipoGuiaService.editar(this.tipoGuia).subscribe(i=>{this.modalMensajeService.modalExito(this.mensajeEditar),this.onClose(!0)},i=>{this.btnSubmit=!1})}cancelar(){this.onClose(!0)}enviarFormulario(i){if(this.btnSubmit=!0,!i.valid)return N.CW(i),void(this.btnSubmit=!1);this.accion===l.g.MODAL_ACCION_AGREGAR?this.agregar(i):this.accion===l.g.MODAL_ACCION_EDITAR&&this.editar()}static#e=this.\u0275fac=function(o){return new(o||g)(e.Y36(c.UZ),e.Y36(E.V),e.Y36(p.X))};static#i=this.\u0275cmp=e.Xpm({type:g,selectors:[["app-tipo-guia-formulario"]],decls:56,vars:14,consts:[[1,"d-flex"],[1,"barra-lateral-modal"],[1,"fa","fa-plus"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],[1,"far","fa-times-circle"],["id","modal",1,"modal-body"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],[1,"row"],[1,"col-1",2,"width","25%"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","maxlength","10",1,"form-control",3,"ngModel","required","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],[1,"col-1",2,"width","2%"],[1,"col-1",2,"width","20%"],[1,"calendario"],["type","text","autocomplete","off","placeholder","dd/mm/aaaa","name","fechaAlta","required","","bsDatepicker","","disabled","disabled",1,"form-control",3,"bsConfig","ngModel","ngModelChange"],["fechaAlta","ngModel"],["name","estatusContrato","type","text","disabled","disabled",1,"form-control",3,"value","required"],[1,"col-1",2,"width","30%"],["name","nombreUsuario","type","text","disabled","disabled",1,"form-control",3,"ngModel","ngModelChange"],["nombreUsuarioAlta","ngModel"],[1,"col-md-12"],["id","nombre","name","nombre","type","text","maxlength","50","required","required","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["nombre","ngModel"],[1,"modal-footer"],["type","button",1,"btn-secundario","mr-3",3,"click"],["type","submit",1,"btn-primario","btn-margin-left",3,"disabled"],[1,"error"]],template:function(o,t){if(1&o){const d=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.cancelar()}),e._UZ(8,"i",6),e.qZA()(),e.TgZ(9,"div",7)(10,"form",8,9),e.NdJ("keydown.enter",function(s){return s.preventDefault()})("ngSubmit",function(){e.CHM(d);const s=e.MAs(11);return e.KtG(t.enviarFormulario(s))}),e.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),e._uU(16,"Clave"),e.qZA(),e.TgZ(17,"div")(18,"input",14,15),e.NdJ("ngModelChange",function(s){return t.tipoGuia.idTipoGuia=s}),e.qZA()(),e.YNc(20,D,2,0,"div",16),e.qZA()(),e._UZ(21,"div",17),e.TgZ(22,"div",18)(23,"div",12)(24,"label",13),e._uU(25,"Fecha Alta"),e.qZA(),e.TgZ(26,"div",19)(27,"input",20,21),e.NdJ("ngModelChange",function(s){return t.tipoGuia.fechaAlta=s}),e.qZA()(),e.YNc(29,S,2,0,"div",16),e.qZA()(),e.TgZ(30,"div",18)(31,"div",12)(32,"label",13),e._uU(33,"Estatus"),e.qZA(),e.TgZ(34,"div",19),e._UZ(35,"input",22),e.qZA()()(),e.TgZ(36,"div",23)(37,"div",12)(38,"label",13),e._uU(39,"Usuario"),e.qZA(),e.TgZ(40,"div")(41,"input",24,25),e.NdJ("ngModelChange",function(s){return t.tipoGuia.nombreUsuario=s}),e.qZA()()()()(),e.TgZ(43,"div",10)(44,"div",26)(45,"div",12)(46,"label",13),e._uU(47,"Tipo Gu\xeda de Curso"),e.qZA(),e.TgZ(48,"div")(49,"input",27,28),e.NdJ("ngModelChange",function(s){return t.tipoGuia.nombre=s}),e.qZA()()()()(),e.TgZ(51,"div",29)(52,"button",30),e.NdJ("click",function(){return t.cancelar()}),e._uU(53,"Cancelar"),e.qZA(),e.TgZ(54,"button",31),e._uU(55,"Guardar"),e.qZA()()()()()()}if(2&o){const d=e.MAs(19),n=e.MAs(28);e.xp6(6),e.hij("Tipo de Gu\xeda de Cursos - ",t.accion,""),e.xp6(12),e.Q6J("ngModel",t.tipoGuia.idTipoGuia)("required",!0)("disabled",!0),e.xp6(2),e.Q6J("ngIf",(null==d.errors?null:d.errors.required)&&d.touched),e.xp6(7),e.Q6J("bsConfig",e.DdM(13,O))("ngModel",t.tipoGuia.fechaAlta),e.xp6(2),e.Q6J("ngIf",(null==n.errors?null:n.errors.required)&&n.touched),e.xp6(6),e.Q6J("value",t.tipoGuia.estatus?"Activo":"Inactivo")("required",!0),e.xp6(6),e.Q6J("ngModel",t.tipoGuia.nombreUsuario),e.xp6(8),e.Q6J("ngModel",t.tipoGuia.nombre),e.xp6(5),e.Q6J("disabled",t.btnSubmit)}},dependencies:[u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.nD,u.On,u.F,Z.O5,b.Np,b.Y5],encapsulation:2})}var C=a(60393),F=a(46558),L=a(62861),J=a(58390);function y(h,i){if(1&h){const o=e.EpF();e.TgZ(0,"div",7),e.NdJ("click",function(){e.CHM(o);const d=e.oxw();return e.KtG(d.agregar())}),e.TgZ(1,"button",8),e._uU(2,"Agregar Tipo Gu\xeda de Cursos"),e.qZA()()}}class f{constructor(i,o,t,d,n,s){this.modalMensajeService=i,this.tipoGuiaService=o,this.usuarioService=t,this.accesoService=d,this.modalService=n,this.bsModalRef=s,this.tieneAccesoAgregar=!1,this.accesoEditar=C.M5.Consultar,this.accesoEliminar=C.M5.Eliminar,this.optionsFecha=l.g.CONFIG_DATEPICKER,this.HEADER_GRID="Tipos de Gu\xeda",this.MENSAJE_EXITO_ELIMINAR="El tipo de gu\xeda ha sido eliminado",this.TITULO_MODAL_ELIMINAR="Eliminar Tipo de Gu\xeda",this.columns=[{headerName:"Clave",field:"idTipoGuia",minWidth:100},{headerName:"Estatus",field:"estatus",minWidth:100,valueGetter:M=>M.data.estatus?"Activo":"Inactivo"},{headerName:"Fecha Alta",field:"fechaAlta",minWidth:100,cellRenderer:M=>M.value?new Date(M.value).toLocaleDateString():""},{headerName:"Tipo Gu\xeda de Curso",field:"nombre",minWidth:400},{headerName:"Usuario",field:"nombreUsuario",minWidth:250}]}ngOnInit(){this.accesoService.tieneAcceso(C.M5.Agregar).subscribe(i=>{this.tieneAccesoAgregar=i}),this.consultarGrid()}consultarGrid(){this.tipoGuiaService.consultarGeneral().subscribe(i=>{this.tipoGuiaList=i})}onGridClick(i){i.accion===l.g.GRID_ACCION_EDITAR?this.editar(i.data.idTipoGuia):i.accion===l.g.GRID_ACCION_ELIMINAR&&this.eliminar(i.data)}agregar(){this.bsModalRef=this.modalService.show(g,l.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.accion=l.g.MODAL_ACCION_AGREGAR,this.bsModalRef.content.tipoGuia.fechaAlta=new Date,this.bsModalRef.content.tipoGuia.estatus=!0,this.usuarioService.consultarMiPerfil().subscribe(i=>{i&&(this.bsModalRef.content.tipoGuia.idUsuario=i.idUsuario,this.bsModalRef.content.tipoGuia.nombreUsuario=i.nombreCompleto,this.bsModalRef.content.tipoGuia.fechaAlta=new Date)}),this.bsModalRef.content.onClose=i=>{i&&this.consultarGrid(),this.bsModalRef.hide()}}editar(i){this.tipoGuiaService.consultar(i).subscribe(o=>{this.bsModalRef=this.modalService.show(g,l.g.CONFIG_MODAL_MEDIUM),this.bsModalRef.content.tipoGuia=o,this.bsModalRef.content.accion=l.g.MODAL_ACCION_EDITAR,this.bsModalRef.content.onClose=t=>{t&&this.consultarGrid(),this.bsModalRef.hide()}})}eliminar(i){this.modalMensajeService.modalConfirmacion("\xbfDesea eliminar el tipo de gu\xeda <strong>"+i.nombre+"</strong>?",this.TITULO_MODAL_ELIMINAR,l.g.ICONO_CRUZ).then(o=>{this.tipoGuiaService.eliminar(i.idTipoGuia).subscribe(t=>{this.modalMensajeService.modalExito(this.MENSAJE_EXITO_ELIMINAR),this.consultarGrid()})})}static#e=this.\u0275fac=function(o){return new(o||f)(e.Y36(E.V),e.Y36(p.X),e.Y36(F.i),e.Y36(L.Q),e.Y36(c.tT),e.Y36(c.UZ))};static#i=this.\u0275cmp=e.Xpm({type:f,selectors:[["tipo-guia"]],decls:8,vars:6,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","accesoEditar","accesoEliminar","event"],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Tipos de Gu\xeda de Cursos"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e.YNc(6,y,3,0,"div",5),e.TgZ(7,"app-grid-general",6),e.NdJ("event",function(n){return t.onGridClick(n)}),e.qZA()()()()()),2&o&&(e.xp6(6),e.Q6J("ngIf",t.tieneAccesoAgregar),e.xp6(1),e.Q6J("headerName",t.HEADER_GRID)("data",t.tipoGuiaList)("children",t.columns)("accesoEditar",t.accesoEditar)("accesoEliminar",t.accesoEliminar))},dependencies:[Z.O5,J.$],encapsulation:2})}const Y=[{path:"",component:f,canActivate:[T.m],data:{title:"Consulta",acceso:U.v.CONSULTAR_PAIS}}];class A{static#e=this.\u0275fac=function(o){return new(o||A)};static#i=this.\u0275mod=e.oAB({type:A});static#t=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(Y),r.Bz]})}class G{static#e=this.\u0275fac=function(o){return new(o||G)};static#i=this.\u0275mod=e.oAB({type:G});static#t=this.\u0275inj=e.cJS({providers:[p.X],imports:[A,R.m,b.kn,m.Z,c.zk.forChild()]})}}}]);