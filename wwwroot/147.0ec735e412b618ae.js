"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[147],{33369:(C,c,a)=>{a.d(c,{R:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="codigoPostal/"}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarTodosParaGrid(){return this.http.get(this.dataUrl+"consultarTodosParaGrid")}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarPorCodigoPostal(e){return this.http.get(this.dataUrl+`consultarPorCodigoPostal/${e}`)}consultarPorMunicipio(e){return this.http.get(this.dataUrl+`consultarPorMunicipio/${e}`)}consultarPorPaisBusqueda(e,s){return this.http.get(this.dataUrl+`consultarPorPaisBusqueda/${e}/${s}`)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac})}},36441:(C,c,a)=>{a.d(c,{s:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="estado/"}consultar(e){return this.http.get(this.dataUrl+`${e}`)}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarPorPaisParaSelector(e){return this.http.get(this.dataUrl+`selector/pais/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}},51757:(C,c,a)=>{a.d(c,{G:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="municipio/"}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarParaSelector(){return this.http.get(this.dataUrl+"selector")}consultarPorEstadoParaSelector(e){return this.http.get(this.dataUrl+`selector/estado/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}},46101:(C,c,a)=>{a.d(c,{$:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="pais/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarPorClave(e){return this.http.get(this.dataUrl+`consultarPorClave/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac})}},38500:(C,c,a)=>{a.d(c,{f:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="sucursal/"}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}consultarPorCompaniaParaGrid(){return this.http.get(this.dataUrl+"consultarPorCompaniaParaGrid")}consultarPorUsuarioSesion(){return this.http.get(this.dataUrl+"consultarPorUsuarioSesion")}consultarInformacionDeposito(e){return this.http.get(this.dataUrl+`consultarInformacionDeposito/${e}`)}consultarPorCompania(e){return this.http.get(this.dataUrl+`consultarPorCompania/${e}`)}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}consultarConfiguracionesGenerales(){return this.http.get(this.dataUrl+"consultarConfiguracionesGenerales")}EditarConfiguracionesGenerales(e){return this.http.put(this.dataUrl+"EditarConfiguracionesGenerales",e)}consultarAplicadoEncuesta(e){return this.http.get(this.dataUrl+`consultarAplicadoEncuesta/${e}`)}consultarHospitalesPorUsuario(){return this.http.get(this.dataUrl+"consultarHospitalesPorUsuario")}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac})}},25587:(C,c,a)=>{a.d(c,{X:()=>r});var o=a(94650),i=a(80529);class r{constructor(e){this.http=e,this.dataUrl="proyecto/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}cargaMasiva(e){return this.http.post(this.dataUrl+"cargaMasiva",e)}consultarImagen(e){return this.http.get(this.dataUrl+`imagen/${e}`)}consultarCuadricula(){return this.http.get(this.dataUrl+"consultarCuadricula")}consultarFiltro(e){return this.http.post(this.dataUrl+"consultarGeneral",e)}consultarCursosColaboradorCuadricula(){return this.http.get(this.dataUrl+"consultarCursosColaboradorCuadricula")}consultarGeneralCursosColaborador(){return this.http.get(this.dataUrl+"consultarGeneralCursosColaborador")}consultarInformacionCursosColaborador(){return this.http.get(this.dataUrl+"consultarInformacionCursosColaborador/")}static#t=this.\u0275fac=function(s){return new(s||r)(o.LFG(i.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac})}},12846:(C,c,a)=>{a.d(c,{Y:()=>E});var o=a(50986),i=a(94650),r=a(2060);class E{constructor(s){this.modalMensajeService=s}validarCamposRequeridos(s){Object.keys(s.controls).forEach(d=>{const _=s.controls[d];_.markAsTouched({onlySelf:!0}),_.markAsDirty({onlySelf:!0})})}validarCamposRequeridosConMensaje(s){Object.keys(s.controls).forEach(d=>{const _=s.controls[d];_.markAsTouched({onlySelf:!0}),_.markAsDirty({onlySelf:!0})}),Object.keys(s.controls).some(d=>{const _=s.controls[d];return!!(_.errors&&_.errors.required&&_.invalid)&&(this.modalMensajeService.modalError(o.g.MENSAJE_REQUERIDOS),!0)})}markAsUntouched(s){Object.keys(s.controls).forEach(d=>{s.controls[d].markAsUntouched({onlySelf:!0})})}static#t=this.\u0275fac=function(d){return new(d||E)(i.LFG(r.V))};static#e=this.\u0275prov=i.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"})}},17720:(C,c,a)=>{a.r(c),a.d(c,{ReporteHistorialActividadesModule:()=>y});var o=a(25587),i=a(90061),r=a(8816),E=a(3930),e=a(38500),s=a(5955),d=a(41283),_=a(63405),h=a(9116),v=a(13050),m=a(50986),t=a(94650),T=a(36895),I=a(46558),R=a(80529);class P{constructor(l){this.http=l,this.dataUrl="PdfHistorialActividadHora/"}descargarReporteHistorialActividadesHora(l){return this.http.post(this.dataUrl+"descargarReporteHistorialActividadHora",l,{responseType:"arraybuffer",observe:"response"})}static#t=this.\u0275fac=function(u){return new(u||P)(t.LFG(R.eN))};static#e=this.\u0275prov=t.Yz7({token:P,factory:P.\u0275fac})}var L=a(12846),A=a(24006),b=a(88796);function F(g,l){1&g&&(t.TgZ(0,"div",33),t._uU(1," El proyecto es requerido para la consulta "),t.qZA())}function N(g,l){1&g&&(t.TgZ(0,"div",33),t._uU(1," El usuario es requerido para la consulta "),t.qZA())}function B(g,l){1&g&&(t.TgZ(0,"div",33),t._uU(1," La fecha de inicio es requerida para la consulta "),t.qZA())}function Z(g,l){1&g&&(t.TgZ(0,"div",33),t._uU(1," La fecha fin es requerida para la consulta "),t.qZA())}function S(g,l){1&g&&t._UZ(0,"i",34)}function W(g,l){1&g&&t._UZ(0,"i",35)}function H(g,l){1&g&&(t.TgZ(0,"div",36),t._UZ(1,"img",37),t.TgZ(2,"span"),t._uU(3,"Procesando... por favor espere"),t.qZA()())}class M{constructor(l,u,n,U,f,p){this.location=l,this.sucursalService=u,this.usuarioService=n,this.historialActividadesHoraService=U,this.proyectoService=f,this.formularioService=p,this.placeHolderSelect=m.g.PLACEHOLDER_DROPDOWN,this.placeHolderNoOptions=m.g.PLACEHOLDER_DROPDOWN_NO_OPTIONS,this.configDate=m.g.CONFIG_DATEPICKER,this.isCollapsed=!0,this.btnSubmit=!1,this.filtro={},this.usuarioList=[],this.nombreArchivo="Historial de Movimientos.pdf",this.configProyectos=Object.assign({labelField:"nombre",valueField:"idProyecto",searchField:["nombre"]},m.g.CONFIG_DROPDOWN_DEFAULT),this.configUsuario=Object.assign({labelField:"nombreCompleto",valueField:"idUsuario",searchField:["nombre"]},m.g.CONFIG_DROPDOWN_DEFAULT),this.configTipo=Object.assign({labelField:"nombre",valueField:"nombre",searchField:["nombre"]},m.g.CONFIG_DROPDOWN_DEFAULT)}ngOnInit(){this.height="calc(80vh - 55px)",this.consultarProyectos(),this.consultarUsuarios(),this.tipos=[{nombre:"Creaci\xf3n"},{nombre:"Actualizaci\xf3n"}]}consultarProyectos(){const l={clave:"000",idProyecto:0,nombre:"Todos los proyectos"};this.proyectoService.consultarGeneral().subscribe(u=>{u.unshift(l),this.proyectos=u})}consultarUsuarios(){const l={idUsuario:0,nombreCompleto:"Todos los usuarios",nombre:"Todos los usuarios"};this.usuarioService.consultarPorTipoUsuario(m.g.CLAVE_USUARIO_ADMINISTRADOR).subscribe(u=>{u.unshift(l),this.usuarioList=u})}consultarPdf(){this.historialActividadesHoraService.descargarReporteHistorialActividadesHora(this.filtro).subscribe(l=>{this.btnSubmit=!1,this.archivo=l.body})}enviarFormulario(l){if(this.btnSubmit=!0,!l.valid)return this.formularioService.validarCamposRequeridos(l),void(this.btnSubmit=!1);this.consultarPdf()}regresar(){this.location.back()}isCollapsedFunction(){this.isCollapsed=!this.isCollapsed,this.isCollapsed?this.height="calc(80vh - 55px)":this.height="calc(64vh - 55px)"}static#t=this.\u0275fac=function(u){return new(u||M)(t.Y36(T.Ye),t.Y36(e.f),t.Y36(I.i),t.Y36(P),t.Y36(o.X),t.Y36(L.Y))};static#e=this.\u0275cmp=t.Xpm({type:M,selectors:[["app-reporte-historial-actividades"]],decls:54,vars:30,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],["novalidate","novalidate",3,"keydown.enter","ngSubmit"],["formulario","ngForm"],[3,"collapse","isAnimated"],[1,"row"],[1,"col-md-3"],[1,"form-group"],[1,"label-input"],["name","idProyectoName","bindLabel","nombre","bindValue","idProyecto",3,"items","placeholder","notFoundText","ngModel","required","ngModelChange"],["idProyectoLst","ngModel"],["class","error",4,"ngIf"],[1,"col-md-2"],["name","idUsuarioName","bindLabel","nombreCompleto","bindValue","idUsuario",3,"items","placeholder","notFoundText","ngModel","required","ngModelChange"],["idUsuarioLst","ngModel"],[1,"calendario"],["name","fechaInicioName","type","text","autocomplete","off","placeholder","dd/mm/aaaa","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","required","ngModelChange"],["fechaInicio","ngModel"],["name","fechaFinName","type","text","autocomplete","off","placeholder","dd/mm/aaaa","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","required","ngModelChange"],["fechaFin","ngModel"],[1,"row","mb-4"],[1,"col-md-12","text-center"],["type","submit",1,"btn-primario"],[1,"form-row","panel-busqueda","mb-4"],[1,"panel-carga-elementos","center-element-vertically",3,"click"],[1,"titulo-panel"],[1,"arow-down-up"],["class","fa fa-chevron-down",4,"ngIf"],["class","fa fa-chevron-up",4,"ngIf"],[1,"col-md-12"],[3,"src","height","useBrowserLocale","zoom","filenameForDownload"],["id","loading-cdis",4,"ngIf"],[1,"error"],[1,"fa","fa-chevron-down"],[1,"fa","fa-chevron-up"],["id","loading-cdis"],["src","assets/img/spinner.gif","alt","Procesando..."]],template:function(u,n){if(1&u){const U=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Bit\xe1cora de Horas"),t.qZA(),t.TgZ(3,"div",2)(4,"form",3,4),t.NdJ("keydown.enter",function(p){return p.preventDefault()})("ngSubmit",function(){t.CHM(U);const p=t.MAs(5);return t.KtG(n.enviarFormulario(p))}),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),t._uU(11,"Proyecto"),t.qZA(),t.TgZ(12,"ng-select",10,11),t.NdJ("ngModelChange",function(p){return n.filtro.idProyecto=p}),t.qZA(),t.YNc(14,F,2,0,"div",12),t.qZA()(),t.TgZ(15,"div",13)(16,"div",8)(17,"label",9),t._uU(18,"Usuario"),t.qZA(),t.TgZ(19,"ng-select",14,15),t.NdJ("ngModelChange",function(p){return n.filtro.idUsuario=p}),t.qZA(),t.YNc(21,N,2,0,"div",12),t.qZA()(),t.TgZ(22,"div",13)(23,"div",8)(24,"label",9),t._uU(25,"Fecha Inicio"),t.qZA(),t.TgZ(26,"div",16)(27,"input",17,18),t.NdJ("ngModelChange",function(p){return n.filtro.fechaInicio=p}),t.qZA()(),t.YNc(29,B,2,0,"div",12),t.qZA()(),t.TgZ(30,"div",13)(31,"div",8)(32,"label",9),t._uU(33,"Fecha Fin"),t.qZA(),t.TgZ(34,"div",16)(35,"input",19,20),t.NdJ("ngModelChange",function(p){return n.filtro.fechaFin=p}),t.qZA()(),t.YNc(37,Z,2,0,"div",12),t.qZA()()(),t._UZ(38,"div",13),t.TgZ(39,"div",21)(40,"div",22)(41,"button",23),t._uU(42,"Buscar"),t.qZA()()()()(),t.TgZ(43,"div",24)(44,"div",25),t.NdJ("click",function(){return n.isCollapsedFunction()}),t.TgZ(45,"span",26),t._uU(46,"Panel de B\xfasqueda"),t.qZA(),t.TgZ(47,"span",27),t.YNc(48,S,1,0,"i",28),t.YNc(49,W,1,0,"i",29),t.qZA()()(),t.TgZ(50,"div",6)(51,"div",30),t._UZ(52,"ngx-extended-pdf-viewer",31),t.qZA()()()(),t.YNc(53,H,4,0,"div",32)}if(2&u){const U=t.MAs(13),f=t.MAs(20),p=t.MAs(28),O=t.MAs(36);t.xp6(6),t.Q6J("collapse",n.isCollapsed)("isAnimated",!0),t.xp6(6),t.Q6J("items",n.proyectos)("placeholder",n.placeHolderSelect)("notFoundText",n.placeHolderNoOptions)("ngModel",n.filtro.idProyecto)("required",!0),t.xp6(2),t.Q6J("ngIf",(null==U.errors?null:U.errors.required)&&U.touched),t.xp6(5),t.Q6J("items",n.usuarioList)("placeholder",n.placeHolderSelect)("notFoundText",n.placeHolderNoOptions)("ngModel",n.filtro.idUsuario)("required",!0),t.xp6(2),t.Q6J("ngIf",(null==f.errors?null:f.errors.required)&&f.touched),t.xp6(6),t.Q6J("ngModel",n.filtro.fechaInicio)("bsConfig",n.configDate)("required",!0),t.xp6(2),t.Q6J("ngIf",(null==p.errors?null:p.errors.required)&&p.touched),t.xp6(6),t.Q6J("ngModel",n.filtro.fechaFin)("bsConfig",n.configDate)("required",!0),t.xp6(2),t.Q6J("ngIf",(null==O.errors?null:O.errors.required)&&O.touched),t.xp6(11),t.Q6J("ngIf",n.isCollapsed),t.xp6(1),t.Q6J("ngIf",!n.isCollapsed),t.xp6(3),t.Q6J("src",n.archivo)("height",n.height)("useBrowserLocale",!0)("zoom","page-actual")("filenameForDownload",n.nombreArchivo),t.xp6(1),t.Q6J("ngIf",n.btnSubmit)}},dependencies:[A._Y,A.Fj,A.JJ,A.JL,A.Q7,A.On,A.F,T.O5,b.w9,r.Y,i.Np,i.Y5,E.S3]})}const K=[{path:"",component:M,canActivate:[v.m],data:{title:"Actividades"}}];class D{static#t=this.\u0275fac=function(u){return new(u||D)};static#e=this.\u0275mod=t.oAB({type:D});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(K),h.Bz]})}class y{static#t=this.\u0275fac=function(u){return new(u||y)};static#e=this.\u0275mod=t.oAB({type:y});static#a=this.\u0275inj=t.cJS({providers:[s.W,e.f,o.X,P],imports:[D,_.m,d.Z,r.f,i.kn,E.g3]})}},8816:(C,c,a)=>{a.d(c,{Y:()=>s,f:()=>d});var o=a(37340),i=a(94650);const r="400ms cubic-bezier(0.4,0.0,0.2,1)",E=[(0,o.oB)({height:0,visibility:"hidden"}),(0,o.jt)(r,(0,o.oB)({height:"*",visibility:"visible"}))],e=[(0,o.oB)({height:"*",visibility:"visible"}),(0,o.jt)(r,(0,o.oB)({height:0,visibility:"hidden"}))];class s{constructor(h,v,m){this._el=h,this._renderer=v,this.collapsed=new i.vpe,this.collapses=new i.vpe,this.expanded=new i.vpe,this.expands=new i.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=m.build(e),this._factoryExpandAnimation=m.build(E)}set display(h){this._display=h,"none"!==h?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(h){this.collapseNewValue=h,(!this._player||this._isAnimationDone)&&(this.isExpanded=h,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(h,v){if(!h||!this._stylesLoaded)return t=>t();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const m=v===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=m.create(this._el.nativeElement),this._player.play(),t=>this._player?.onDone(t)}}s.\u0275fac=function(h){return new(h||s)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(o._j))},s.\u0275dir=i.lG2({type:s,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(h,v){2&h&&(i.uIk("aria-hidden",v.isCollapsed),i.ekj("collapse",v.isCollapse)("in",v.isExpanded)("show",v.isExpanded)("collapsing",v.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]});class d{static forRoot(){return{ngModule:d,providers:[]}}}d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({})}}]);