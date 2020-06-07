(function(e){function a(a){for(var n,o,i=a[0],c=a[1],d=a[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&p.push(t[o][0]),t[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(a);while(p.length)p.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,a=0;a<s.length;a++){for(var r=s[a],n=!0,i=1;i<r.length;i++){var c=r[i];0!==t[c]&&(n=!1)}n&&(s.splice(a--,1),e=o(o.s=r[0]))}return e}var n={},t={app:0},s=[];function o(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,a,r){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(r,n,function(a){return e[a]}.bind(null,n));return r},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,a,r){e.exports=r("56d7")},"034f":function(e,a,r){"use strict";var n=r("8a23"),t=r.n(n);t.a},"56d7":function(e,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"welcome"}},[r("h2",[e._v("Bienvenido al sistema de verificación de tarjetas filtradas tras el supuesto hackeo al Banco de Costa Rica")]),r("v-divider",{staticClass:"my-3"}),r("br"),r("p",[e._v("El objetivo de esta página es que las personas puedan verificar si sus tarjetas se encuentran en el listado de tarjetas filtradas del BCR, de forma fácil, fiable y segura.")]),r("br"),r("p",[e._v("Aunque existen otros sitios que ofrecen este servicio, generan muchos falsos positivos debido a que no se comprueba el número completo de una tarjeta. Una de mis tarjetas que no fue filtrada, generó más de 50 coincidencias.")]),r("br"),r("p",[e._v("He ideado un método para poder verificar si un número de tarjeta se encuentra en el listado de tarjetas filtradas, sin necesidad que un número de tarjeta deba ser enviado al servidor que contiene la base de datos.")]),r("br"),r("p",[e._v("Aunque el banco de Costa Rica asegura que la información de las tarjetas no ha sido filtrada y si lo fue los datos ya no son relevantes, el hecho de que sus sistemas hayan sido hackeados refleja deficiencias en el sistema general.")]),r("br"),r("p",[e._v("Aunque quisiera creer en el mensaje de tranquilidad que el BCR nos envía, me resulta difícil debido a los múltiples problemas que he tenido al usar su sistema mediante la página web. Lo cual me hace pensar que sí existen deficiencias que podrían ser aprovechadas por hackers.")])],1),r("div",{attrs:{id:"questions"}},[r("h2",[e._v("Preguntas frecuentes")]),r("v-divider",{staticClass:"my-3"}),r("br"),r("v-row",{attrs:{justify:"center"}},[r("v-expansion-panels",{attrs:{popout:""}},[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("¿Mi información está segura en esta página?")]),r("v-expansion-panel-content",[r("p",[e._v("Brindar datos personales o de sus tarjetas es algo que nunca debería hacer. Por eso en vez de solicitar el número, se solicita una clave que se genera a partir de dicho número mediante un algoritmo llamado scrypt.")]),r("br"),r("p",[e._v("No hay forma de revertir o determinar el dato inicial partiendo de la clave generada, scrypt es uno de los algoritmos más seguros a la hora de guardar por ejemplo una contraseña en una base de datos.")]),r("br"),r("p",[e._v("Se ha calculado la clave para cada tarjeta en apariencia robada, y se han almacenado dichas claves en una base de datos. La clave que envíe será comparada contra todas las claves existentes. De manera que su número de tarjeta solo se requiere para generar la clave, y poderla comparar con el listado de claves disponibles en la base de datos.")])])],1),r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("¿Como puedo estar seguro que mi información no es almacenada en alguna parte?")]),r("v-expansion-panel-content",[r("p",[e._v("Para garantizar que ningún dato confidencial se está capturando, la aplicación se ha hecho en modalidad open source (código abierto) de manera que cualquier persona puede revisar el código fuente, incluso los historiales de cambio si los hubieran.")]),r("br"),r("p",[e._v("Esta aplicación se encuentra en github en un repositorio de código abierto, la misma es servida por la misma plataforma de github. Este servicio de servir una página web solo se habilita para proyectos de código abierto. Por lo tanto el mismo código del repositorio en github, es el que se ejecuta en este sitio.")]),r("br"),r("p",[e._v("Si no confía en cuales datos se envían al servidor, siempre puede generar e introducir la clave asociada a su tarjeta con otra herramienta.")])])],1),r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("¿Puedo generar la clave por mis propios medios y consultarla en esta aplicación?")]),r("v-expansion-panel-content",[r("p",[e._v('¡Claro! En el sitio se ha dispuesto de una herramienta para generar la clave con el algoritmo scrypt por facilidad, pero la clave puede ser generada en otra parte. Introduce el dato requerido en el campo "Clave derivada"')]),r("br"),r("p",[e._v(" Para su facilidad se ha creado una herramienta que funciona offline, preconfigurada con los parámetros necesarios. "),r("a",{attrs:{target:"_blank",href:"https://htmlpreview.github.io/?https://github.com/davidacm/bcrCardVerifier/blob/master/scryptTool.html"}},[e._v("accede en este link")])]),r("br"),r("p",[e._v("Si utilizará otra herramienta, esta es la información que necesita.")]),r("br"),r("p",[e._v('Salt: "c8m.qp+xv3*rhfUz" (sin las comillas).')]),r("br"),r("p",[e._v("Algoritmo: scrypt, N: 128, r: 8, p: 1.")]),r("br"),r("br"),r("p",[e._v("El resultado se debe convertir a base64 ya que así se encuentran almacenadas las claves en la base de datos.")]),r("p",[e._v("Lo ideal es que compare con cualquier cadena de texto origen, de manera que coincidan los resultados generados de la herramienta utilizada y este sitio.")])])],1),r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("¿Cuantas tarjetas filtradas se encuentran en la base de datos?")]),r("v-expansion-panel-content",[r("p",[e._v("Esta base de datos se generó partiendo de dos archivos de transacciones, de aproximadamente 2gb cada uno. Se procesaron en total 12216470 transacciones. Se descartaron 2981 de ellas, y se encontró que existen 1260500 tarjetas distintas en el total de transacciones disponibles.")])])],1),r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("He encontrado un problema, tengo una sugerencia o quisiera hacer una mejora. ¿Como puedo contribuir?")]),r("v-expansion-panel-content",[r("p",[e._v("Si sabe usar git y ha usado la plataforma github, todo aporte es bienvenido en este repositorio.")])])],1)],1)],1)],1),r("div",{attrs:{id:"form"}},[r("h2",[e._v("Introduzca los datos.")]),r("h4",[e._v("El campo marcado con un asterisco (*) es obligatorio.")]),r("br"),r("v-divider",{staticClass:"my-3"}),r("form",[r("v-text-field",{attrs:{label:"Número de tarjeta"},model:{value:e.card,callback:function(a){e.card="string"===typeof a?a.trim():a},expression:"card"}}),r("v-text-field",{attrs:{"error-messages":"*",required:"",autocomplete:"off",label:"Clave derivada"},model:{value:e.scryptedCard,callback:function(a){e.scryptedCard=a},expression:"scryptedCard"}}),r("v-btn",{attrs:{disabled:""==e.scryptedCard},on:{click:e.checkKey}},[e._v("Verificar clave derivada de la tarjeta")])],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.checkedKey,expression:"this.checkedKey != ''"}],attrs:{id:"result"}},[r("h3",[e._v("Resultados para la clave:")]),r("p",[e._v(e._s(e.checkedKey))]),r("br"),r("p",[e._v("Resultado "+e._s(e.result?"positivo":"negativo")+". La clave proporcionada "+e._s(e.result?"":"no")+" se encuentra en la base de datos")])]),r("v-card",{attrs:{height:"100"}},[r("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),r("strong",[e._v("DCM")])])],1)],1)],1)},s=[],o=(r("a15b"),r("d3b7"),r("ac1f"),r("1276"),r("fd87"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("b85c")),i=r("9f6a"),c=r.n(i),d=r("d556"),l=d.hashesCollection,u=m("c8m.qp+xv3*rhfUz");function p(e,a,r){return e.split(a).join(r)}var v=[[".","1"],["$","2"],["#","3"],["/","4"],["[","5"],["]","6"]];function f(e){e=p(e,"%","%0");var a,r=Object(o["a"])(v);try{for(r.s();!(a=r.n()).done;){var n=a.value;e=p(e,n[0],"%"+n[1])}}catch(t){r.e(t)}finally{r.f()}return e}function h(e){var a,r=Object(o["a"])(v);try{for(r.s();!(a=r.n()).done;){var n=a.value;e=p(e,"%"+n[1],n[0])}}catch(t){r.e(t)}finally{r.f()}return e=p(e,"%0","%"),e}function m(e){if(!e||""==e)return null;var a=e.length,r=new Int8Array(a);while(a--)r[a]=e.charCodeAt(a);return r}var b={name:"App",data:function(){return{card:"",scryptedCard:"",checkedKey:"",result:!1,cachedKeys:{}}},methods:{checkKey:function(){var e=this;if(""!=this.scryptedCard){var a=f(this.scryptedCard);void 0!==this.cachedKeys[a]?(this.result=this.cachedKeys[a],this.checkedKey=h(a)):l.child(a).once("value").then((function(r){e.cachedKeys[a]=r.val(),e.result=r.val(),e.checkedKey=h(a)}))}}},watch:{card:function(e){var a=this;if(e){var r=m(e);c.a.scrypt(r,u,128,8,1,64).then((function(e){a.scryptedCard=btoa(String.fromCharCode.apply(null,e))}))}else this.scryptedCard=""}}},g=b,y=(r("034f"),r("2877")),_=r("6544"),x=r.n(_),q=r("8336"),j=r("b0af"),C=r("62ad"),w=r("ce7e"),k=r("cd55"),P=r("49e2"),O=r("c865"),S=r("0393"),E=r("553a"),K=r("0fd9"),V=r("8654"),A=Object(y["a"])(g,t,s,!1,null,null,null),z=A.exports;x()(A,{VBtn:q["a"],VCard:j["a"],VCol:C["a"],VDivider:w["a"],VExpansionPanel:k["a"],VExpansionPanelContent:P["a"],VExpansionPanelHeader:O["a"],VExpansionPanels:S["a"],VFooter:E["a"],VRow:K["a"],VTextField:V["a"]});var R=r("f309");n["a"].use(R["a"]);var B=new R["a"]({});n["a"].config.productionTip=!0,new n["a"]({vuetify:B,render:function(e){return e(z)}}).$mount("#app")},"8a23":function(e,a,r){},d556:function(e,a,r){"use strict";r.r(a),r.d(a,"db",(function(){return o})),r.d(a,"hashesCollection",(function(){return i}));var n=r("59ca"),t=r.n(n),s=(r("66ce"),{apiKey:"AIzaSyAC35ubCOotpc9tA0vRshxfTEqMisjONHA",authDomain:"test2-511fa.firebaseapp.com",databaseURL:"https://test2-511fa.firebaseio.com",projectId:"test2-511fa",storageBucket:"test2-511fa.appspot.com",messagingSenderId:"731937336766",appId:"1:731937336766:web:8ef6034f39c316d85cddef"});t.a.initializeApp(s);var o=t.a.database(),i=o.ref("hashes")}});
//# sourceMappingURL=app.1846b744.js.map