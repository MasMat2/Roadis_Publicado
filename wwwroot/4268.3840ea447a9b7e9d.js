"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[4268],{85246:(_,u,o)=>{o.d(u,{B:()=>i});var r=o(94650),n=o(36895),s=o(58390);const f=["grid"];function e(p,d){if(1&p){const c=r.EpF();r.TgZ(0,"div",8),r.NdJ("click",function(){r.CHM(c);const t=r.oxw();return r.KtG(t.onAgregarClick())}),r.TgZ(1,"button",9),r._uU(2),r.qZA()()}if(2&p){const c=r.oxw();r.xp6(2),r.hij("Agregar ",c.tituloBoton," ")}}class i{constructor(){this.mostrarBotonExcel=!1,this.disableXLS=!1,this.gridClick=new r.vpe,this.agregarClick=new r.vpe,this.excelClick=new r.vpe,this.disableEdit=!0,this.disableDelete=!0}ngOnInit(){this.mapearAccesos()}mapearAccesos(){const d=this.crudConfig.configEliminar;d&&(this.accesoEliminar=d.acceso,this.disableDelete=!1);const c=this.crudConfig.formConfig,l=c&&c.configEditar;l&&(this.accesoEditar=l.acceso,this.disableEdit=!1)}onGridClick(d){this.gridClick.emit(d)}onAgregarClick(){this.agregarClick.emit()}onExcelClick(){this.excelClick.emit()}static#t=this.\u0275fac=function(c){return new(c||i)};static#e=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-catalogo-base"]],viewQuery:function(c,l){if(1&c&&r.Gf(f,5),2&c){let t;r.iGM(t=r.CRH())&&(l.grid=t.first)}},inputs:{columns:"columns",titulo:"titulo",tituloBoton:"tituloBoton",gridOptions:"gridOptions",crudConfig:"crudConfig",elementos$:"elementos$",tieneAccesoAgregar$:"tieneAccesoAgregar$",mostrarBotonExcel:"mostrarBotonExcel",disableXLS:"disableXLS"},outputs:{gridClick:"gridClick",agregarClick:"agregarClick",excelClick:"excelClick"},decls:11,vars:17,consts:[[1,"contenedor"],[1,"titulo-contenedor",3,"hidden"],[1,"cuerpo-contenedor"],[1,"row"],[1,"col-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","gridOptions","children","disableDelete","disableEdit","accesoEditar","accesoEliminar","mostrarBotonExcel","disableXLS","event","exportarExcelEvent"],["grid",""],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(c,l){1&c&&(r.TgZ(0,"div",0)(1,"div",1),r._uU(2),r.qZA(),r.TgZ(3,"div",2)(4,"div",3)(5,"div",4),r.YNc(6,e,3,1,"div",5),r.ALo(7,"async"),r.TgZ(8,"app-grid-general",6,7),r.NdJ("event",function(A){return l.onGridClick(A)})("exportarExcelEvent",function(){return l.onExcelClick()}),r.ALo(10,"async"),r.qZA()()()()()),2&c&&(r.xp6(1),r.Q6J("hidden",null==l.titulo),r.xp6(1),r.hij(" ",l.titulo," "),r.xp6(4),r.Q6J("ngIf",r.lcZ(7,13,l.tieneAccesoAgregar$)),r.xp6(2),r.Q6J("headerName",l.crudConfig.nombreEntidad)("data",r.lcZ(10,15,l.elementos$))("gridOptions",l.gridOptions)("children",l.columns)("disableDelete",l.disableDelete)("disableEdit",l.disableEdit)("accesoEditar",l.accesoEditar)("accesoEliminar",l.accesoEliminar)("mostrarBotonExcel",l.mostrarBotonExcel)("disableXLS",l.disableXLS))},dependencies:[n.O5,s.$,n.Ov]})}},92020:(_,u,o)=>{o.d(u,{A:()=>e});var r=o(20388),n=o(63405),s=o(71436),f=o(94650);class e{static#t=this.\u0275fac=function(d){return new(d||e)};static#e=this.\u0275mod=f.oAB({type:e});static#o=this.\u0275inj=f.cJS({imports:[n.m,s.a,r.zk.forChild()]})}},27974:(_,u,o)=>{o.d(u,{v:()=>f});var r=o(94540),n=o(40675),s=o(14815);class f{constructor(i,p,d){this.accesoService=i,this.bsModalService=p,this.mensajeService=d}onInit(){this.actualizarGrid(),this.consultarAccesoAgregar()}actualizarGrid(){this.registros$=this.consultarGrid()}consultarAccesoAgregar(){if(!this.crudConfig.formConfig)return;const i=this.crudConfig.formConfig.configAgregar;i&&(this.tieneAccesoAgregar$=this.accesoService.tieneAcceso(i.acceso))}onGridClick(i){const p=this.crudConfig.nombrePropiedadId,d=i.data[p];if(this.esConfig=i.data.esConfig??!1,"number"!=typeof d)throw new Error(`No se pudo obtener el id del elemento. La propiedad "${this.crudConfig.nombrePropiedadId}" no es un n\xfamero.`);({[r.gy.Editar]:()=>this.editar(d),[r.gy.Eliminar]:()=>this.confirmarEliminacion(i.data,d)})[i.accion]()}openForm(i,p){if(!this.crudConfig.formConfig)throw new Error('No se configur\xf3 la propiedad "formConfig" en el objeto "crudConfig"');const d=i===n.V_.Agregar?this.crudConfig.formConfig.configAgregar:this.crudConfig.formConfig.configEditar;if(!d){const t=i===n.V_.Editar?"configEditar":"configAgregar";throw new Error(`No se configur\xf3 la propiedad "${t}" en el objeto "crudConfig"`)}let c={accion:i,idEntidad:p,nombreEntidad:this.crudConfig.nombreEntidad,generoGramatical:this.crudConfig.generoGramatical,esConfig:this.esConfig,...d.params};c.onClose=t=>{t&&this.actualizarGrid(),l.hide()};const l=this.bsModalService.show(this.crudConfig.formConfig.ComponenteFormulario,{initialState:c,...this.crudConfig.formConfig.modalConfig})}agregar(i){void 0!==i?this.openForm(n.V_.Agregar,i):this.openForm(n.V_.Agregar)}editar(i){this.openForm(n.V_.Editar,i)}confirmarEliminacion(i,p){if(!this.crudConfig.configEliminar)throw new Error('No se configur\xf3 la propiedad "configEliminar" en el objeto "crudConfig"');const d=`Eliminar ${this.crudConfig.nombreEntidad}`,[c,l]="masc"===this.crudConfig.generoGramatical?["El","eliminado"]:["La","eliminada"],M=`\xbfDesea eliminar ${`${c.toLowerCase()} ${this.crudConfig.nombreEntidad.toLowerCase()}`}: <strong>${this.crudConfig.configEliminar.elementToString(i)}</strong>?`;this.mensajeService.modalConfirmacion(M,d,s.m.Cruz).then(()=>{const P=`${c} ${this.crudConfig.nombreEntidad.toLowerCase()} ha sido ${l}`;this.eliminar(p).subscribe(()=>{this.mensajeService.modalExito(P),this.actualizarGrid()})}).catch(()=>{})}}},70615:(_,u,o)=>{o.d(u,{P:()=>s});var r=o(40675),n=o(90429);class s{constructor(e){this.mensajeService=e,this.submitting=!1,this.entidad={}}onInit(){this.accion===r.V_.Editar&&this.idEntidad&&this.consultar(this.idEntidad).subscribe({next:e=>{this.entidad=e}})}onSubmit(e){if(this.submitting=!0,!e.valid)return n.CW(e),void(this.submitting=!1);const[i,p]="masc"===this.generoGramatical?["El","o"]:["La","a"],d=this.accion===r.V_.Agregar?`agregad${p}`:`modificad${p}`,c=`${i} ${this.nombreEntidad.toLocaleLowerCase()} ha sido ${d}`;(this.accion===r.V_.Agregar?this.agregar(this.entidad):this.editar(this.entidad)).subscribe({next:()=>{this.mensajeService.modalExito(c),this.onClose(!0)},error:()=>{this.submitting=!1}})}cancelar(e){e=e??!1,this.onClose(e)}}},33369:(_,u,o)=>{o.d(u,{R:()=>s});var r=o(94650),n=o(80529);class s{constructor(e){this.http=e,this.dataUrl="codigoPostal/"}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarTodosParaGrid(){return this.http.get(this.dataUrl+"consultarTodosParaGrid")}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarPorCodigoPostal(e){return this.http.get(this.dataUrl+`consultarPorCodigoPostal/${e}`)}consultarPorMunicipio(e){return this.http.get(this.dataUrl+`consultarPorMunicipio/${e}`)}consultarPorPaisBusqueda(e,i){return this.http.get(this.dataUrl+`consultarPorPaisBusqueda/${e}/${i}`)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(i){return new(i||s)(r.LFG(n.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac})}},36441:(_,u,o)=>{o.d(u,{s:()=>s});var r=o(94650),n=o(80529);class s{constructor(e){this.http=e,this.dataUrl="estado/"}consultar(e){return this.http.get(this.dataUrl+`${e}`)}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarPorPaisParaSelector(e){return this.http.get(this.dataUrl+`selector/pais/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(i){return new(i||s)(r.LFG(n.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}},51757:(_,u,o)=>{o.d(u,{G:()=>s});var r=o(94650),n=o(80529);class s{constructor(e){this.http=e,this.dataUrl="municipio/"}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarParaSelector(){return this.http.get(this.dataUrl+"selector")}consultarPorEstadoParaSelector(e){return this.http.get(this.dataUrl+`selector/estado/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(i){return new(i||s)(r.LFG(n.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}},46101:(_,u,o)=>{o.d(u,{$:()=>s});var r=o(94650),n=o(80529);class s{constructor(e){this.http=e,this.dataUrl="pais/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarPorClave(e){return this.http.get(this.dataUrl+`consultarPorClave/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(i){return new(i||s)(r.LFG(n.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac})}},40675:(_,u,o)=>{o.d(u,{V_:()=>n,aQ:()=>f,vf:()=>s});var n,e;o(40675);(e=n||(n={})).Agregar="Agregar",e.Editar="Editar",e.Ver="Consultar";const s="Seleccione una opci\xf3n",f="No hay opciones disponibles"},14815:(_,u,o)=>{var r,n;o.d(u,{m:()=>r}),(n=r||(r={})).Cruz="fa fa-times",n.Pesos="fa fa-dollar-sign",n.Cambio="fas fa-exchange-alt",n.CheckOut="fas fa-door-open",n.Exito="fas fa-check"},94540:(_,u,o)=>{o.d(u,{gy:()=>n,sO:()=>s});var n,f;o(94540);(f=n||(n={})).Editar="edit",f.Eliminar="delete",f.Ver="see",f.DescargarPdf="DescargarPdf",f.Revisar="Revisar",f.Presentar="presentar";const s={headerName:"",field:"",cellClass:"center-ag",minWidth:44,maxWidth:44,suppressMovable:!0,resizable:!1,filter:!1,lockPinned:!0,pinned:"right",lockPosition:!0}},13278:(_,u,o)=>{o.r(u),o.d(u,{TurnoModule:()=>y});var r=o(36895),n=o(9116),s=o(13050),f=o(27974),e=o(77579),i=o(15861),p=o(70615),d=o(40675),c=o(50986),l=o(18505),t=o(94650),A=o(96884),M=o(2060),P=o(20388),L=o(383),v=o(24006);const $=["formulario"];function Z(C,g){if(1&C){const a=t.EpF();t.TgZ(0,"form",3,4),t.NdJ("keydown.enter",function(m){return m.preventDefault()}),t.TgZ(2,"div",5),t._uU(3," General "),t.qZA(),t.TgZ(4,"div",6)(5,"div",7)(6,"div",8)(7,"label",9),t._uU(8,"Clave"),t.qZA(),t.TgZ(9,"div",10)(10,"input",11,12),t.NdJ("ngModelChange",function(m){t.CHM(a);const E=t.oxw();return t.KtG(E.entidad.idTurno=m)}),t.qZA()()()(),t.TgZ(12,"div",7)(13,"div",8)(14,"label",9),t._uU(15,"Estatus"),t.qZA(),t.TgZ(16,"div"),t._UZ(17,"input",13),t.qZA()()(),t._UZ(18,"div",7),t.TgZ(19,"div",14)(20,"div",8)(21,"label",9),t._uU(22,"Fecha"),t.qZA(),t.TgZ(23,"div",10),t._UZ(24,"input",15),t.ALo(25,"date"),t._UZ(26,"i",16),t.qZA()()(),t._UZ(27,"div",7),t.TgZ(28,"div",17)(29,"div",8)(30,"label",9),t._uU(31,"Turno"),t.qZA(),t.TgZ(32,"div")(33,"input",18,19),t.NdJ("ngModelChange",function(m){t.CHM(a);const E=t.oxw();return t.KtG(E.entidad.nombre=m)}),t.qZA()()()()()()}if(2&C){const a=t.oxw();t.xp6(10),t.Q6J("ngModel",a.entidad.idTurno)("readonly",!0),t.xp6(7),t.Q6J("value","Activo"),t.xp6(7),t.Q6J("value",t.xi3(25,6,a.fecha,"dd/MM/yyyy"))("required",!0),t.xp6(9),t.Q6J("ngModel",a.entidad.nombre)}}function F(C,g){if(1&C){const a=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(a);const m=t.oxw();return t.KtG(m.cancelar())}),t._uU(1," Cancelar "),t.qZA(),t.TgZ(2,"button",21),t.NdJ("click",function(){t.CHM(a);const m=t.oxw();return t.KtG(m.onSubmit(m.formulario))}),t._uU(3," Guardar Turno "),t.qZA()}if(2&C){const a=t.oxw();t.xp6(2),t.Q6J("disabled",a.submitting)}}class U extends p.P{constructor(g,a,h,m,E){super(a),this.turnoService=g,this.modalService=h,this.bsModalRef=m,this.router=E,this.deshabilitarAgregar=!1,this.destroy$=new e.x,this.esAgregar=!1,this.placeHolderSelect=c.g.PLACEHOLDER_DROPDOWN,this.placeHolderNoOptions=c.g.PLACEHOLDER_DROPDOWN_NO_OPTIONS,this.submiting=!1}ngOnInit(){var g=()=>super.onInit,a=this;return(0,i.Z)(function*(){g().call(a),a.accion===d.V_.Agregar&&!a.idEntidad&&(a.esAgregar=!0,a.fecha=new Date)})()}ngOnDestroy(){this.destroy$.next()}consultar(g){return this.turnoService.consultar(g).pipe((0,l.b)(a=>{console.log(a),this.fecha=new Date(a.fechaAlta)}))}agregar(g){return this.turnoService.agregar(g)}editar(g){return this.turnoService.editar(g)}static#t=this.\u0275fac=function(a){return new(a||U)(t.Y36(A.D),t.Y36(M.V),t.Y36(P.tT),t.Y36(P.UZ),t.Y36(n.F0))};static#e=this.\u0275cmp=t.Xpm({type:U,selectors:[["app-turno-formulario"]],viewQuery:function(a,h){if(1&a&&t.Gf($,5),2&a){let m;t.iGM(m=t.CRH())&&(h.formulario=m.first)}},features:[t.qOj],decls:5,vars:1,consts:[[3,"titulo"],["modalBody",""],["modalFooter",""],["id","form","novalidate","novalidate",3,"keydown.enter"],["formulario","ngForm"],[1,"subseccion"],[1,"row"],[1,"col-md-1",2,"width","12.5%"],[1,"form-group"],[1,"label-input","required-label"],[1,"date-input-container"],["name","clave","type","text","disabled","",1,"form-control",3,"ngModel","readonly","ngModelChange"],["clave","ngModel"],["name","estatus","type","text","maxlength","50","disabled","",1,"form-control",3,"value"],[1,"col-md-1",2,"width","25%"],["type","text","disabled","",1,"form-control",3,"value","required"],[1,"fa-regular","fa-calendar-days"],[1,"col-md-2",2,"width","25%"],["name","nombre","type","text","maxlength","50",1,"form-control",3,"ngModel","ngModelChange"],["nombre","ngModel"],["type","button",1,"btn-secundario","flex-shrink-1",3,"click"],["type","button","form","form",1,"btn-primario",3,"disabled","click"]],template:function(a,h){1&a&&(t.TgZ(0,"app-modal-base",0),t.YNc(1,Z,35,9,"ng-template",null,1,t.W1O),t.YNc(3,F,4,1,"ng-template",null,2,t.W1O),t.qZA()),2&a&&t.Q6J("titulo",h.nombreEntidad+" - "+h.accion)},dependencies:[L.B,v._Y,v.Fj,v.JJ,v.JL,v.nD,v.On,v.F,r.uU],styles:[".date-input-container[_ngcontent-%COMP%]   .fa-calendar-days[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}"]})}var T,C,R=o(52522);(C=T||(T={})).Consultar="APTURN0000",C.Agregar="APTURN1000",C.Editar="APTURN2000",C.Eliminar="APTURN3000",C.NoAcceso="";var G=o(62861),S=o(85246);class b extends f.v{constructor(g,a,h,m,E){super(a,h,m),this.turnoService=g,this.bsModalRef=E,this.isCollapsed=!0,this.HEADER_GRID="Catalogo Turnos",this.destroy$=new e.x,this.NOMBRE_ENTIDAD="An\xe1lisis de Riesgos del Trabajo (ART)",this.crudConfig={nombreEntidad:this.NOMBRE_ENTIDAD,generoGramatical:"fem",nombrePropiedadId:"idTurno",formConfig:{ComponenteFormulario:U,modalConfig:R.OS.Medium,configAgregar:{acceso:T.Agregar},configEditar:{acceso:T.Editar}},configEliminar:{acceso:T.Eliminar,elementToString:B=>B.nombre}},this.columns=[{headerName:"Clave",field:"idTurno",minWidth:150},{headerName:"Estatus",field:"estatus",minWidth:50,width:100,valueGetter:B=>B.data.estatus?"Activo":"Inactivo"},{headerName:"Turno",field:"nombre",minWidth:150}]}ngOnInit(){super.onInit()}consultarGrid(){return this.turnoService.consultarParaGrid()}eliminar(g){return this.turnoService.eliminar(g)}static#t=this.\u0275fac=function(a){return new(a||b)(t.Y36(A.D),t.Y36(G.Q),t.Y36(P.tT),t.Y36(M.V),t.Y36(P.UZ))};static#e=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-turno"]],features:[t.qOj],decls:1,vars:4,consts:[["titulo","Cat\xe1logo de Turno","tituloBoton","Turno",3,"columns","crudConfig","elementos$","tieneAccesoAgregar$","agregarClick","gridClick"]],template:function(a,h){1&a&&(t.TgZ(0,"app-catalogo-base",0),t.NdJ("agregarClick",function(){return h.agregar()})("gridClick",function(E){return h.onGridClick(E)}),t.qZA()),2&a&&t.Q6J("columns",h.columns)("crudConfig",h.crudConfig)("elementos$",h.registros$)("tieneAccesoAgregar$",h.tieneAccesoAgregar$)},dependencies:[S.B]})}const N=[{path:"",component:b,canActivate:[s.m],data:{title:"Consulta",acceso:T.Consultar}}];class O{static#t=this.\u0275fac=function(a){return new(a||O)};static#e=this.\u0275mod=t.oAB({type:O});static#o=this.\u0275inj=t.cJS({imports:[n.Bz.forChild(N),n.Bz]})}var x=o(43876),I=o(13024);class D{static#t=this.\u0275fac=function(a){return new(a||D)};static#e=this.\u0275mod=t.oAB({type:D});static#o=this.\u0275inj=t.cJS({imports:[r.ez,x.m81,I.u,v.u5]})}var W=o(41283),K=o(92020),J=o(71436);class y{static#t=this.\u0275fac=function(a){return new(a||y)};static#e=this.\u0275mod=t.oAB({type:y});static#o=this.\u0275inj=t.cJS({imports:[r.ez,O,K.A,W.Z,x.zkK,J.a,D]})}}}]);