"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[5372],{85246:(M,f,e)=>{e.d(f,{B:()=>c});var o=e(94650),r=e(36895),C=e(58390);const p=["grid"];function l(h,d){if(1&h){const u=o.EpF();o.TgZ(0,"div",8),o.NdJ("click",function(){o.CHM(u);const _=o.oxw();return o.KtG(_.onAgregarClick())}),o.TgZ(1,"button",9),o._uU(2),o.qZA()()}if(2&h){const u=o.oxw();o.xp6(2),o.hij("Agregar ",u.tituloBoton," ")}}class c{constructor(){this.mostrarBotonExcel=!1,this.disableXLS=!1,this.gridClick=new o.vpe,this.agregarClick=new o.vpe,this.excelClick=new o.vpe,this.disableEdit=!0,this.disableDelete=!0}ngOnInit(){this.mapearAccesos()}mapearAccesos(){const d=this.crudConfig.configEliminar;d&&(this.accesoEliminar=d.acceso,this.disableDelete=!1);const u=this.crudConfig.formConfig,n=u&&u.configEditar;n&&(this.accesoEditar=n.acceso,this.disableEdit=!1)}onGridClick(d){this.gridClick.emit(d)}onAgregarClick(){this.agregarClick.emit()}onExcelClick(){this.excelClick.emit()}static#i=this.\u0275fac=function(u){return new(u||c)};static#e=this.\u0275cmp=o.Xpm({type:c,selectors:[["app-catalogo-base"]],viewQuery:function(u,n){if(1&u&&o.Gf(p,5),2&u){let _;o.iGM(_=o.CRH())&&(n.grid=_.first)}},inputs:{columns:"columns",titulo:"titulo",tituloBoton:"tituloBoton",gridOptions:"gridOptions",crudConfig:"crudConfig",elementos$:"elementos$",tieneAccesoAgregar$:"tieneAccesoAgregar$",mostrarBotonExcel:"mostrarBotonExcel",disableXLS:"disableXLS"},outputs:{gridClick:"gridClick",agregarClick:"agregarClick",excelClick:"excelClick"},decls:11,vars:17,consts:[[1,"contenedor"],[1,"titulo-contenedor",3,"hidden"],[1,"cuerpo-contenedor"],[1,"row"],[1,"col-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","gridOptions","children","disableDelete","disableEdit","accesoEditar","accesoEliminar","mostrarBotonExcel","disableXLS","event","exportarExcelEvent"],["grid",""],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(u,n){1&u&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2),o.qZA(),o.TgZ(3,"div",2)(4,"div",3)(5,"div",4),o.YNc(6,l,3,1,"div",5),o.ALo(7,"async"),o.TgZ(8,"app-grid-general",6,7),o.NdJ("event",function(i){return n.onGridClick(i)})("exportarExcelEvent",function(){return n.onExcelClick()}),o.ALo(10,"async"),o.qZA()()()()()),2&u&&(o.xp6(1),o.Q6J("hidden",null==n.titulo),o.xp6(1),o.hij(" ",n.titulo," "),o.xp6(4),o.Q6J("ngIf",o.lcZ(7,13,n.tieneAccesoAgregar$)),o.xp6(2),o.Q6J("headerName",n.crudConfig.nombreEntidad)("data",o.lcZ(10,15,n.elementos$))("gridOptions",n.gridOptions)("children",n.columns)("disableDelete",n.disableDelete)("disableEdit",n.disableEdit)("accesoEditar",n.accesoEditar)("accesoEliminar",n.accesoEliminar)("mostrarBotonExcel",n.mostrarBotonExcel)("disableXLS",n.disableXLS))},dependencies:[r.O5,C.$,r.Ov]})}},92020:(M,f,e)=>{e.d(f,{A:()=>l});var o=e(20388),r=e(63405),C=e(71436),p=e(94650);class l{static#i=this.\u0275fac=function(d){return new(d||l)};static#e=this.\u0275mod=p.oAB({type:l});static#o=this.\u0275inj=p.cJS({imports:[r.m,C.a,o.zk.forChild()]})}},27974:(M,f,e)=>{e.d(f,{v:()=>p});var o=e(94540),r=e(40675),C=e(14815);class p{constructor(c,h,d){this.accesoService=c,this.bsModalService=h,this.mensajeService=d}onInit(){this.actualizarGrid(),this.consultarAccesoAgregar()}actualizarGrid(){this.registros$=this.consultarGrid()}consultarAccesoAgregar(){if(!this.crudConfig.formConfig)return;const c=this.crudConfig.formConfig.configAgregar;c&&(this.tieneAccesoAgregar$=this.accesoService.tieneAcceso(c.acceso))}onGridClick(c){const h=this.crudConfig.nombrePropiedadId,d=c.data[h];if(this.esConfig=c.data.esConfig??!1,"number"!=typeof d)throw new Error(`No se pudo obtener el id del elemento. La propiedad "${this.crudConfig.nombrePropiedadId}" no es un n\xfamero.`);({[o.gy.Editar]:()=>this.editar(d),[o.gy.Eliminar]:()=>this.confirmarEliminacion(c.data,d)})[c.accion]()}openForm(c,h){if(!this.crudConfig.formConfig)throw new Error('No se configur\xf3 la propiedad "formConfig" en el objeto "crudConfig"');const d=c===r.V_.Agregar?this.crudConfig.formConfig.configAgregar:this.crudConfig.formConfig.configEditar;if(!d){const _=c===r.V_.Editar?"configEditar":"configAgregar";throw new Error(`No se configur\xf3 la propiedad "${_}" en el objeto "crudConfig"`)}let u={accion:c,idEntidad:h,nombreEntidad:this.crudConfig.nombreEntidad,generoGramatical:this.crudConfig.generoGramatical,esConfig:this.esConfig,...d.params};u.onClose=_=>{_&&this.actualizarGrid(),n.hide()};const n=this.bsModalService.show(this.crudConfig.formConfig.ComponenteFormulario,{initialState:u,...this.crudConfig.formConfig.modalConfig})}agregar(c){void 0!==c?this.openForm(r.V_.Agregar,c):this.openForm(r.V_.Agregar)}editar(c){this.openForm(r.V_.Editar,c)}confirmarEliminacion(c,h){if(!this.crudConfig.configEliminar)throw new Error('No se configur\xf3 la propiedad "configEliminar" en el objeto "crudConfig"');const d=`Eliminar ${this.crudConfig.nombreEntidad}`,[u,n]="masc"===this.crudConfig.generoGramatical?["El","eliminado"]:["La","eliminada"],A=`\xbfDesea eliminar ${`${u.toLowerCase()} ${this.crudConfig.nombreEntidad.toLowerCase()}`}: <strong>${this.crudConfig.configEliminar.elementToString(c)}</strong>?`;this.mensajeService.modalConfirmacion(A,d,C.m.Cruz).then(()=>{const b=`${u} ${this.crudConfig.nombreEntidad.toLowerCase()} ha sido ${n}`;this.eliminar(h).subscribe(()=>{this.mensajeService.modalExito(b),this.actualizarGrid()})}).catch(()=>{})}}},70615:(M,f,e)=>{e.d(f,{P:()=>C});var o=e(40675),r=e(90429);class C{constructor(l){this.mensajeService=l,this.submitting=!1,this.entidad={}}onInit(){this.accion===o.V_.Editar&&this.idEntidad&&this.consultar(this.idEntidad).subscribe({next:l=>{this.entidad=l}})}onSubmit(l){if(this.submitting=!0,!l.valid)return r.CW(l),void(this.submitting=!1);const[c,h]="masc"===this.generoGramatical?["El","o"]:["La","a"],d=this.accion===o.V_.Agregar?`agregad${h}`:`modificad${h}`,u=`${c} ${this.nombreEntidad.toLocaleLowerCase()} ha sido ${d}`;(this.accion===o.V_.Agregar?this.agregar(this.entidad):this.editar(this.entidad)).subscribe({next:()=>{this.mensajeService.modalExito(u),this.onClose(!0)},error:()=>{this.submitting=!1}})}cancelar(l){l=l??!1,this.onClose(l)}}},40675:(M,f,e)=>{e.d(f,{V_:()=>r,aQ:()=>p,vf:()=>C});var r,l;e(40675);(l=r||(r={})).Agregar="Agregar",l.Editar="Editar",l.Ver="Consultar";const C="Seleccione una opci\xf3n",p="No hay opciones disponibles"},14815:(M,f,e)=>{var o,r;e.d(f,{m:()=>o}),(r=o||(o={})).Cruz="fa fa-times",r.Pesos="fa fa-dollar-sign",r.Cambio="fas fa-exchange-alt",r.CheckOut="fas fa-door-open",r.Exito="fas fa-check"},94540:(M,f,e)=>{e.d(f,{gy:()=>r,sO:()=>C});var r,p;e(94540);(p=r||(r={})).Editar="edit",p.Eliminar="delete",p.Ver="see",p.DescargarPdf="DescargarPdf",p.Revisar="Revisar",p.Presentar="presentar";const C={headerName:"",field:"",cellClass:"center-ag",minWidth:44,maxWidth:44,suppressMovable:!0,resizable:!1,filter:!1,lockPinned:!0,pinned:"right",lockPosition:!0}},95372:(M,f,e)=>{e.r(f),e.d(f,{MunicipioModule:()=>x});var o=e(36441),r=e(51757),C=e(46101),p=e(92020),l=e(20388),c=e(41283),h=e(63405),d=e(36895),u=e(13024),n=e(24006),_=e(88796),i=e(94650);class A{static#i=this.\u0275fac=function(t){return new(t||A)};static#e=this.\u0275mod=i.oAB({type:A});static#o=this.\u0275inj=i.cJS({imports:[d.ez,n.u5,u.u,_.A0]})}var b=e(9116),N=e(85087),B=e(13050),D=e(60393),F=e(52522),$=e(27974);class y{}var W=e(70615),Z=e(40675),S=e(18505),I=e(54004),J=e(69751),L=e(2060),U=e(383);function G(E,s){1&E&&(i.TgZ(0,"div",20),i._uU(1," La clave es requerido "),i.qZA())}function R(E,s){1&E&&(i.TgZ(0,"div",20),i._uU(1," El pa\xeds es requerido "),i.qZA())}function K(E,s){1&E&&(i.TgZ(0,"div",20),i._uU(1," El estado es requerido "),i.qZA())}function j(E,s){1&E&&(i.TgZ(0,"div",20),i._uU(1," El nombre es requerido "),i.qZA())}function Q(E,s){if(1&E){const t=i.EpF();i.TgZ(0,"form",3,4),i.NdJ("keydown.enter",function(g){return g.preventDefault()})("ngSubmit",function(){i.CHM(t);const g=i.MAs(1),m=i.oxw();return i.KtG(m.onSubmit(g))}),i.TgZ(2,"div",5)(3,"div",6)(4,"div",7)(5,"label",8),i._uU(6,"Clave"),i.qZA(),i.TgZ(7,"div")(8,"input",9,10),i.NdJ("ngModelChange",function(g){i.CHM(t);const m=i.oxw();return i.KtG(m.entidad.clave=g)}),i.qZA(),i.YNc(10,G,2,0,"div",11),i.qZA()()(),i.TgZ(11,"div",12)(12,"div",7)(13,"label",8),i._uU(14,"Pa\xeds"),i.qZA(),i.TgZ(15,"ng-select",13,14),i.NdJ("ngModelChange",function(g){i.CHM(t);const m=i.oxw();return i.KtG(m.idPais=g)})("ngModelChange",function(g){i.CHM(t);const m=i.oxw();return i.KtG(m.consultarEstados(g))}),i.ALo(17,"async"),i.qZA()(),i.YNc(18,R,2,0,"div",11),i.qZA(),i.TgZ(19,"div",12)(20,"div",7)(21,"label",8),i._uU(22,"Estado"),i.qZA(),i.TgZ(23,"ng-select",15,16),i.NdJ("ngModelChange",function(g){i.CHM(t);const m=i.oxw();return i.KtG(m.idEstado=g)}),i.ALo(25,"async"),i.qZA()(),i.YNc(26,K,2,0,"div",11),i.qZA()(),i.TgZ(27,"div",5)(28,"div",17)(29,"div",7)(30,"label",8),i._uU(31,"Municipio"),i.qZA(),i.TgZ(32,"div")(33,"input",18,19),i.NdJ("ngModelChange",function(g){i.CHM(t);const m=i.oxw();return i.KtG(m.entidad.nombre=g)}),i.qZA(),i.YNc(35,j,2,0,"div",11),i.qZA()()()()()}if(2&E){const t=i.MAs(9),a=i.MAs(16),g=i.MAs(24),m=i.MAs(34),v=i.oxw();i.xp6(8),i.Q6J("ngModel",v.entidad.clave)("disabled",v.entidad.idMunicipio>0),i.xp6(2),i.Q6J("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),i.xp6(5),i.Q6J("items",i.lcZ(17,18,v.paises$))("required",!0)("ngModel",v.idPais)("placeholder",v.DROPDOWN_PLACEHOLDER)("notFoundText",v.DROPDOWN_NO_OPTIONS),i.xp6(3),i.Q6J("ngIf",(null==a.errors?null:a.errors.required)&&a.touched),i.xp6(5),i.Q6J("items",i.lcZ(25,20,v.estados$))("required",!0)("ngModel",v.idEstado)("placeholder",v.DROPDOWN_PLACEHOLDER)("notFoundText",v.DROPDOWN_NO_OPTIONS)("disabled",!v.idPais),i.xp6(3),i.Q6J("ngIf",(null==g.errors?null:g.errors.required)&&g.touched),i.xp6(7),i.Q6J("ngModel",v.entidad.nombre),i.xp6(2),i.Q6J("ngIf",(null==m.errors?null:m.errors.required)&&m.touched)}}function Y(E,s){if(1&E){const t=i.EpF();i.TgZ(0,"button",21),i.NdJ("click",function(){i.CHM(t);const g=i.oxw();return i.KtG(g.cancelar())}),i._uU(1," Cancelar "),i.qZA(),i.TgZ(2,"button",22),i._uU(3," Guardar "),i.qZA()}if(2&E){const t=i.oxw();i.xp6(2),i.Q6J("disabled",t.submitting)}}class O extends W.P{constructor(s,t,a,g){super(g),this.estadoService=s,this.paisService=t,this.municipioService=a,this.DROPDOWN_PLACEHOLDER=Z.vf,this.DROPDOWN_NO_OPTIONS=Z.aQ}ngOnInit(){super.onInit(),this.consultarPaises()}consultar(s){return this.municipioService.consultarParaFormulario(s).pipe((0,S.b)(t=>{this.idEstado=t.idEstado,this.estadoService.consultar(this.idEstado).subscribe(a=>{this.idPais=a.idPais,this.consultarEstados(this.idPais)})}),(0,I.U)(t=>{const a=new y;return a.idMunicipio=t.idMunicipio,a.clave=t.clave,a.nombre=t.nombre,a.idEstado=t.idEstado,a}))}agregar(s){return this.municipioService.agregar(s)}editar(s){return this.municipioService.editar(s)}onSubmit(s){s.valid&&(this.entidad.idEstado=this.idEstado),super.onSubmit(s)}consultarPaises(){this.paises$=this.paisService.consultarGeneral()}consultarEstados(s){s?this.estados$=this.estadoService.consultarPorPaisParaSelector(s).pipe((0,S.b)(t=>console.log(t))):(this.estados$=new J.y,this.idEstado=void 0)}static#i=this.\u0275fac=function(t){return new(t||O)(i.Y36(o.s),i.Y36(C.$),i.Y36(r.G),i.Y36(L.V))};static#e=this.\u0275cmp=i.Xpm({type:O,selectors:[["app-municipio-formulario"]],features:[i.qOj],decls:5,vars:1,consts:[[3,"titulo"],["modalBody",""],["modalFooter",""],["novalidate","novalidate","id","form",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],[1,"row"],[1,"col-lg-2"],[1,"form-group"],[1,"label-input","required-label"],["name","clave","type","text","maxlength","20","minlength","1","autocomplete","off","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["clave","ngModel"],["class","error",4,"ngIf"],[1,"col-lg-5"],["name","paisName","bindLabel","nombre","bindValue","idPais",3,"items","required","ngModel","placeholder","notFoundText","ngModelChange"],["paisLst","ngModel"],["name","estadoName","bindLabel","nombre","bindValue","idEstado","appendTo","body",3,"items","required","ngModel","placeholder","notFoundText","disabled","ngModelChange"],["estadoLst","ngModel"],[1,"col-lg-7"],["name","nombre","type","text","maxlength","50","autocomplete","off","required","",1,"form-control",3,"ngModel","ngModelChange"],["nombre","ngModel"],[1,"error"],["type","button",1,"btn-secundario",3,"click"],["type","submit","form","form",1,"btn-primario",3,"disabled"]],template:function(t,a){1&t&&(i.TgZ(0,"app-modal-base",0),i.YNc(1,Q,36,22,"ng-template",null,1,i.W1O),i.YNc(3,Y,4,1,"ng-template",null,2,i.W1O),i.qZA()),2&t&&i.Q6J("titulo",a.nombreEntidad+" - "+a.accion)},dependencies:[d.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.On,n.F,U.B,_.w9,d.Ov],encapsulation:2})}var V=e(62861),H=e(85246);class P extends $.v{constructor(s,t,a,g){super(t,a,g),this.municipioService=s,this.NOMBRE_ENTIDAD="Municipio",this.crudConfig={nombreEntidad:this.NOMBRE_ENTIDAD,generoGramatical:"masc",nombrePropiedadId:"idMunicipio",formConfig:{ComponenteFormulario:O,modalConfig:F.OS.Medium,configAgregar:{acceso:D.VY.Agregar},configEditar:{acceso:D.VY.Editar}},configEliminar:{acceso:D.VY.Eliminar,elementToString:m=>m.nombre}},this.columns=[{headerName:"Clave",field:"clave",minWidth:80,maxWidth:80},{headerName:"Pais",field:"nombrePais",minWidth:150},{headerName:"Estado",field:"nombreEstado",minWidth:150},{headerName:"Municipio",field:"nombre",minWidth:150}]}ngOnInit(){super.onInit()}consultarGrid(){return this.municipioService.consultarParaGrid()}eliminar(s){return this.municipioService.eliminar(s)}static#i=this.\u0275fac=function(t){return new(t||P)(i.Y36(r.G),i.Y36(V.Q),i.Y36(l.tT),i.Y36(L.V))};static#e=this.\u0275cmp=i.Xpm({type:P,selectors:[["ng-component"]],features:[i.qOj],decls:1,vars:4,consts:[["titulo","Municipios","tituloBoton","Municipio",3,"columns","crudConfig","elementos$","tieneAccesoAgregar$","agregarClick","gridClick"]],template:function(t,a){1&t&&(i.TgZ(0,"app-catalogo-base",0),i.NdJ("agregarClick",function(){return a.agregar()})("gridClick",function(m){return a.onGridClick(m)}),i.qZA()),2&t&&i.Q6J("columns",a.columns)("crudConfig",a.crudConfig)("elementos$",a.registros$)("tieneAccesoAgregar$",a.tieneAccesoAgregar$)},dependencies:[H.B],encapsulation:2})}const w=[{path:"",component:P,canActivate:[B.m],data:{title:"Consulta",acceso:N.v.CONSULTAR_MUNICIPIO}}];class T{static#i=this.\u0275fac=function(t){return new(t||T)};static#e=this.\u0275mod=i.oAB({type:T});static#o=this.\u0275inj=i.cJS({imports:[b.Bz.forChild(w),b.Bz]})}class x{static#i=this.\u0275fac=function(t){return new(t||x)};static#e=this.\u0275mod=i.oAB({type:x});static#o=this.\u0275inj=i.cJS({providers:[r.G,o.s,C.$],imports:[h.m,c.Z,l.zk.forChild(),p.A,T,A]})}}}]);