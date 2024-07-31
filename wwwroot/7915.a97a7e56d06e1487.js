"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[7915],{13719:(x,l,t)=>{t.d(l,{X:()=>o});var h=t(94650),c=t(80529);class o{constructor(e){this.http=e,this.dataUrl="examen/"}consultarTodosParaSelector(){return this.http.get(this.dataUrl+"consultarTodosParaSelector")}consultar(e){return this.http.get(this.dataUrl+`consultar/${e}`)}consultarGeneral(e){return this.http.get(this.dataUrl+`consultarGeneral/${e}`)}agregar(e){return this.http.post(this.dataUrl+"agregar",e)}editar(e){return this.http.put(this.dataUrl+"editar",e)}eliminar(e){return this.http.delete(this.dataUrl+`eliminar/${e}`)}actualizar(e){return this.http.post(this.dataUrl+"actualizar",e)}consultarMisExamenes(){return this.http.get(this.dataUrl+"consultarMisExamenes")}consultarExamenesPendientesAsignados(){return this.http.get(this.dataUrl+"misExamenesAsignados")}consultarExamenesContestadosAsignados(){return this.http.get(this.dataUrl+"misExamenesAsignados/contestados")}consultarExamenesVencidosAsignados(){return this.http.get(this.dataUrl+"misExamenesAsignados/vencidos")}consultarMiExamen(e){return this.http.get(this.dataUrl+`consultarMiExamen/${e}`)}consultarMiExamenIndividual(e){return this.http.get(this.dataUrl+`consultarMiExamenIndividual/${e}`)}consultarCalificaciones(e){return this.http.get(this.dataUrl+`consultarCalificaciones/${e}`)}descargarRespuestasPDF(e){return this.http.post(this.dataUrl+`descargarExamenPdf/${e}`,{},{responseType:"blob"})}static#t=this.\u0275fac=function(E){return new(E||o)(h.LFG(c.eN))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},94540:(x,l,t)=>{t.d(l,{gy:()=>c,sO:()=>o});var c,d;t(94540);(d=c||(c={})).Editar="edit",d.Eliminar="delete",d.Ver="see",d.DescargarPdf="DescargarPdf",d.Revisar="Revisar",d.Presentar="presentar";const o={headerName:"",field:"",cellClass:"center-ag",minWidth:44,maxWidth:44,suppressMovable:!0,resizable:!1,filter:!1,lockPinned:!0,pinned:"right",lockPosition:!0}},97915:(x,l,t)=>{t.r(l),t.d(l,{ExamenModule:()=>p});var h=t(36895),c=t(20388),o=t(71436),d=t(41283),e=t(9116),E=t(31321),U=t(13050),f=t(94540),m=t(15439),a=t(94650),A=t(21006),D=t(13719),S=t(2060),C=t(58390);class u{constructor(n,s,i,v){this.encryptionService=n,this.examenService=s,this.mensajeService=i,this.router=v,this.HEADER_GRID="Mis Evaluaciones",this.examenList=[],this.columnaPresentar=Object.assign({action:f.gy.Presentar,cellRendererSelector:r=>({component:"actionButton",params:{disabled:!1}}),minWidth:44,maxWidth:44},f.sO),this.columns=[{headerName:"Tipo de Examen",field:"tipoExamen",minWidth:70,width:70},{headerName:"Fecha Programada",field:"fechaExamen",minWidth:70,width:70,cellRenderer:r=>m(r.data.fechaExamen).format("DD/MM/YYYY"),valueGetter:r=>m(r.data.fechaExamen).format("DD/MM/YYYY")},{headerName:"Hora Programada",field:"horaExamen",minWidth:70,width:70,cellRenderer:r=>m(r.data.horaExamen,"HH:mm:ss").format("LT"),valueGetter:r=>m(r.data.horaExamen,"HH:mm:ss").format("LT")},{headerName:"Duraci\xf3n Total (Min)",field:"duracion",minWidth:70,width:70},{headerName:"Total de Preguntas",field:"totalPreguntas",minWidth:70,width:70},this.columnaPresentar]}ngOnInit(){this.consultarGrid()}consultarGrid(){this.examenService.consultarMisExamenes().subscribe(n=>{this.examenList=n})}onGridClick(n){n.accion===f.gy.Presentar&&this.presentar(n.data.idExamen)}presentar(n){this.examenService.consultarMiExamenIndividual(n).subscribe(s=>{if(this.esFechaValida(s))this.router.navigate(["/administrador/encuesta/examen/presentar"],{queryParams:this.encryptionService.generateURL({i:n.toString(),revision:"0"})});else{const i="A\xfan no tiene acceso a este examen";this.mensajeService.modalError(i)}})}esFechaValida(n){const s=new Date(`${n.fechaExamen.toDateString()} ${n.horaExamen}`),i=new Date;if(s.toDateString()!==i.toDateString())return!1;const v=s.getTime()-i.getTime(),P=Math.round(v%864e5%36e5/6e4);return!(P>5||P<=-15)}static#t=this.\u0275fac=function(s){return new(s||u)(a.Y36(A.C),a.Y36(D.X),a.Y36(S.V),a.Y36(e.F0))};static#e=this.\u0275cmp=a.Xpm({type:u,selectors:[["app-reactivo"]],decls:8,vars:5,consts:[[1,"contenedor"],[1,"titulo-contenedor"],[1,"cuerpo-contenedor"],[1,"row","justify-content-center"],[1,"col-md-12"],[3,"headerName","data","children","disableDelete","disableEdit","event"],["gridNecesidad",""]],template:function(s,i){1&s&&(a.TgZ(0,"div",0)(1,"div",1),a._uU(2,"Mis Evaluaciones"),a.qZA(),a.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"app-grid-general",5,6),a.NdJ("event",function(r){return i.onGridClick(r)}),a.qZA()()()()()),2&s&&(a.xp6(6),a.Q6J("headerName",i.HEADER_GRID)("data",i.examenList)("children",i.columns)("disableDelete",!0)("disableEdit",!0))},dependencies:[C.$],encapsulation:2})}const y=[{path:"",component:u,canActivate:[U.m],data:{title:"Ex\xe1menes",acceso:E.ZE.Consultar}},{path:"presentar",loadChildren:()=>Promise.all([t.e(8592),t.e(5644)]).then(t.bind(t,45644)).then(N=>N.ExamenFormularioModule)}];class g{static#t=this.\u0275fac=function(s){return new(s||g)};static#e=this.\u0275mod=a.oAB({type:g});static#a=this.\u0275inj=a.cJS({imports:[e.Bz.forChild(y),e.Bz]})}class p{static#t=this.\u0275fac=function(s){return new(s||p)};static#e=this.\u0275mod=a.oAB({type:p});static#a=this.\u0275inj=a.cJS({imports:[h.ez,o.a,d.Z,c.zk.forChild(),g]})}}}]);