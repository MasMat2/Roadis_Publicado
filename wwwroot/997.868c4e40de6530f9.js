"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[997],{30997:(D,b,n)=>{n.r(b),n.d(b,{TipoObservacionModule:()=>v});var f=n(36895),h=n(9116),O=n(13050),l=n(24945),_=n(27974),M=n(70615),A=n(40675),o=n(94650),C=n(17462),T=n(2060),d=n(20388),x=n(383),c=n(24006);const Z=["formulario"];function F(s,i){1&s&&(o.TgZ(0,"div",17),o._uU(1," El Nombre es requerido "),o.qZA())}function y(s,i){if(1&s){const t=o.EpF();o.TgZ(0,"div",8)(1,"div",9)(2,"label",10),o._uU(3,"Estatus"),o.qZA(),o.TgZ(4,"label",18)(5,"input",19),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw(2);return o.KtG(r.entidad.estatus=a)}),o.qZA(),o.TgZ(6,"span",20)(7,"span",21),o._uU(8,"Activo"),o.qZA(),o.TgZ(9,"span",22),o._uU(10,"Inactivo"),o.qZA()()()()()}if(2&s){const t=o.oxw(2);o.xp6(5),o.Q6J("ngModel",t.entidad.estatus)}}function E(s,i){if(1&s){const t=o.EpF();o.TgZ(0,"form",4,5),o.NdJ("keydown.enter",function(a){return a.preventDefault()}),o.TgZ(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"label",10),o._uU(7,"Clave"),o.qZA(),o.TgZ(8,"div")(9,"input",11,12),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.entidad.idTipoObservacion=a)}),o.qZA()()()(),o.TgZ(11,"div",8)(12,"div",9)(13,"label",10),o._uU(14,"Nombre"),o.qZA(),o.TgZ(15,"div")(16,"input",13,14),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.entidad.nombre=a)}),o.qZA()(),o.YNc(18,F,2,0,"div",15),o.qZA()()(),o.TgZ(19,"div",7),o.YNc(20,y,11,1,"div",16),o.qZA()()()}if(2&s){const t=o.MAs(17),e=o.oxw();o.xp6(9),o.Q6J("ngModel",e.entidad.idTipoObservacion)("readonly",!0),o.xp6(7),o.Q6J("ngModel",e.entidad.nombre)("required",!0),o.xp6(2),o.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),o.xp6(2),o.Q6J("ngIf",e.modoEditar)}}function J(s,i){if(1&s){const t=o.EpF();o.TgZ(0,"button",23),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.cancelar())}),o._uU(1," Cancelar "),o.qZA(),o.TgZ(2,"button",24),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.onSubmit(a.formulario))}),o._uU(3," Guardar "),o.qZA()}if(2&s){const t=o.oxw();o.xp6(2),o.Q6J("disabled",t.submitting)}}class m extends M.P{constructor(i,t,e,a,r){super(t),this.tipoObservacionService=i,this.modalService=e,this.bsModalRef=a,this.router=r,this.modoEditar=!1}ngOnInit(){super.onInit(),this.esEditar()}esEditar(){this.accion==A.V_.Editar&&(this.modoEditar=!0)}consultar(i){return this.tipoObservacionService.consultar(i)}agregar(i){return this.tipoObservacionService.agregar(i)}editar(i){return this.tipoObservacionService.editar(i)}static#o=this.\u0275fac=function(t){return new(t||m)(o.Y36(C.b),o.Y36(T.V),o.Y36(d.tT),o.Y36(d.UZ),o.Y36(h.F0))};static#t=this.\u0275cmp=o.Xpm({type:m,selectors:[["app-tipo-observacion-formulario"]],viewQuery:function(t,e){if(1&t&&o.Gf(Z,5),2&t){let a;o.iGM(a=o.CRH())&&(e.formulario=a.first)}},features:[o.qOj],decls:6,vars:1,consts:[[3,"titulo"],["modal",""],["modalBody",""],["modalFooter",""],["novalidate","novalidate","id","form",3,"keydown.enter"],["formulario","ngForm"],[1,"modal-content"],[1,"row"],[1,"col-md-6"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","disabled","",1,"form-control",3,"ngModel","readonly","ngModelChange"],["clave","ngModel"],["name","nombre","type","text","autocomplete","off",1,"form-control",3,"ngModel","required","ngModelChange"],["nombre","ngModel"],["class","error",4,"ngIf"],["class","col-md-6",4,"ngIf"],[1,"error"],[1,"switch"],["id","estatus","name","estatusName","type","checkbox",1,"accent",3,"ngModel","ngModelChange"],[1,"slider","round"],[1,"on"],[1,"off"],["type","button",1,"btn-secundario","flex-shrink-1",3,"click"],["type","button","form","form",1,"btn-primario",3,"disabled","click"]],template:function(t,e){1&t&&(o.TgZ(0,"app-modal-base",0,1),o.YNc(2,E,21,6,"ng-template",null,2,o.W1O),o.YNc(4,J,4,1,"ng-template",null,3,o.W1O),o.qZA()),2&t&&o.Q6J("titulo",e.nombreEntidad+" - "+e.accion)},dependencies:[x.B,f.O5,c._Y,c.Fj,c.Wl,c.JJ,c.JL,c.Q7,c.On,c.F],styles:[".switch[_ngcontent-%COMP%]{top:4px;height:calc(1.5em + .75rem + 7px);width:100px}.slider[_ngcontent-%COMP%]{border:none}.slider[_ngcontent-%COMP%]:before{background-color:#fff;bottom:7px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#ed7031}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(70px)}.on[_ngcontent-%COMP%], .off[_ngcontent-%COMP%]{font-family:Roboto}.off[_ngcontent-%COMP%]{padding-left:20px}"]})}var N=n(52522),G=n(62861),I=n(85246);class u extends _.v{constructor(i,t,e,a){super(t,e,a),this.tipoObservacionService=i,this.HEADER_GRID="Tipo de Observaci\xf3n",this.NOMBRE_ENTIDAD="Tipo de Observaci\xf3n",this.isCollapsed=!0,this.crudConfig={nombreEntidad:this.NOMBRE_ENTIDAD,generoGramatical:"masc",nombrePropiedadId:"idTipoObservacion",formConfig:{ComponenteFormulario:m,modalConfig:N.OS.Default,configAgregar:{acceso:l.Ln.Agregar},configEditar:{acceso:l.Ln.Editar}},configEliminar:{acceso:l.Ln.Eliminar,elementToString:r=>r.nombre}},this.columns=[{headerName:"Clave",field:"idTipoObservacion",width:50,minWidth:100},{headerName:"Estatus",field:"estatus",minWidth:50,width:100,valueGetter:r=>r.data.estatus?"Activo":"Inactivo"},{headerName:"Tipo de Observaci\xf3n",field:"nombre",minWidth:150,width:250}]}ngOnInit(){super.onInit()}consultarGrid(){return this.tipoObservacionService.consultarParaGrid()}eliminar(i){return this.tipoObservacionService.eliminar(i)}static#o=this.\u0275fac=function(t){return new(t||u)(o.Y36(C.b),o.Y36(G.Q),o.Y36(d.tT),o.Y36(T.V))};static#t=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-tipo-observacion"]],features:[o.qOj],decls:1,vars:4,consts:[["titulo","Tipo de Observaci\xf3n","tituloBoton","Tipo de Observaci\xf3n",3,"columns","crudConfig","elementos$","tieneAccesoAgregar$","agregarClick","gridClick"]],template:function(t,e){1&t&&(o.TgZ(0,"app-catalogo-base",0),o.NdJ("agregarClick",function(){return e.agregar()})("gridClick",function(r){return e.onGridClick(r)}),o.qZA()),2&t&&o.Q6J("columns",e.columns)("crudConfig",e.crudConfig)("elementos$",e.registros$)("tieneAccesoAgregar$",e.tieneAccesoAgregar$)},dependencies:[I.B]})}const S=[{path:"",component:u,canActivate:[O.m],data:{title:"Consulta",acceso:l.Ln.Consultar}}];class p{static#o=this.\u0275fac=function(t){return new(t||p)};static#t=this.\u0275mod=o.oAB({type:p});static#e=this.\u0275inj=o.cJS({imports:[h.Bz.forChild(S),h.Bz]})}var Y=n(92020),P=n(41283),Q=n(71436),B=n(43876),U=n(13024);class g{static#o=this.\u0275fac=function(t){return new(t||g)};static#t=this.\u0275mod=o.oAB({type:g});static#e=this.\u0275inj=o.cJS({imports:[B.m81,U.u,f.ez,c.u5]})}class v{static#o=this.\u0275fac=function(t){return new(t||v)};static#t=this.\u0275mod=o.oAB({type:v});static#e=this.\u0275inj=o.cJS({imports:[p,f.ez,Y.A,P.Z,d.zk.forChild(),Q.a,g]})}}}]);