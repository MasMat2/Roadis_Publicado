"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[4624],{44624:($,v,n)=>{n.r(v),n.d(v,{TipoTrabajoModule:()=>h});var d=n(36895),b=n(9116),_=n(13050),p=n(31229),j=n(27974),Z=n(52522),M=n(70615),A=n(40675),t=n(94650),x=n(80529);class c{constructor(a){this.http=a,this.dataUrl="tipotrabajo/"}consultar(a){return this.http.get(this.dataUrl+`${a}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}agregar(a){return this.http.post(this.dataUrl,a)}editar(a){return this.http.put(this.dataUrl,a)}eliminar(a){return this.http.delete(this.dataUrl+`${a}`)}static#t=this.\u0275fac=function(o){return new(o||c)(t.LFG(x.eN))};static#o=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}var C=n(2060),m=n(20388),F=n(383),s=n(24006);const y=["formulario"];function E(r,a){1&r&&(t.TgZ(0,"div",17),t._uU(1," El Nombre es requerido "),t.qZA())}function J(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"label",10),t._uU(3,"Estatus"),t.qZA(),t.TgZ(4,"label",18)(5,"input",19),t.NdJ("ngModelChange",function(i){t.CHM(o);const l=t.oxw(2);return t.KtG(l.entidad.habilitada=i)}),t.qZA(),t.TgZ(6,"span",20)(7,"span",21),t._uU(8,"Activo"),t.qZA(),t.TgZ(9,"span",22),t._uU(10,"Inactivo"),t.qZA()()()()()}if(2&r){const o=t.oxw(2);t.xp6(5),t.Q6J("ngModel",o.entidad.habilitada)}}function N(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("keydown.enter",function(i){return i.preventDefault()}),t.TgZ(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"label",10),t._uU(7,"Clave"),t.qZA(),t.TgZ(8,"div")(9,"input",11,12),t.NdJ("ngModelChange",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.entidad.idTipoTrabajo=i)}),t.qZA()()()(),t.TgZ(11,"div",8)(12,"div",9)(13,"label",10),t._uU(14,"Tipo de Trabajo"),t.qZA(),t.TgZ(15,"div")(16,"input",13,14),t.NdJ("ngModelChange",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.entidad.nombre=i)}),t.qZA()(),t.YNc(18,E,2,0,"div",15),t.qZA()()(),t.TgZ(19,"div",7),t.YNc(20,J,11,1,"div",16),t.qZA()()()}if(2&r){const o=t.MAs(17),e=t.oxw();t.xp6(9),t.Q6J("ngModel",e.entidad.idTipoTrabajo)("readonly",!0),t.xp6(7),t.Q6J("ngModel",e.entidad.nombre)("required",!0),t.xp6(2),t.Q6J("ngIf",(null==o.errors?null:o.errors.required)&&o.touched),t.xp6(2),t.Q6J("ngIf",e.modoEditar)}}function O(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.cancelar())}),t._uU(1," Cancelar "),t.qZA(),t.TgZ(2,"button",24),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.onSubmit(i.formulario))}),t._uU(3," Guardar "),t.qZA()}if(2&r){const o=t.oxw();t.xp6(2),t.Q6J("disabled",o.submitting)}}class u extends M.P{constructor(a,o,e,i,l){super(o),this.tipoTrabajoService=a,this.modalService=e,this.bsModalRef=i,this.router=l,this.modoEditar=!1}ngOnInit(){super.onInit(),this.esEditar()}esEditar(){this.accion==A.V_.Editar&&(this.modoEditar=!0)}consultar(a){return this.tipoTrabajoService.consultar(a)}agregar(a){return this.tipoTrabajoService.agregar(a)}editar(a){return this.tipoTrabajoService.editar(a)}static#t=this.\u0275fac=function(o){return new(o||u)(t.Y36(c),t.Y36(C.V),t.Y36(m.tT),t.Y36(m.UZ),t.Y36(b.F0))};static#o=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-tipo-trabajo-formulario"]],viewQuery:function(o,e){if(1&o&&t.Gf(y,5),2&o){let i;t.iGM(i=t.CRH())&&(e.formulario=i.first)}},features:[t.qOj],decls:6,vars:1,consts:[[3,"titulo"],["modal",""],["modalBody",""],["modalFooter",""],["novalidate","novalidate","id","form",3,"keydown.enter"],["formulario","ngForm"],[1,"modal-content"],[1,"row"],[1,"col-md-6"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","disabled","",1,"form-control",3,"ngModel","readonly","ngModelChange"],["clave","ngModel"],["name","nombre","type","text","autocomplete","off",1,"form-control",3,"ngModel","required","ngModelChange"],["nombre","ngModel"],["class","error",4,"ngIf"],["class","col-md-6",4,"ngIf"],[1,"error"],[1,"switch"],["id","habilitada","name","habilitadaName","type","checkbox",1,"accent",3,"ngModel","ngModelChange"],[1,"slider","round"],[1,"on"],[1,"off"],["type","button",1,"btn-secundario","flex-shrink-1",3,"click"],["type","button","form","form",1,"btn-primario",3,"disabled","click"]],template:function(o,e){1&o&&(t.TgZ(0,"app-modal-base",0,1),t.YNc(2,N,21,6,"ng-template",null,2,t.W1O),t.YNc(4,O,4,1,"ng-template",null,3,t.W1O),t.qZA()),2&o&&t.Q6J("titulo",e.nombreEntidad+" - "+e.accion)},dependencies:[F.B,d.O5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.Q7,s.On,s.F],styles:[".switch[_ngcontent-%COMP%]{top:4px;height:calc(1.5em + .75rem + 7px);width:100px}.slider[_ngcontent-%COMP%]{border:none}.slider[_ngcontent-%COMP%]:before{background-color:#fff;bottom:7px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#ed7031}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(70px)}.on[_ngcontent-%COMP%], .off[_ngcontent-%COMP%]{font-family:Roboto}.off[_ngcontent-%COMP%]{padding-left:20px}"]})}var I=n(62861),U=n(85246);function Y(r,a){1&r&&t._UZ(0,"i",7)}function G(r,a){1&r&&t._UZ(0,"i",8)}class g extends j.v{constructor(a,o,e,i){super(o,e,i),this.tipoTrabajoService=a,this.isCollapsed=!0,this.HEADER_GRID="Tipo de trabajo",this.NOMBRE_ENTIDAD="Tipo de trabajo",this.crudConfig={nombreEntidad:this.NOMBRE_ENTIDAD,generoGramatical:"masc",nombrePropiedadId:"idTipoTrabajo",formConfig:{ComponenteFormulario:u,modalConfig:Z.OS.Default,configAgregar:{acceso:p.rb.Agregar},configEditar:{acceso:p.rb.Editar}},configEliminar:{acceso:p.rb.Eliminar,elementToString:l=>l.nombre}},this.columns=[{headerName:"Clave",field:"idTipoTrabajo",minWidth:150},{headerName:"Estatus",field:"habilitada",minWidth:150,valueGetter:l=>l.data.habilitada?"Activo":"Inactivo"},{headerName:"Tipo Trabajo",field:"nombre",minWidth:250}]}ngOnInit(){super.onInit()}consultarGrid(){return this.tipoTrabajoService.consultarParaGrid()}eliminar(a){return this.tipoTrabajoService.eliminar(a)}static#t=this.\u0275fac=function(o){return new(o||g)(t.Y36(c),t.Y36(I.Q),t.Y36(m.tT),t.Y36(C.V))};static#o=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-tipo-trabajo"]],features:[t.qOj],decls:8,vars:6,consts:[[1,"form-row","panel-busqueda","mb-4"],[1,"panel-carga-elementos","center-element-vertically",3,"click"],[1,"titulo-panel"],[1,"arow-down-up"],["class","fa fa-chevron-down",4,"ngIf"],["class","fa fa-chevron-up",4,"ngIf"],["titulo","Tipos de Trabajo","tituloBoton","Tipo Trabajo",3,"columns","crudConfig","elementos$","tieneAccesoAgregar$","agregarClick","gridClick"],[1,"fa","fa-chevron-down"],[1,"fa","fa-chevron-up"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return e.isCollapsed=!e.isCollapsed}),t.TgZ(2,"span",2),t._uU(3,"Panel de B\xfasqueda"),t.qZA(),t.TgZ(4,"span",3),t.YNc(5,Y,1,0,"i",4),t.YNc(6,G,1,0,"i",5),t.qZA()()(),t.TgZ(7,"app-catalogo-base",6),t.NdJ("agregarClick",function(){return e.agregar()})("gridClick",function(l){return e.onGridClick(l)}),t.qZA()),2&o&&(t.xp6(5),t.Q6J("ngIf",e.isCollapsed),t.xp6(1),t.Q6J("ngIf",!e.isCollapsed),t.xp6(1),t.Q6J("columns",e.columns)("crudConfig",e.crudConfig)("elementos$",e.registros$)("tieneAccesoAgregar$",e.tieneAccesoAgregar$))},dependencies:[d.O5,U.B]})}const P=[{path:"",component:g,canActivate:[_.m],data:{title:"Consulta",acceso:p.P.Consultar}}];class f{static#t=this.\u0275fac=function(o){return new(o||f)};static#o=this.\u0275mod=t.oAB({type:f});static#a=this.\u0275inj=t.cJS({imports:[b.Bz.forChild(P),b.Bz]})}var Q=n(92020),S=n(41283),B=n(71436),k=n(43876),D=n(13024);class T{static#t=this.\u0275fac=function(o){return new(o||T)};static#o=this.\u0275mod=t.oAB({type:T});static#a=this.\u0275inj=t.cJS({imports:[k.m81,D.u,d.ez,s.u5]})}class h{static#t=this.\u0275fac=function(o){return new(o||h)};static#o=this.\u0275mod=t.oAB({type:h});static#a=this.\u0275inj=t.cJS({imports:[f,d.ez,Q.A,S.Z,m.zk.forChild(),B.a,T]})}}}]);