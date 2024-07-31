"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[3755],{50496:(O,m,i)=>{i.d(m,{a:()=>u});var r=i(94650),s=i(80529);class u{constructor(o){this.http=o,this.dataUrl="hospital/"}consultarPorCompaniaParaGrid(){return this.http.get(this.dataUrl+"consultarPorCompaniaParaGrid")}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}consultarPorUsuarioSesion(){return this.http.get(this.dataUrl+"consultarPorUsuarioSesion")}consultarInformacionDeposito(o){return this.http.get(this.dataUrl+`consultarInformacionDeposito/${o}`)}consultarPorCompania(o){return this.http.get(this.dataUrl+`consultarPorCompania/${o}`)}consultar(o){return this.http.get(this.dataUrl+`consultar/${o}`)}agregar(o){return this.http.post(this.dataUrl+"agregar",o)}editar(o){return this.http.put(this.dataUrl+"editar",o)}eliminar(o){return this.http.delete(this.dataUrl+`eliminar/${o}`)}consultarConfiguracionesGenerales(){return this.http.get(this.dataUrl+"consultarConfiguracionesGenerales")}EditarConfiguracionesGenerales(o){return this.http.put(this.dataUrl+"EditarConfiguracionesGenerales",o)}consultarAplicadoEncuesta(o){return this.http.get(this.dataUrl+`consultarAplicadoEncuesta/${o}`)}consultarHospitalesPorUsuario(){return this.http.get(this.dataUrl+"consultarHospitalesPorUsuario")}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarDisponiblesParaListaPrecio(o){return this.http.get(this.dataUrl+`consultarDisponiblesParaListaPrecio/${o}`)}consultarPorCompaniaSesion(){return this.http.get(this.dataUrl+"consultarPorCompaniaSesion")}static#e=this.\u0275fac=function(_){return new(_||u)(r.LFG(s.eN))};static#t=this.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}},63755:(O,m,i)=>{i.r(m),i.d(m,{BitacoraMovimientoUsuarioModule:()=>P});var r=i(36895),s=i(8816),u=i(63405),v=i(90061),o=i(3930),_=i(20388),h=i(13050),C=i(85087),n=i(9116),c=i(15861),p=i(50986),e=i(94650),T=i(80529);class E{constructor(a){this.http=a,this.url="bitacoraMovimientoUsuario/"}registrarLogOut(){return this.http.post(this.url+"registrarLogOut",{})}descargarPdfPorFiltro(a){return this.http.post(this.url+"descargarPdfPorFiltro",a,{responseType:"arrayBuffer",observe:"response"})}static#e=this.\u0275fac=function(l){return new(l||E)(e.LFG(T.eN))};static#t=this.\u0275prov=e.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"})}var L=i(46558),y=i(50496),f=i(24006),b=i(88796);function I(D,a){1&D&&e._UZ(0,"i",30)}function B(D,a){1&D&&e._UZ(0,"i",31)}class M{constructor(a,l,t,U){this.location=a,this.bitacoraMovimientoUsuarioService=l,this.usuarioService=t,this.hospitalService=U,this.placeHolderSelect=p.g.PLACEHOLDER_DROPDOWN,this.placeHolderNoOptions=p.g.PLACEHOLDER_DROPDOWN_NO_OPTIONS,this.isCollapsed=!0,this.buscando=!1,this.filtro={idLocacion:null,idUsuario:null,fechaInicio:null,fechaFin:null},this.usuarioList=[],this.locacionList=[],this.idLocacionSeleccionada=0,this.nombreArchivo="Historial de Movimientos.pdf",this.configDate=p.g.CONFIG_DATEPICKER,this.configUsuario=Object.assign({labelField:"nombreCompleto",valueField:"idUsuario",searchField:["nombre"],dropdownParent:"body"},p.g.CONFIG_DROPDOWN_DEFAULT),this.configLocacion=Object.assign({labelField:"nombre",valueField:"idHospital",searchField:["nombre"],dropdownParent:"body"},p.g.CONFIG_DROPDOWN_DEFAULT)}ngOnInit(){this.consultarLocaciones(),this.consultarPDF()}onChangeLocacion(){var a=this;return(0,c.Z)(function*(){a.filtro.idUsuario=null,yield a.consultarUsuarios(a.filtro.idLocacion)})()}consultarUsuarios(a){var l=this;return(0,c.Z)(function*(){l.usuarioList=a>0?yield l.usuarioService.consultarPorLocacionSeleccionadaParaSelector(a).toPromise():[]})()}consultarLocaciones(){this.hospitalService.consultarTodosParaSelector().subscribe(a=>{this.locacionList=a})}enviarFormulario(a){this.buscando=!0,this.consultarPDF()}limpiar(){this.filtro={},this.consultarPDF()}consultarPDF(){this.bitacoraMovimientoUsuarioService.descargarPdfPorFiltro(this.filtro).subscribe(a=>{this.archivo=a.body,this.buscando=!1})}isCollapsedFunction(){this.isCollapsed=!this.isCollapsed,this.isCollapsed?this.height="calc(80vh - 55px)":this.height="calc(64vh - 55px)"}regresar(){this.location.back()}static#e=this.\u0275fac=function(l){return new(l||M)(e.Y36(r.Ye),e.Y36(E),e.Y36(L.i),e.Y36(y.a))};static#t=this.\u0275cmp=e.Xpm({type:M,selectors:[["app-reporte-bitacora-movimiento-usuario"]],decls:52,vars:23,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],[3,"collapse","isAnimated"],[1,"row"],[1,"col-md-3"],[1,"form-group"],[1,"label-input","required-label"],["name","locacionName","bindLabel","nombre","bindValue","idHospital",3,"ngModel","items","placeholder","notFoundText","ngModelChange"],["locacion","ngModel"],["name","usuarioName","bindLabel","nombre","bindValue","idUsuario",3,"ngModel","items","placeholder","notFoundText","ngModelChange"],["usuario","ngModel"],[1,"label-input"],[1,"calendario"],["name","fechaName","type","text","autocomplete","off","placeholder","dd/mm/aaaa","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","ngModelChange"],[1,"row","mb-4"],[1,"col-md-12","text-center"],["type","submit",1,"btn-primario","ml-4",3,"disabled"],["type","button",1,"btn-secundario","limpiar","mr-4",3,"click"],[1,"form-row","panel-busqueda","mb-4"],[1,"panel-carga-elementos","center-element-vertically",3,"click"],[1,"titulo-panel"],[1,"arow-down-up"],["class","fa fa-chevron-down",4,"ngIf"],["class","fa fa-chevron-up",4,"ngIf"],[1,"col-md-12"],[1,"regresar-pdf",3,"click"],[3,"src","height","useBrowserLocale","zoom","filenameForDownload"],[1,"fa","fa-chevron-down"],[1,"fa","fa-chevron-up"]],template:function(l,t){if(1&l){const U=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Bit\xe1cora Movimientos de Usuario"),e.qZA(),e.TgZ(3,"div",2)(4,"form",3,4),e.NdJ("keydown.enter",function(d){return d.preventDefault()})("ngSubmit",function(){e.CHM(U);const d=e.MAs(5);return e.KtG(t.enviarFormulario(d))}),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Locaci\xf3n"),e.qZA(),e.TgZ(12,"div")(13,"ng-select",10,11),e.NdJ("ngModelChange",function(d){return t.filtro.idLocacion=d})("ngModelChange",function(){return t.onChangeLocacion()}),e.qZA()()()(),e.TgZ(15,"div",7)(16,"div",8)(17,"label",9),e._uU(18,"Usuario"),e.qZA(),e.TgZ(19,"div")(20,"ng-select",12,13),e.NdJ("ngModelChange",function(d){return t.filtro.idUsuario=d}),e.qZA()()()(),e.TgZ(22,"div",7)(23,"div",8)(24,"label",14),e._uU(25,"Fecha Inicio"),e.qZA(),e.TgZ(26,"div",15)(27,"input",16),e.NdJ("ngModelChange",function(d){return t.filtro.fechaInicio=d}),e.qZA()()()(),e.TgZ(28,"div",7)(29,"div",8)(30,"label",14),e._uU(31,"Fecha Fin"),e.qZA(),e.TgZ(32,"div",15)(33,"input",16),e.NdJ("ngModelChange",function(d){return t.filtro.fechaFin=d}),e.qZA()()()()(),e.TgZ(34,"div",17)(35,"div",18)(36,"button",19),e._uU(37),e.qZA(),e.TgZ(38,"button",20),e.NdJ("click",function(){return t.limpiar()}),e._uU(39," Limpiar "),e.qZA()()()()(),e.TgZ(40,"div",21)(41,"div",22),e.NdJ("click",function(){return t.isCollapsedFunction()}),e.TgZ(42,"span",23),e._uU(43,"Panel de B\xfasqueda"),e.qZA(),e.TgZ(44,"span",24),e.YNc(45,I,1,0,"i",25),e.YNc(46,B,1,0,"i",26),e.qZA()()(),e.TgZ(47,"div",6)(48,"div",27)(49,"span",28),e.NdJ("click",function(){return t.regresar()}),e._uU(50,"\u27e8\u27e8 Regresar"),e.qZA(),e._UZ(51,"ngx-extended-pdf-viewer",29),e.qZA()()()()}2&l&&(e.xp6(6),e.Q6J("collapse",t.isCollapsed)("isAnimated",!0),e.xp6(7),e.Q6J("ngModel",t.filtro.idLocacion)("items",t.locacionList)("placeholder",t.placeHolderSelect)("notFoundText",t.placeHolderNoOptions),e.xp6(7),e.Q6J("ngModel",t.filtro.idUsuario)("items",t.usuarioList)("placeholder",t.placeHolderSelect)("notFoundText",t.placeHolderNoOptions),e.xp6(7),e.Q6J("ngModel",t.filtro.fechaInicio)("bsConfig",t.configDate),e.xp6(6),e.Q6J("ngModel",t.filtro.fechaFin)("bsConfig",t.configDate),e.xp6(3),e.Q6J("disabled",t.buscando),e.xp6(1),e.hij(" ",t.buscando?"Buscando...":"Buscar"," "),e.xp6(8),e.Q6J("ngIf",t.isCollapsed),e.xp6(1),e.Q6J("ngIf",!t.isCollapsed),e.xp6(5),e.Q6J("src",t.archivo)("height",t.height)("useBrowserLocale",!0)("zoom","page-actual")("filenameForDownload",t.nombreArchivo))},dependencies:[r.O5,s.Y,f._Y,f.Fj,f.JJ,f.JL,f.On,f.F,b.w9,v.Np,v.Y5,o.S3],encapsulation:2})}const F=[{path:"",component:M,canActivate:[h.m],data:{acceso:C.v.BITACORA_MOVIMIENTO_USUARIO}}];class A{static#e=this.\u0275fac=function(l){return new(l||A)};static#t=this.\u0275mod=e.oAB({type:A});static#i=this.\u0275inj=e.cJS({imports:[r.ez,n.Bz.forChild(F),n.Bz]})}class P{static#e=this.\u0275fac=function(l){return new(l||P)};static#t=this.\u0275mod=e.oAB({type:P});static#i=this.\u0275inj=e.cJS({providers:[y.a],imports:[A,r.ez,s.f,u.m,v.kn,o.g3,_.zk.forChild()]})}},8816:(O,m,i)=>{i.d(m,{Y:()=>_,f:()=>h});var r=i(37340),s=i(94650);const u="400ms cubic-bezier(0.4,0.0,0.2,1)",v=[(0,r.oB)({height:0,visibility:"hidden"}),(0,r.jt)(u,(0,r.oB)({height:"*",visibility:"visible"}))],o=[(0,r.oB)({height:"*",visibility:"visible"}),(0,r.jt)(u,(0,r.oB)({height:0,visibility:"hidden"}))];class _{constructor(n,c,p){this._el=n,this._renderer=c,this.collapsed=new s.vpe,this.collapses=new s.vpe,this.expanded=new s.vpe,this.expands=new s.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=p.build(o),this._factoryExpandAnimation=p.build(v)}set display(n){this._display=n,"none"!==n?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(n){this.collapseNewValue=n,(!this._player||this._isAnimationDone)&&(this.isExpanded=n,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(n,c){if(!n||!this._stylesLoaded)return e=>e();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const p=c===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=p.create(this._el.nativeElement),this._player.play(),e=>this._player?.onDone(e)}}_.\u0275fac=function(n){return new(n||_)(s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(r._j))},_.\u0275dir=s.lG2({type:_,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(n,c){2&n&&(s.uIk("aria-hidden",c.isCollapsed),s.ekj("collapse",c.isCollapse)("in",c.isExpanded)("show",c.isExpanded)("collapsing",c.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]});class h{static forRoot(){return{ngModule:h,providers:[]}}}h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=s.oAB({type:h}),h.\u0275inj=s.cJS({})}}]);