"use strict";(self.webpackChunkroadis_app=self.webpackChunkroadis_app||[]).push([[2035],{52035:(M,s,o)=>{o.r(s),o.d(s,{CatalogoModule:()=>t});var m=o(9116),n=o(94650);const C=[{path:"compania",loadChildren:()=>Promise.all([o.e(1436),o.e(429),o.e(8390),o.e(1006),o.e(8592),o.e(3906)]).then(o.bind(o,43906)).then(l=>l.CompaniaModule)},{path:"locacion",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(1006),o.e(8592),o.e(4875)]).then(o.bind(o,74875)).then(l=>l.HospitalModule)},{path:"perfil",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(1006),o.e(458),o.e(8592),o.e(7844)]).then(o.bind(o,57844)).then(l=>l.PerfilModule)},{path:"rol",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(6606)]).then(o.bind(o,16606)).then(l=>l.RolModule)},{path:"usuario",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(1006),o.e(4264),o.e(8592),o.e(3228)]).then(o.bind(o,13228)).then(l=>l.UsuarioModule)},{path:"configuracion-entidades",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(458),o.e(3471),o.e(8592),o.e(8653)]).then(o.bind(o,78653)).then(l=>l.ConfiguracionEntidadModule)},{path:"configuracion-secciones",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(6094)]).then(o.bind(o,36094)).then(l=>l.ConfiguracionSeccionesModule)},{path:"dominio",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(1280)]).then(o.bind(o,51280)).then(l=>l.DominioModule)},{path:"colonia",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(4153)]).then(o.bind(o,74153)).then(l=>l.ColoniaModule)},{path:"codigo-postal",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(2096)]).then(o.bind(o,82096)).then(l=>l.CodigoPostalModule)},{path:"estado",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(1295)]).then(o.bind(o,41295)).then(l=>l.EstadoModule)},{path:"giro-comercial",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(7123)]).then(o.bind(o,7123)).then(l=>l.GiroComercialModule)},{path:"localidad",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(5793)]).then(o.bind(o,35793)).then(l=>l.LocalidadModule)},{path:"municipio",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(5372)]).then(o.bind(o,95372)).then(l=>l.MunicipioModule)},{path:"pais",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(7202)]).then(o.bind(o,57202)).then(l=>l.PaisModule)},{path:"departamento",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(8098)]).then(o.bind(o,78098)).then(l=>l.DepartamentoModule)},{path:"titulo-academico",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(9881)]).then(o.bind(o,59881)).then(l=>l.TituloAcademicoModule)},{path:"moneda",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(2434)]).then(o.bind(o,22434)).then(l=>l.MonedaModule)},{path:"area",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(1666)]).then(o.bind(o,41666)).then(l=>l.AreaModule)},{path:"estatus-pedido",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(3078)]).then(o.bind(o,63078)).then(l=>l.EstatusPedidoModule)},{path:"tipo-compania",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(1684)]).then(o.bind(o,91684)).then(l=>l.TipoCompaniaModule)},{path:"tipo-guia",loadChildren:()=>Promise.all([o.e(1436),o.e(61),o.e(429),o.e(3930),o.e(8390),o.e(3405),o.e(1424),o.e(8592),o.e(5997)]).then(o.bind(o,65997)).then(l=>l.TipoGuiaModule)}];class d{static#o=this.\u0275fac=function(h){return new(h||d)};static#l=this.\u0275mod=n.oAB({type:d});static#n=this.\u0275inj=n.cJS({imports:[m.Bz.forChild(C),m.Bz]})}class t{static#o=this.\u0275fac=function(h){return new(h||t)};static#l=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[d]})}}}]);