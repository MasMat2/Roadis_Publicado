"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[3903],{33903:(J,v,t)=>{t.r(v),t.d(v,{ProgramacionExamenModule:()=>h});var g=t(36895),E=t(20388),f=t(71436),C=t(41283),Y=t(24006),T=t(88796),N=t(90061),M=t(13024),a=t(94650);class c{static#a=this.\u0275fac=function(i){return new(i||c)};static#e=this.\u0275mod=a.oAB({type:c});static#t=this.\u0275inj=a.cJS({imports:[g.ez,Y.u5,f.a,T.A0,N.kn,M.u]})}var u=t(9116),m=t(31321),P=t(13050),A=t(40675),I=t(14815),p=t(94540),x=t(52522),s=t(15439),S=t(5918),R=t(62861),D=t(2060),G=t(94183),O=t(58390);function L(j,e){if(1&j){const i=a.EpF();a.TgZ(0,"div",8),a.NdJ("click",function(){a.CHM(i);const r=a.oxw();return a.KtG(r.agregar())}),a.TgZ(1,"button",9),a._uU(2,"Agregar Curso"),a.qZA()()}}class d{constructor(e,i,n,r){this.accesoService=e,this.mensajeService=i,this.modalService=n,this.programacionExamenService=r,this.HEADER_GRID="Programaci\xf3n Examen",this.tieneAccesoAgregar=!1,this.ACCESO_EDITAR=m.SY.Editar,this.ACCESO_ELIMINAR=m.SY.Eliminar,this.programacionExamenList=[],this.columns=[{headerName:"Clave",field:"clave",minWidth:50,width:50},{headerName:"Responsable",field:"usuarioResponsable",minWidth:100,width:100},{headerName:"Tipo de Encuesta",field:"tipoExamen",minWidth:100,width:100},{headerName:"Fecha Programada",field:"fechaExamen",minWidth:70,width:70,cellRenderer:o=>s(o.data.fechaExamen).format("DD/MM/YYYY"),valueGetter:o=>s(o.data.fechaExamen).format("DD/MM/YYYY")},{headerName:"Hora Programada",field:"horaExamen",minWidth:70,width:70,cellRenderer:o=>s(o.data.horaExamen,"HH:mm:ss").format("LT"),valueGetter:o=>s(o.data.horaExamen,"HH:mm:ss").format("LT")},{headerName:"Duraci\xf3n Total (Min)",field:"duracion",minWidth:70,width:70},{headerName:"Porcentaje de avance",field:"porcentajeAvance",minWidth:70,width:70}]}ngOnInit(){this.consultarGrid(),this.consultarAccesoAgregar()}consultarAccesoAgregar(){this.accesoService.tieneAcceso(m.SY.Agregar).subscribe(e=>{this.tieneAccesoAgregar=e})}consultarGrid(){this.programacionExamenService.consultarGeneral().subscribe(e=>{this.programacionExamenList=e})}onGridClick(e){e.accion===p.gy.Editar?this.editar(e.data.idProgramacionExamen):e.accion===p.gy.Eliminar&&this.eliminar(e.data)}agregar(){const e={accion:A.V_.Agregar,esEdicion:!1,onClose:n=>{n&&this.consultarGrid(),i.hide()}},i=this.modalService.show(S.D,{initialState:e,...x.OS.Large})}editar(e){const i={accion:A.V_.Editar,esEdicion:!0,idProgramacionExamen:e,onClose:r=>{r&&this.consultarGrid(),n.hide()}},n=this.modalService.show(S.D,{initialState:i,...x.OS.Large})}eliminar(e){const r=s(e.fechaExamen).format("DD/MM/YYYY"),o=s(e.horaExamen,"HH:mm:ss").format("LT"),H=`\xbfDesea eliminar la programaci\xf3n de examen: <strong>${e.tipoExamen} (${r} ${o}) </strong>?`;this.mensajeService.modalConfirmacion(H,"Eliminar Programaci\xf3n de Examen",I.m.Cruz).then(()=>{this.programacionExamenService.eliminar(e.idProgramacionExamen).subscribe(()=>{this.mensajeService.modalExito("Programaci\xf3n de examen eliminada exitosamente."),this.consultarGrid()})})}static#a=this.\u0275fac=function(i){return new(i||d)(a.Y36(R.Q),a.Y36(D.V),a.Y36(E.tT),a.Y36(G.F))};static#e=this.\u0275cmp=a.Xpm({type:d,selectors:[["app-programacionExamen"]],decls:9,vars:6,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row","justify-content-center"],[1,"col-md-12"],["class","contenedor-agregar",3,"click",4,"ngIf"],[3,"headerName","data","children","accesoEditar","accesoEliminar","event"],["gridNecesidad",""],[1,"contenedor-agregar",3,"click"],[1,"btn-agregar"]],template:function(i,n){1&i&&(a.TgZ(0,"div",0)(1,"div",1),a._uU(2,"Cursos Programados"),a.qZA(),a.TgZ(3,"div",2)(4,"div",3)(5,"div",4),a.YNc(6,L,3,0,"div",5),a.TgZ(7,"app-grid-general",6,7),a.NdJ("event",function(o){return n.onGridClick(o)}),a.qZA()()()()()),2&i&&(a.xp6(6),a.Q6J("ngIf",n.tieneAccesoAgregar),a.xp6(1),a.Q6J("headerName",n.HEADER_GRID)("data",n.programacionExamenList)("children",n.columns)("accesoEditar",n.ACCESO_EDITAR)("accesoEliminar",n.ACCESO_ELIMINAR))},dependencies:[g.O5,O.$],encapsulation:2})}const y=[{path:"",component:d,canActivate:[P.m],data:{title:"Programaci\xf3n de Ex\xe1menes",acceso:m.SY.Consultar}}];class l{static#a=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275mod=a.oAB({type:l});static#t=this.\u0275inj=a.cJS({imports:[u.Bz.forChild(y),u.Bz]})}class h{static#a=this.\u0275fac=function(i){return new(i||h)};static#e=this.\u0275mod=a.oAB({type:h});static#t=this.\u0275inj=a.cJS({imports:[g.ez,f.a,C.Z,E.zk.forChild(),l,c]})}}}]);