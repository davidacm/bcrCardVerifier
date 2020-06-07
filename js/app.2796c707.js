(function(e){function a(a){for(var t,s,i=a[0],d=a[1],c=a[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);l&&l(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,a=0;a<o.length;a++){for(var r=o[a],t=!0,i=1;i<r.length;i++){var d=r[i];0!==n[d]&&(t=!1)}t&&(o.splice(a--,1),e=s(s.s=r[0]))}return e}var t={},n={app:0},o=[];function s(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,a,r){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(r,t,function(a){return e[a]}.bind(null,t));return r},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var l=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,a,r){e.exports=r("56d7")},"034f":function(e,a,r){"use strict";var t=r("85ec"),n=r.n(t);n.a},"56d7":function(e,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Bienvenido al sistema de verificación de tarjetas filtradas tras el supuesto hackeo al Banco de Costa Rica")]),r("p",[e._v("El objetivo de esta página es que las personas puedan verificar si sus tarjetas se encuentran en el listado de tarjetas filtradas del BCR, de forma fácil,fiable y segura.")]),r("p",[e._v("Aunque existen otros sitios que ofrecen este servicio, generan muchos falsos positivos debido a que no se comprueba el número completo de una tarjeta. Una de mis tarjetas que no fue filtrada, generó más de 50 coincidencias.")]),r("p",[e._v("He ideado un método para poder verificar si un número de tarjeta se encuentra en el listado de tarjetas filtradas, sin necesidad que un número de tarjeta deba ser enviado al servidor que contiene la base de datos.")]),r("p",[e._v("Aunque el banco de Costa Rica asegura que la información de las tarjetas no ha sido filtrada y si lo fue los datos ya no son relevantes, el hecho de que sus sistemas hayan sido hackeados refleja deficiencias en el sistema general.")]),r("p",[e._v("Aunque quisiera creer en el mensaje de tranquilidad que el BCR nos envía, me resulta difícil debido a los múltiples problemas que he tenido al usar su sistema mediante la página web. Lo cual me hace pensar que sí existen deficiencias que podrían ser aprovechadas por hackers.")]),r("h1",[e._v("Preguntas frecuentes")]),r("Question",{attrs:{title:"Mi información está segura en esta página"}},[r("p",[e._v("Brindar datos personales o de sus tarjetas es algo que nunca debería hacer. Por eso en vez de solicitar el número, se solicita una clave que se genera a partir de dicho número mediante un algoritmo llamado scrypt.")]),r("p",[e._v("No hay forma de revertir o determinar el dato inicial partiendo de la clave generada, scrypt es uno de los algoritmos más seguros a la hora de guardar por ejemplo una contraseña en una base de datos.")]),r("p",[e._v("Se ha calculado la clave para cada tarjeta en apariencia robada, y se han almacenado dichas claves en una base de datos. La clave que envíe será comparada contra todas las claves existentes. De manera que su número de tarjeta solo se requiere para generar la clave, y poderla comparar con el listado de claves disponibles en la base de datos.")])]),r("Question",{attrs:{title:"Como puedo estar seguro que mi información no es almacenada en alguna parte"}},[r("p",[e._v("Para garantizar que ningún dato confidencial se está capturando, la aplicación se ha hecho en modalidad open source (código abierto) de manera que cualquier persona puede revisar el código fuente, incluso los historiales de cambio si los hubieran.")]),r("p",[e._v("Esta aplicación se encuentra en github en un repositorio de código abierto, la misma es servida por la misma plataforma de github. Este servicio de servir una página web solo se habilita para proyectos de código abierto. Por lo tanto el mismo código del repositorio en github, es el que se ejecuta en este sitio.")]),r("p",[e._v("Si no confía en cuales datos se envían al servidor, siempre puede generar e introducir la clave asociada a su tarjeta con otra herramienta.")])]),r("Question",{attrs:{title:"Puedo generar la clave por mis propios medios y consultarla en esta aplicación"}},[r("p",[e._v('¡Claro! En el sitio se ha dispuesto de una herramienta para generar la clave con el algoritmo scrypt por facilidad, pero la clave puede ser generada en otra parte. Introduce el dato requerido en el campo "Clave derivada"')]),r("p",[e._v("Para su facilidad se ha creado una herramienta que funciona offline, preconfigurada con los parámetros necesarios. ")]),r("p",[r("a",{attrs:{href:"https://htmlpreview.github.io/?https://github.com/davidacm/bcrCardVerifier/blob/master/scryptTool.html"}},[e._v("accede en este link")])]),r("p",[e._v("Si utilizará otra herramienta, esta es la información que necesita.")]),r("p",[e._v('Salt: "c8m.qp+xv3*rhfUz" (sin las comillas).')]),r("p",[e._v("Algoritmo: scrypt, N: 128, r: 8, p: 1.")]),r("p",[e._v("El resultado se debe convertir a base64 ya que así se encuentran almacenadas las claves en la base de datos.")]),r("p",[e._v("Lo ideal es que compare con cualquier cadena de texto origen, de manera que coincidan los resultados generados de la herramienta utilizada y este sitio.")])]),r("Question",{attrs:{title:"Cuantas tarjetas filtradas se encuentran en la base de datos"}},[r("p",[e._v("Esta base de datos se generó partiendo de dos archivos de transacciones, de aproximadamente 2gb cada uno. Se procesaron en total 12216470 transacciones. Se descartaron 2981 de ellas, y se encontró que existen 1260500 tarjetas distintas en el total de transacciones disponibles.")])]),r("Question",{attrs:{title:"Por qué la página tiene un diseño tan pobre y aburrido"}},[r("p",[e._v("Este proyecto se realizó en una mañana de domingo a modo de ejercicio y por simple curiosidad para poder verificar con más facilidad las tarjetas de amistades y familiares.")]),r("p",[e._v("Soy un programador con discapacidad visual y aunque eso no es excusa para no conocer sobre temas atractivos de diseño, por ahora no está dentro de mis intereses profundizar en las metodologías para diseñar páginas atractivas.")]),r("p",[e._v("Pero siempre estoy dispuesto a aceptar sugerencias, puede abrir su issue o enviar su pull request con las mejoras que considere pertinentes.")])]),r("Question",{attrs:{title:"He encontrado un problema, tengo una sugerencia o quisiera hacer una mejora. Como puedo contribuir"}},[r("p",[e._v("Si sabe usar git y ha usado la plataforma github, todo aporte es bienvenido en este repositorio.")])]),r("h1",[e._v("Introduzca los datos. El campo marcado con un asterisco (*) es obligatorio.")]),r("label",{attrs:{for:"icard"}},[e._v("Introduzca el número de tarjeta")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.card,expression:"card",modifiers:{lazy:!0,trim:!0}}],attrs:{id:"icard",type:"text",autocomplete:"off"},domProps:{value:e.card},on:{change:function(a){e.card=a.target.value.trim()},blur:function(a){return e.$forceUpdate()}}}),r("label",{attrs:{for:"iScrypted"}},[e._v("Clave derivada *")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.scryptedCard,expression:"scryptedCard"}],attrs:{id:"iScrypted",type:"text",required:"",autocomplete:"off"},domProps:{value:e.scryptedCard},on:{input:function(a){a.target.composing||(e.scryptedCard=a.target.value)}}}),r("button",{attrs:{disabled:""==e.scryptedCard},on:{click:e.checkKey}},[e._v("Verificar clave derivada de la tarjeta")]),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.checkedKey,expression:"this.checkedKey != ''"}]},[r("h1",[e._v("Resultados para la clave "+e._s(e.checkedKey))]),r("p",[e._v("resultado "+e._s(e.result?"positivo":"negativo")+". La clave proporcionada "+e._s(e.result?"":"no")+" se encuentra en la base de datos")])])],1)},o=[],s=(r("a15b"),r("d3b7"),r("ac1f"),r("1276"),r("fd87"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("b85c")),i=r("9f6a"),d=r.n(i),c=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("h2",[r("a",{ref:"hTitle",attrs:{tabindex:"-1","aria-expanded":e.faqExpanded.toString()},on:{click:function(a){e.faqExpanded=!e.faqExpanded}}},[e._v("Q: ¿"+e._s(e.title)+"?")])]),e.faqExpanded?r("div",{on:{click:e.close}},[e._t("default")],2):e._e()])},l=[],u={name:"Question",data:function(){return{faqExpanded:!1}},props:{title:String},methods:{close:function(){this.$refs.hTitle.focus(),this.faqExpanded=!1}}},p=u,f=(r("fbeb"),r("2877")),v=Object(f["a"])(p,c,l,!1,null,"03029b4d",null),m=v.exports,h=r("d556"),b=h.hashesCollection,g=x("c8m.qp+xv3*rhfUz");function y(e,a,r){return e.split(a).join(r)}var q=[[".","1"],["$","2"],["#","3"],["/","4"],["[","5"],["]","6"]];function _(e){e=y(e,"%","%0");var a,r=Object(s["a"])(q);try{for(r.s();!(a=r.n()).done;){var t=a.value;e=y(e,t[0],"%"+t[1])}}catch(n){r.e(n)}finally{r.f()}return e}function j(e){var a,r=Object(s["a"])(q);try{for(r.s();!(a=r.n()).done;){var t=a.value;e=y(e,"%"+t[1],t[0])}}catch(n){r.e(n)}finally{r.f()}return e=y(e,"%0","%"),e}function x(e){if(!e||""==e)return null;var a=e.length,r=new Int8Array(a);while(a--)r[a]=e.charCodeAt(a);return r}var C={name:"App",data:function(){return{card:"",scryptedCard:"",checkedKey:"",result:!1,cachedKeys:{}}},methods:{checkKey:function(){var e=this;if(""!=this.scryptedCard){var a=_(this.scryptedCard);void 0!==this.cachedKeys[a]?(this.result=this.cachedKeys[a],this.checkedKey=j(a)):b.child(a).once("value").then((function(r){e.cachedKeys[a]=r.val(),e.result=r.val(),e.checkedKey=j(a)}))}}},watch:{card:function(e){var a=this;if(e){var r=x(e);d.a.scrypt(r,g,128,8,1,64).then((function(e){a.scryptedCard=btoa(String.fromCharCode.apply(null,e))}))}else this.scryptedCard=""}},components:{Question:m}},w=C,S=(r("034f"),Object(f["a"])(w,n,o,!1,null,null,null)),k=S.exports;t["a"].config.productionTip=!0,new t["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,a,r){},d556:function(e,a,r){"use strict";r.r(a),r.d(a,"db",(function(){return s})),r.d(a,"hashesCollection",(function(){return i}));var t=r("59ca"),n=r.n(t),o=(r("66ce"),{apiKey:"AIzaSyAC35ubCOotpc9tA0vRshxfTEqMisjONHA",authDomain:"test2-511fa.firebaseapp.com",databaseURL:"https://test2-511fa.firebaseio.com",projectId:"test2-511fa",storageBucket:"test2-511fa.appspot.com",messagingSenderId:"731937336766",appId:"1:731937336766:web:8ef6034f39c316d85cddef"});n.a.initializeApp(o);var s=n.a.database(),i=s.ref("hashes")},e919:function(e,a,r){},fbeb:function(e,a,r){"use strict";var t=r("e919"),n=r.n(t);n.a}});
//# sourceMappingURL=app.2796c707.js.map