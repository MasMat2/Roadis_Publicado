"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[9361],{33369:(m,u,n)=>{n.d(u,{R:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="codigoPostal/"}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarTodosParaGrid(){return this.http.get(this.dataUrl+"consultarTodosParaGrid")}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarPorCodigoPostal(e){return this.http.get(this.dataUrl+`consultarPorCodigoPostal/${e}`)}consultarPorMunicipio(e){return this.http.get(this.dataUrl+`consultarPorMunicipio/${e}`)}consultarPorPaisBusqueda(e,o){return this.http.get(this.dataUrl+`consultarPorPaisBusqueda/${e}/${o}`)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},36441:(m,u,n)=>{n.d(u,{s:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="estado/"}consultar(e){return this.http.get(this.dataUrl+`${e}`)}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarPorPaisParaSelector(e){return this.http.get(this.dataUrl+`selector/pais/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}},51757:(m,u,n)=>{n.d(u,{G:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="municipio/"}consultarParaFormulario(e){return this.http.get(this.dataUrl+`formulario/${e}`)}consultarParaGrid(){return this.http.get(this.dataUrl+"grid")}consultarParaSelector(){return this.http.get(this.dataUrl+"selector")}consultarPorEstadoParaSelector(e){return this.http.get(this.dataUrl+`selector/estado/${e}`)}agregar(e){return this.http.post(this.dataUrl,e)}editar(e){return this.http.put(this.dataUrl,e)}eliminar(e){return this.http.delete(this.dataUrl+`${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}},46101:(m,u,n)=>{n.d(u,{$:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="pais/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarPorClave(e){return this.http.get(this.dataUrl+`consultarPorClave/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},48946:(m,u,n)=>{n.d(u,{N:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="flujo/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultarParaVisor(e){return this.http.get(this.dataUrl+`consultarParaVisor/${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},60230:(m,u,n)=>{n.d(u,{E:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="ProyectoActividad/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarParaFormulario(e){return this.http.get(this.dataUrl+`consultarParaFormulario/${e}`)}consultarGeneral(e){return this.http.get(this.dataUrl+`consultarGeneral/${e}`)}consultarParaMonitor(e){return this.http.post(this.dataUrl+"consultarParaMonitor",e)}asignarActividad(e){return this.http.post(this.dataUrl+`asignarActividad/${e}`,null)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}liberar(e){return this.http.put(this.dataUrl+`liberar/${e}`,null)}seguimientoFlujo(e){return this.http.put(this.dataUrl+"seguimientoFlujo",e)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},28231:(m,u,n)=>{n.d(u,{d:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="ProyectoEstatus/"}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},25587:(m,u,n)=>{n.d(u,{X:()=>r});var t=n(94650),c=n(80529);class r{constructor(e){this.http=e,this.dataUrl="proyecto/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarGeneral(){return this.http.get(this.dataUrl+"consultarGeneral")}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}cargaMasiva(e){return this.http.post(this.dataUrl+"cargaMasiva",e)}consultarImagen(e){return this.http.get(this.dataUrl+`imagen/${e}`)}consultarCuadricula(){return this.http.get(this.dataUrl+"consultarCuadricula")}consultarFiltro(e){return this.http.post(this.dataUrl+"consultarGeneral",e)}consultarCursosColaboradorCuadricula(){return this.http.get(this.dataUrl+"consultarCursosColaboradorCuadricula")}consultarGeneralCursosColaborador(){return this.http.get(this.dataUrl+"consultarGeneralCursosColaborador")}consultarInformacionCursosColaborador(){return this.http.get(this.dataUrl+"consultarInformacionCursosColaborador/")}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}},19770:(m,u,n)=>{n.d(u,{z:()=>t});class t{constructor(){}}},75040:(m,u,n)=>{var t,o,c,r,h,e;n.d(u,{Au:()=>h,DQ:()=>t,ET:()=>r,Uw:()=>e,_v:()=>c}),(o=t||(t={})).Consultar="APGUIM1000",o.Agregar="APGUIM2000",o.Editar="APGUIM3000",o.Eliminar="APGUIM4000",function(o){o.Consultar="APPRIM0000",o.Agregar="APPRIM1000",o.Editar="APPRIM2000",o.Eliminar="APPRIM3000",o.EditarEstatus="APPRIM4000"}(c||(c={})),function(o){o.Consultar="APRERA0000",o.Agregar="APRERA1000"}(r||(r={})),function(o){o.Consultar="APARTF0000",o.Agregar="APARTF1000",o.Editar="APARTF2000",o.Eliminar="APARTF3000"}(h||(h={})),function(o){o.Consultar="APMORE0000"}(e||(e={}))},74369:(m,u,n)=>{n.d(u,{E:()=>o});var t=n(20388),c=n(48946),r=n(63405),h=n(75700),e=n(94650);class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#e=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({providers:[c.N],imports:[r.m,t.zk.forChild(),h.b]})}},79007:(m,u,n)=>{n.d(u,{a:()=>c});var t=n(94650);class c{transform(h){return this.obtenerClaseEstatus(h)}obtenerClaseEstatus(h){let e=new Map;return e.set(1,"en-tiempo"),e.set(2,"atrasado"),e.set(3,"cancelado"),e.set(4,"terminado"),e.set(5,"liberado"),e.set(6,"riesgo"),e.set(7,"por-iniciar"),e.get(h)||""}static#t=this.\u0275fac=function(e){return new(e||c)};static#e=this.\u0275pipe=t.Yjl({name:"obtenerClaseEstatusProyecto",type:c,pure:!0})}},4724:(m,u,n)=>{n.d(u,{w:()=>r});var t=n(36895),c=n(94650);class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=c.oAB({type:r});static#i=this.\u0275inj=c.cJS({imports:[t.ez]})}},8816:(m,u,n)=>{n.d(u,{Y:()=>o,f:()=>g});var t=n(37340),c=n(94650);const r="400ms cubic-bezier(0.4,0.0,0.2,1)",h=[(0,t.oB)({height:0,visibility:"hidden"}),(0,t.jt)(r,(0,t.oB)({height:"*",visibility:"visible"}))],e=[(0,t.oB)({height:"*",visibility:"visible"}),(0,t.jt)(r,(0,t.oB)({height:0,visibility:"hidden"}))];class o{constructor(p,f,C){this._el=p,this._renderer=f,this.collapsed=new c.vpe,this.collapses=new c.vpe,this.expanded=new c.vpe,this.expands=new c.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=C.build(e),this._factoryExpandAnimation=C.build(h)}set display(p){this._display=p,"none"!==p?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(p){this.collapseNewValue=p,(!this._player||this._isAnimationDone)&&(this.isExpanded=p,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(p,f){if(!p||!this._stylesLoaded)return P=>P();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const C=f===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=C.create(this._el.nativeElement),this._player.play(),P=>this._player?.onDone(P)}}o.\u0275fac=function(p){return new(p||o)(c.Y36(c.SBq),c.Y36(c.Qsj),c.Y36(t._j))},o.\u0275dir=c.lG2({type:o,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(p,f){2&p&&(c.uIk("aria-hidden",f.isCollapsed),c.ekj("collapse",f.isCollapse)("in",f.isExpanded)("show",f.isExpanded)("collapsing",f.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]});class g{static forRoot(){return{ngModule:g,providers:[]}}}g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=c.oAB({type:g}),g.\u0275inj=c.cJS({})},75700:(m,u,n)=>{n.d(u,{b:()=>I,l:()=>D});var t=n(94650),c=n(10805),r=n(91795),h=n(36895),e=n(60982),o=n(95984),g=n(98876),v=n(83891),p=n(49443);const f=["itemsContainer"];function C(a,i){1&a&&t.GkF(0)}function P(a,i){if(1&a&&(t.TgZ(0,"div",11),t.Hsn(1),t.YNc(2,C,1,0,"ng-container",12),t.qZA()),2&a){const s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.headerTemplate)}}function O(a,i){1&a&&t._UZ(0,"ChevronLeftIcon",17),2&a&&t.Q6J("styleClass","carousel-prev-icon")}function T(a,i){1&a&&t._UZ(0,"ChevronUpIcon",17),2&a&&t.Q6J("styleClass","carousel-prev-icon")}function A(a,i){if(1&a&&(t.ynx(0),t.YNc(1,O,1,1,"ChevronLeftIcon",16),t.YNc(2,T,1,1,"ChevronUpIcon",16),t.BQk()),2&a){const s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!s.isVertical()),t.xp6(1),t.Q6J("ngIf",s.isVertical())}}function U(a,i){}function x(a,i){1&a&&t.YNc(0,U,0,0,"ng-template")}function B(a,i){if(1&a&&(t.TgZ(0,"span",18),t.YNc(1,x,1,0,null,12),t.qZA()),2&a){const s=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",s.previousIconTemplate)}}const b=function(a){return{"p-carousel-prev p-link":!0,"p-disabled":a}};function R(a,i){if(1&a){const s=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(_){t.CHM(s);const d=t.oxw();return t.KtG(d.navBackward(_))}),t.YNc(1,A,3,2,"ng-container",14),t.YNc(2,B,2,1,"span",15),t.qZA()}if(2&a){const s=t.oxw();t.Q6J("ngClass",t.VKq(4,b,s.isBackwardNavDisabled()))("disabled",s.isBackwardNavDisabled()),t.xp6(1),t.Q6J("ngIf",!s.previousIconTemplate),t.xp6(1),t.Q6J("ngIf",s.previousIconTemplate)}}function L(a,i){1&a&&t.GkF(0)}const M=function(a,i,s){return{"p-carousel-item p-carousel-item-cloned":!0,"p-carousel-item-active":a,"p-carousel-item-start":i,"p-carousel-item-end":s}},y=function(a){return{$implicit:a}};function S(a,i){if(1&a&&(t.TgZ(0,"div",2),t.YNc(1,L,1,0,"ng-container",19),t.qZA()),2&a){const s=i.$implicit,l=i.index,_=t.oxw();t.Q6J("ngClass",t.kEZ(3,M,-1*_.totalShiftedItems===_.value.length,0===l,_.clonedItemsForStarting.length-1===l)),t.xp6(1),t.Q6J("ngTemplateOutlet",_.itemTemplate)("ngTemplateOutletContext",t.VKq(7,y,s))}}function w(a,i){1&a&&t.GkF(0)}const K=function(a,i,s){return{"p-carousel-item":!0,"p-carousel-item-active":a,"p-carousel-item-start":i,"p-carousel-item-end":s}};function W(a,i){if(1&a&&(t.TgZ(0,"div",2),t.YNc(1,w,1,0,"ng-container",19),t.qZA()),2&a){const s=i.$implicit,l=i.index,_=t.oxw();t.Q6J("ngClass",t.kEZ(3,K,_.firstIndex()<=l&&_.lastIndex()>=l,_.firstIndex()===l,_.lastIndex()===l)),t.xp6(1),t.Q6J("ngTemplateOutlet",_.itemTemplate)("ngTemplateOutletContext",t.VKq(7,y,s))}}function V(a,i){1&a&&t.GkF(0)}function F(a,i){if(1&a&&(t.TgZ(0,"div",2),t.YNc(1,V,1,0,"ng-container",19),t.qZA()),2&a){const s=i.$implicit,l=i.index,_=t.oxw();t.Q6J("ngClass",t.kEZ(3,M,-1*_.totalShiftedItems===_.numVisible,0===l,_.clonedItemsForFinishing.length-1===l)),t.xp6(1),t.Q6J("ngTemplateOutlet",_.itemTemplate)("ngTemplateOutletContext",t.VKq(7,y,s))}}function N(a,i){1&a&&t._UZ(0,"ChevronRightIcon",17),2&a&&t.Q6J("styleClass","carousel-prev-icon")}function k(a,i){1&a&&t._UZ(0,"ChevronDownIcon",17),2&a&&t.Q6J("styleClass","carousel-prev-icon")}function $(a,i){if(1&a&&(t.ynx(0),t.YNc(1,N,1,1,"ChevronRightIcon",16),t.YNc(2,k,1,1,"ChevronDownIcon",16),t.BQk()),2&a){const s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!s.isVertical()),t.xp6(1),t.Q6J("ngIf",s.isVertical())}}function Q(a,i){}function J(a,i){1&a&&t.YNc(0,Q,0,0,"ng-template")}function Y(a,i){if(1&a&&(t.TgZ(0,"span",18),t.YNc(1,J,1,0,null,12),t.qZA()),2&a){const s=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",s.nextIconTemplate)}}const G=function(a){return{"p-carousel-next p-link":!0,"p-disabled":a}};function Z(a,i){if(1&a){const s=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(_){t.CHM(s);const d=t.oxw();return t.KtG(d.navForward(_))}),t.YNc(1,$,3,2,"ng-container",14),t.YNc(2,Y,2,1,"span",15),t.qZA()}if(2&a){const s=t.oxw();t.Q6J("ngClass",t.VKq(4,G,s.isForwardNavDisabled()))("disabled",s.isForwardNavDisabled()),t.xp6(1),t.Q6J("ngIf",!s.nextIconTemplate),t.xp6(1),t.Q6J("ngIf",s.nextIconTemplate)}}const z=function(a){return{"p-carousel-indicator":!0,"p-highlight":a}};function j(a,i){if(1&a){const s=t.EpF();t.TgZ(0,"li",2)(1,"button",20),t.NdJ("click",function(_){const E=t.CHM(s).index,at=t.oxw(2);return t.KtG(at.onDotClick(_,E))}),t.qZA()()}if(2&a){const s=i.index,l=t.oxw(2);t.Q6J("ngClass",t.VKq(5,z,l._page===s)),t.xp6(1),t.Tol(l.indicatorStyleClass),t.Q6J("ngClass","p-link")("ngStyle",l.indicatorStyle)}}function H(a,i){if(1&a&&(t.TgZ(0,"ul",0),t.YNc(1,j,2,7,"li",8),t.qZA()),2&a){const s=t.oxw();t.Tol(s.indicatorsContentClass),t.Q6J("ngClass","p-carousel-indicators p-reset")("ngStyle",s.indicatorsContentStyle),t.xp6(1),t.Q6J("ngForOf",s.totalDotsArray())}}function X(a,i){1&a&&t.GkF(0)}function q(a,i){if(1&a&&(t.TgZ(0,"div",21),t.Hsn(1,1),t.YNc(2,X,1,0,"ng-container",12),t.qZA()),2&a){const s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.footerTemplate)}}const tt=[[["p-header"]],[["p-footer"]]],et=function(a,i){return{"p-carousel p-component":!0,"p-carousel-vertical":a,"p-carousel-horizontal":i}},it=function(a){return{height:a}};class D{constructor(i,s,l,_,d,E){this.el=i,this.zone=s,this.cd=l,this.renderer=_,this.document=d,this.platformId=E,this.orientation="horizontal",this.verticalViewPortHeight="300px",this.contentClass="",this.indicatorsContentClass="",this.indicatorStyleClass="",this.circular=!1,this.showIndicators=!0,this.showNavigators=!0,this.autoplayInterval=0,this.onPage=new t.vpe,this._numVisible=1,this._numScroll=1,this._oldNumScroll=0,this.prevState={numScroll:0,numVisible:0,value:[]},this.defaultNumScroll=1,this.defaultNumVisible=1,this._page=0,this.isRemainingItemsAdded=!1,this.remainingItems=0,this.swipeThreshold=20,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}get page(){return this._page}set page(i){this.isCreated&&i!==this._page&&(this.autoplayInterval&&(this.stopAutoplay(),this.allowAutoplay=!1),i>this._page&&i<=this.totalDots()-1?this.step(-1,i):i<this._page&&this.step(1,i)),this._page=i}get numVisible(){return this._numVisible}set numVisible(i){this._numVisible=i}get numScroll(){return this._numVisible}set numScroll(i){this._numScroll=i}get value(){return this._value}set value(i){this._value=i}ngOnChanges(i){i.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(i.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),i.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))}ngAfterContentInit(){this.id=(0,e.Th)(),this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.templates.forEach(i=>{switch(i.getType()){case"item":default:this.itemTemplate=i.template;break;case"header":this.headerTemplate=i.template;break;case"footer":this.footerTemplate=i.template;break;case"previousicon":this.previousIconTemplate=i.template;break;case"nexticon":this.nextIconTemplate=i.template}})}ngAfterContentChecked(){const i=this.isCircular();let s=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let l=this._page;0!==this.totalDots()&&l>=this.totalDots()&&(l=this.totalDots()-1,this._page=l,this.onPage.emit({page:this.page})),s=l*this._numScroll*-1,i&&(s-=this._numVisible),l===this.totalDots()-1&&this.remainingItems>0?(s+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,s!==this.totalShiftedItems&&(this.totalShiftedItems=s),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${s*(100/this._numVisible)}%, 0)`:`translate3d(${s*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}i&&(0===this.page?s=-1*this._numVisible:0===s&&(s=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),s!==this.totalShiftedItems&&(this.totalShiftedItems=s))}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",this.renderer.appendChild(this.document.head,this.carouselStyle));let i=`\n            #${this.id} .p-carousel-item {\n\t\t\t\tflex: 1 0 ${100/this.numVisible}%\n\t\t\t}\n        `;if(this.responsiveOptions){this.responsiveOptions.sort((s,l)=>{const _=s.breakpoint,d=l.breakpoint;let E=null;return E=null==_&&null!=d?-1:null!=_&&null==d?1:null==_&&null==d?0:"string"==typeof _&&"string"==typeof d?_.localeCompare(d,void 0,{numeric:!0}):_<d?-1:_>d?1:0,-1*E});for(let s=0;s<this.responsiveOptions.length;s++){let l=this.responsiveOptions[s];i+=`\n                    @media screen and (max-width: ${l.breakpoint}) {\n                        #${this.id} .p-carousel-item {\n                            flex: 1 0 ${100/l.numVisible}%\n                        }\n                    }\n                `}}this.carouselStyle.innerHTML=i}calculatePosition(){if(this.responsiveOptions){let i={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let s=window.innerWidth;for(let l=0;l<this.responsiveOptions.length;l++){let _=this.responsiveOptions[l];parseInt(_.breakpoint,10)>=s&&(i=_)}}if(this._numScroll!==i.numScroll){let s=this._page;s=Math.floor(s*this._numScroll/i.numScroll);let l=i.numScroll*this.page*-1;this.isCircular()&&(l-=i.numVisible),this.totalShiftedItems=l,this._numScroll=i.numScroll,this._page=s,this.onPage.emit({page:this.page})}this._numVisible!==i.numVisible&&(this._numVisible=i.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):-1*this.totalShiftedItems}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){const i=this.totalDots();return i<=0?[]:Array(i).fill(0)}isVertical(){return"vertical"===this.orientation}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||0===this.value.length}navForward(i,s){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,s),this.autoplayInterval&&(this.stopAutoplay(),this.allowAutoplay=!1),i&&i.cancelable&&i.preventDefault()}navBackward(i,s){(this.isCircular()||0!==this._page)&&this.step(1,s),this.autoplayInterval&&(this.stopAutoplay(),this.allowAutoplay=!1),i&&i.cancelable&&i.preventDefault()}onDotClick(i,s){let l=this._page;this.autoplayInterval&&(this.stopAutoplay(),this.allowAutoplay=!1),s>l?this.navForward(i,s):s<l&&this.navBackward(i,s)}step(i,s){let l=this.totalShiftedItems;const _=this.isCircular();if(null!=s)l=this._numScroll*s*-1,_&&(l-=this._numVisible),this.isRemainingItemsAdded=!1;else{l+=this._numScroll*i,this.isRemainingItemsAdded&&(l+=this.remainingItems-this._numScroll*i,this.isRemainingItemsAdded=!1);let d=_?l+this._numVisible:l;s=Math.abs(Math.floor(d/this._numScroll))}_&&this.page===this.totalDots()-1&&-1===i?(l=-1*(this.value.length+this._numVisible),s=0):_&&0===this.page&&1===i?(l=0,s=this.totalDots()-1):s===this.totalDots()-1&&this.remainingItems>0&&(l+=-1*this.remainingItems-this._numScroll*i,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${l*(100/this._numVisible)}%, 0)`:`translate3d(${l*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=l,this._page=s,this.onPage.emit({page:this.page})}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval)}stopAutoplay(){this.interval&&clearInterval(this.interval)}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(0===this.page||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(i){let s=i.changedTouches[0];this.startPos={x:s.pageX,y:s.pageY}}onTouchMove(i){i.cancelable&&i.preventDefault()}onTouchEnd(i){let s=i.changedTouches[0];this.isVertical()?this.changePageOnTouch(i,s.pageY-this.startPos.y):this.changePageOnTouch(i,s.pageX-this.startPos.x)}changePageOnTouch(i,s){Math.abs(s)>this.swipeThreshold&&(s<0?this.navForward(i):this.navBackward(i))}bindDocumentListeners(){(0,h.NF)(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",i=>{this.calculatePosition()})))}unbindDocumentListeners(){(0,h.NF)(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}}D.\u0275fac=function(i){return new(i||D)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(h.K0),t.Y36(t.Lbi))},D.\u0275cmp=t.Xpm({type:D,selectors:[["p-carousel"]],contentQueries:function(i,s,l){if(1&i&&(t.Suo(l,c.h4,5),t.Suo(l,c.$_,5),t.Suo(l,c.jx,4)),2&i){let _;t.iGM(_=t.CRH())&&(s.headerFacet=_.first),t.iGM(_=t.CRH())&&(s.footerFacet=_.first),t.iGM(_=t.CRH())&&(s.templates=_)}},viewQuery:function(i,s){if(1&i&&t.Gf(f,5),2&i){let l;t.iGM(l=t.CRH())&&(s.itemsContainer=l.first)}},hostAttrs:[1,"p-element"],inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:"circular",showIndicators:"showIndicators",showNavigators:"showNavigators",autoplayInterval:"autoplayInterval",style:"style",styleClass:"styleClass"},outputs:{onPage:"onPage"},features:[t.TTD],ngContentSelectors:["p-header","p-footer"],decls:14,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-carousel-header",4,"ngIf"],[3,"ngClass"],[1,"p-carousel-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-carousel-items-content",3,"ngStyle"],[1,"p-carousel-items-container",3,"transitionend","touchend","touchstart","touchmove"],["itemsContainer",""],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-carousel-footer",4,"ngIf"],[1,"p-carousel-header"],[4,"ngTemplateOutlet"],["type","button","pRipple","",3,"ngClass","disabled","click"],[4,"ngIf"],["class","p-carousel-prev-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-carousel-prev-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"ngClass","ngStyle","click"],[1,"p-carousel-footer"]],template:function(i,s){1&i&&(t.F$t(tt),t.TgZ(0,"div",0),t.YNc(1,P,3,1,"div",1),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,R,3,6,"button",4),t.TgZ(5,"div",5)(6,"div",6,7),t.NdJ("transitionend",function(){return s.onTransitionEnd()})("touchend",function(_){return s.onTouchEnd(_)})("touchstart",function(_){return s.onTouchStart(_)})("touchmove",function(_){return s.onTouchMove(_)}),t.YNc(8,S,2,9,"div",8),t.YNc(9,W,2,9,"div",8),t.YNc(10,F,2,9,"div",8),t.qZA()(),t.YNc(11,Z,3,6,"button",4),t.qZA(),t.YNc(12,H,2,5,"ul",9),t.qZA(),t.YNc(13,q,3,1,"div",10),t.qZA()),2&i&&(t.Tol(s.styleClass),t.Q6J("ngClass",t.WLB(17,et,s.isVertical(),!s.isVertical()))("ngStyle",s.style),t.uIk("id",s.id),t.xp6(1),t.Q6J("ngIf",s.headerFacet||s.headerTemplate),t.xp6(1),t.Tol(s.contentClass),t.Q6J("ngClass","p-carousel-content"),t.xp6(2),t.Q6J("ngIf",s.showNavigators),t.xp6(1),t.Q6J("ngStyle",t.VKq(20,it,s.isVertical()?s.verticalViewPortHeight:"auto")),t.xp6(3),t.Q6J("ngForOf",s.clonedItemsForStarting),t.xp6(1),t.Q6J("ngForOf",s.value),t.xp6(1),t.Q6J("ngForOf",s.clonedItemsForFinishing),t.xp6(1),t.Q6J("ngIf",s.showNavigators),t.xp6(1),t.Q6J("ngIf",s.showIndicators),t.xp6(1),t.Q6J("ngIf",s.footerFacet||s.footerTemplate))},dependencies:function(){return[h.mk,h.sg,h.O5,h.tP,h.PC,r.H,o.X,g.w,v.v,p.g]},styles:[".p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}\n"],encapsulation:2,changeDetection:0});class I{}I.\u0275fac=function(i){return new(i||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[h.ez,c.m8,r.T,o.X,g.w,v.v,p.g,h.ez,c.m8]})}}]);