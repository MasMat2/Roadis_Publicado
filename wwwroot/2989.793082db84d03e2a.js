"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[2989],{42989:(U,C,a)=>{a.r(C),a.d(C,{RevisionDocumentalModule:()=>p});var f=a(36895),h=a(9116),D=a(13050),x=a(27974),T=a(52522),A=a(70615),Z=a(40675),e=a(94650),_=a(82846),M=a(2060),c=a(20388),b=a(383),s=a(24006);const R=["formulario"];function F(l,i){1&l&&(e.TgZ(0,"div",19),e._uU(1," El texto es requerido "),e.qZA())}function y(l,i){1&l&&(e.TgZ(0,"div",19),e._uU(1," El Significado es requerido "),e.qZA())}function E(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"label",10),e._uU(3,"Estatus"),e.qZA(),e.TgZ(4,"label",20)(5,"input",21),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw(2);return e.KtG(r.entidad.estatus=n)}),e.qZA(),e.TgZ(6,"span",22)(7,"span",23),e._uU(8,"Activo"),e.qZA(),e.TgZ(9,"span",24),e._uU(10,"Inactivo"),e.qZA()()()()()}if(2&l){const t=e.oxw(2);e.xp6(5),e.Q6J("ngModel",t.entidad.estatus)}}function J(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"form",4,5),e.NdJ("keydown.enter",function(n){return n.preventDefault()}),e.TgZ(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"label",10),e._uU(7,"Clave"),e.qZA(),e.TgZ(8,"div")(9,"input",11,12),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.entidad.idRevisionDocumental=n)}),e.qZA()()()(),e.TgZ(11,"div",8)(12,"div",9)(13,"label",10),e._uU(14,"Texto"),e.qZA(),e.TgZ(15,"div")(16,"input",13,14),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.entidad.abreviatura=n)}),e.qZA()(),e.YNc(18,F,2,0,"div",15),e.qZA()()(),e.TgZ(19,"div",7)(20,"div",8)(21,"div",9)(22,"label",10),e._uU(23,"Significado"),e.qZA(),e.TgZ(24,"div")(25,"input",16,17),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.entidad.nombre=n)}),e.qZA()(),e.YNc(27,y,2,0,"div",15),e.qZA()(),e.YNc(28,E,11,1,"div",18),e.qZA()()()}if(2&l){const t=e.MAs(17),o=e.MAs(26),n=e.oxw();e.xp6(9),e.Q6J("ngModel",n.entidad.idRevisionDocumental)("readonly",!0),e.xp6(7),e.Q6J("ngModel",n.entidad.abreviatura)("required",!0),e.xp6(2),e.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),e.xp6(7),e.Q6J("ngModel",n.entidad.nombre)("required",!0),e.xp6(2),e.Q6J("ngIf",(null==o.errors?null:o.errors.required)&&o.touched),e.xp6(1),e.Q6J("ngIf",n.modoEditar)}}function N(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancelar())}),e._uU(1," Cancelar "),e.qZA(),e.TgZ(2,"button",26),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onSubmit(n.formulario))}),e._uU(3," Guardar "),e.qZA()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("disabled",t.submitting)}}class d extends A.P{constructor(i,t,o,n,r){super(t),this.revisionDocumentalService=i,this.modalService=o,this.bsModalRef=n,this.router=r,this.modoEditar=!1}ngOnInit(){super.onInit(),this.esEditar()}esEditar(){this.accion==Z.V_.Editar&&(this.modoEditar=!0)}consultar(i){return this.revisionDocumentalService.consultar(i)}agregar(i){return this.revisionDocumentalService.agregar(i)}editar(i){return this.revisionDocumentalService.editar(i)}static#e=this.\u0275fac=function(t){return new(t||d)(e.Y36(_.D),e.Y36(M.V),e.Y36(c.tT),e.Y36(c.UZ),e.Y36(h.F0))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-revision-documental-formulario"]],viewQuery:function(t,o){if(1&t&&e.Gf(R,5),2&t){let n;e.iGM(n=e.CRH())&&(o.formulario=n.first)}},features:[e.qOj],decls:6,vars:1,consts:[[3,"titulo"],["modal",""],["modalBody",""],["modalFooter",""],["novalidate","novalidate","id","form",3,"keydown.enter"],["formulario","ngForm"],[1,"modal-content"],[1,"row"],[1,"col-md-6"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","disabled","",1,"form-control",3,"ngModel","readonly","ngModelChange"],["clave","ngModel"],["name","abreviatura","type","text","autocomplete","off","maxlength","6",1,"form-control",3,"ngModel","required","ngModelChange"],["abreviatura","ngModel"],["class","error",4,"ngIf"],["name","nombre","type","text","autocomplete","off",1,"form-control",3,"ngModel","required","ngModelChange"],["nombre","ngModel"],["class","col-md-6",4,"ngIf"],[1,"error"],[1,"switch"],["id","estatus","name","estatusName","type","checkbox",1,"accent",3,"ngModel","ngModelChange"],[1,"slider","round"],[1,"on"],[1,"off"],["type","button",1,"btn-secundario","flex-shrink-1",3,"click"],["type","button","form","form",1,"btn-primario",3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"app-modal-base",0,1),e.YNc(2,J,29,9,"ng-template",null,2,e.W1O),e.YNc(4,N,4,1,"ng-template",null,3,e.W1O),e.qZA()),2&t&&e.Q6J("titulo",o.nombreEntidad+" - "+o.accion)},dependencies:[b.B,f.O5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.Q7,s.nD,s.On,s.F],styles:[".switch[_ngcontent-%COMP%]{top:4px;height:calc(1.5em + .75rem + 7px);width:100px}.slider[_ngcontent-%COMP%]{border:none}.slider[_ngcontent-%COMP%]:before{background-color:#fff;bottom:7px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#ed7031}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(70px)}.on[_ngcontent-%COMP%], .off[_ngcontent-%COMP%]{font-family:Roboto}.off[_ngcontent-%COMP%]{padding-left:20px}"]})}var m=a(24945),O=a(62861),S=a(85246);class u extends x.v{constructor(i,t,o,n){super(t,o,n),this.revisionDocumentalService=i,this.HEADER_GRID="Revisi\xf3n Documental",this.NOMBRE_ENTIDAD="Simbolog\xeda de Revisi\xf3n Documental",this.isCollapsed=!0,this.crudConfig={nombreEntidad:this.NOMBRE_ENTIDAD,generoGramatical:"fem",nombrePropiedadId:"idRevisionDocumental",formConfig:{ComponenteFormulario:d,modalConfig:T.OS.Default,configAgregar:{acceso:m.Kf.Agregar},configEditar:{acceso:m.Kf.Editar}},configEliminar:{acceso:m.Kf.Eliminar,elementToString:r=>r.nombre}},this.columns=[{headerName:"Clave",field:"idRevisionDocumental",minWidth:50,width:100},{headerName:"Estatus",field:"estatus",minWidth:50,width:100,valueGetter:r=>r.data.estatus?"Activo":"Inactivo"},{headerName:"Texto",field:"abreviatura",minWidth:50,width:100},{headerName:"Significado",field:"nombre",minWidth:100,width:250}]}ngOnInit(){super.onInit()}consultarGrid(){return this.revisionDocumentalService.consultarParaGrid()}eliminar(i){return this.revisionDocumentalService.eliminar(i)}static#e=this.\u0275fac=function(t){return new(t||u)(e.Y36(_.D),e.Y36(O.Q),e.Y36(c.tT),e.Y36(M.V))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-revision-documental"]],features:[e.qOj],decls:1,vars:4,consts:[["titulo","Revisi\xf3n Documental","tituloBoton","Revisi\xf3n Documental",3,"columns","crudConfig","elementos$","tieneAccesoAgregar$","agregarClick","gridClick"]],template:function(t,o){1&t&&(e.TgZ(0,"app-catalogo-base",0),e.NdJ("agregarClick",function(){return o.agregar()})("gridClick",function(r){return o.onGridClick(r)}),e.qZA()),2&t&&e.Q6J("columns",o.columns)("crudConfig",o.crudConfig)("elementos$",o.registros$)("tieneAccesoAgregar$",o.tieneAccesoAgregar$)},dependencies:[S.B]})}const G=[{path:"",component:u,canActivate:[D.m],data:{title:"Consulta",acceso:m.Kf.Consultar}}];class g{static#e=this.\u0275fac=function(t){return new(t||g)};static#t=this.\u0275mod=e.oAB({type:g});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(G),h.Bz]})}var I=a(92020),Y=a(41283),Q=a(71436),P=a(43876),B=a(13024);class v{static#e=this.\u0275fac=function(t){return new(t||v)};static#t=this.\u0275mod=e.oAB({type:v});static#n=this.\u0275inj=e.cJS({imports:[P.m81,B.u,f.ez,s.u5]})}class p{static#e=this.\u0275fac=function(t){return new(t||p)};static#t=this.\u0275mod=e.oAB({type:p});static#n=this.\u0275inj=e.cJS({imports:[g,f.ez,I.A,Y.Z,c.zk.forChild(),Q.a,v]})}}}]);