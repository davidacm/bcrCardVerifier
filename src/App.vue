<template>
  <div id="app">
    <h1>Bienvenido al sistema de verificación de tarjetas filtradas tras el supuesto hackeo al Banco de Costa Rica</h1>
    <p>El objetivo de esta página es que las personas puedan verificar si sus tarjetas se encuentran en el listado de tarjetas filtradas del BCR, de forma fácil,fiable  y segura.</p>
    <p>Aunque existen otros sitios que ofrecen este servicio, generan muchos falsos positivos debido a que no se comprueba el número completo de una tarjeta. Una de mis tarjetas que no fue filtrada, generó más de 50 coincidencias.</p>
    <p>He ideado un método para poder verificar si un número de tarjeta se encuentra en el listado de tarjetas filtradas, sin necesidad que un número de tarjeta deba ser enviado al servidor que contiene la base de datos.</p>
    <p>Aunque el banco de Costa Rica asegura que la información de las tarjetas no ha sido filtrada y si lo fue los datos ya no son relevantes, el hecho de que sus sistemas hayan sido hackeados refleja deficiencias en el sistema general.</p>
    <p>Aunque quisiera creer en el mensaje de tranquilidad que el BCR nos envía, me resulta difícil debido a los múltiples problemas que he tenido al usar su sistema mediante la página web. Lo cual me hace pensar que sí existen deficiencias que podrían ser aprovechadas por hackers.</p>
    <h1>Preguntas frecuentes</h1>
    <Question title="Mi información está segura en esta página">
      <p>Brindar datos personales o de sus tarjetas es algo que nunca debería hacer. Por eso en vez de solicitar el número, se solicita una clave que se genera a partir de dicho número mediante un algoritmo llamado scrypt.</p>
      <p>No hay forma de revertir o determinar el dato inicial partiendo de la clave generada, scrypt es uno de los algoritmos más seguros a la hora de guardar por ejemplo una contraseña en una base de datos.</p>
      <p>Se ha calculado la clave para cada tarjeta en apariencia robada, y se han almacenado dichas claves en una base de datos. La clave que envíe será comparada contra todas las claves existentes. De manera que su número de tarjeta solo se requiere para generar la clave, y poderla comparar con el listado de claves disponibles en la base de datos.</p>
    </Question>
    <Question title="Como puedo estar seguro que mi información no es almacenada en alguna parte">
      <p>Para garantizar que ningún dato confidencial se está capturando, la aplicación se ha hecho en modalidad open source (código abierto) de manera que cualquier persona puede revisar el código fuente, incluso los historiales de cambio si los hubieran.</p>
      <p>Esta aplicación se encuentra en github en un repositorio de código abierto, la misma es servida por la misma plataforma de github. Este servicio de servir una página web solo se habilita para proyectos de código abierto. Por lo tanto el mismo código del repositorio en github, es el que se ejecuta en este sitio.</p>
      <p>Si no confía en cuales datos se envían al servidor, siempre puede generar e introducir la clave asociada a su tarjeta con otra herramienta.</p>
    </Question>
    <Question title="Puedo generar la clave por mis propios medios y consultarla en esta aplicación">
      <p>¡Claro! En el sitio se ha dispuesto de una herramienta para generar la clave con el algoritmo scrypt por facilidad, pero la clave puede ser generada en otra parte. Introduce el dato requerido en el campo "Clave derivada"</p>
      <p>Para su facilidad se ha creado una herramienta que funciona offline, preconfigurada con los parámetros necesarios. Accede en este link</p>
      <p>Si utilizará otra herramienta, esta es la información que necesita.</p>
      <p>Salt: "c8m.qp+xv3*rhfUz" (sin las comillas).</p>
      <p>Algoritmo: scrypt, N: 128, r: 8, p: 1.</p>
      <p>El resultado se debe convertir a base64 ya que así se encuentran almacenadas las claves en la base de datos.</p>
      <p>Lo ideal es que compare con cualquier cadena de texto origen, de manera que coincidan los resultados generados de la herramienta utilizada y este sitio.</p>
    </Question>
    <Question title="Cuantas tarjetas filtradas se encuentran en la base de datos">
      <p>Esta base de datos se generó partiendo de dos archivos de transacciones, de aproximadamente 2gb cada uno. Se procesaron en total 12216470 transacciones. Se descartaron 2981 de ellas, y se encontró que existen 1260500 tarjetas distintas en el total de transacciones disponibles.</p>
    </Question>
    <Question title="Por qué la página tiene un diseño tan pobre y aburrido">
      <p>Este proyecto se realizó en una mañana de domingo a modo de ejercicio y por simple curiosidad para poder verificar con más facilidad las tarjetas de amistades y familiares.</p>
      <p>Soy un programador con discapacidad visual y aunque eso no es excusa para no conocer sobre temas atractivos de diseño, por ahora no está dentro de mis intereses profundizar en las metodologías para diseñar páginas atractivas.</p>
      <p>Pero siempre estoy dispuesto a aceptar sugerencias, puede abrir su issue o enviar su pull request con las mejoras que considere pertinentes.</p>
    </Question>
    <Question title="He encontrado un problema, tengo una sugerencia o quisiera hacer una mejora. Como puedo contribuir">
      <p>Si sabe usar git y ha usado la plataforma github, todo aporte es bienvenido en este repositorio.</p>
    </Question>

    <h1>Introduzca los datos. El campo marcado con un asterisco (*) es obligatorio.</h1>
    <label for="icard">Introduzca el número de tarjeta</label>
    <input id="icard" type="text" autocomplete="off" v-model.lazy.trim="card"/>
    <label for="iScrypted">Clave derivada *</label>
    <input id="iScrypted" type="text" required autocomplete="off" v-model="scryptedCard"/>
    <button :disabled="scryptedCard==''" @click="checkKey">Verificar clave derivada de la tarjeta</button>

<div v-show="this.checkedKey != ''">
  <h1>Resultados para la clave {{checkedKey}}</h1>
  <p>resultado {{result?"positivo":"negativo"}}. La clave proporcionada {{result?"":"no"}} se encuentra en la base de datos</p>
</div>
  </div>
</template>

<script>
import scrypt from 'scrypt-js/scrypt';
import Question from "@/components/Question.vue"
var db = require('./fbConfig.js')
const hashesCollection = db.hashesCollection;

const salt = stringToBinary('c8m.qp+xv3*rhfUz');

function replaceAll(s, search, w) {
  return s.split(search).join(w);
}

const replacements = [['.', '1'],
['$', '2'],
['#', '3'],
['/', '4'],
['[', '5'],
[']', '6']]

function escapeCharacters(s) {
  s= replaceAll(s, "%", "%0");
  for (let k of replacements) s = replaceAll(s, k[0], "%" +k[1]);
  return s;
}

function unescapeCharacters(s) {
  for (let k of replacements) s = replaceAll(s, "%" +k[1], k[0]);
  s= replaceAll(s, "%0", "%");
  return s;
}

function stringToBinary(s) {
  if (!s || s == "") return null;
  let i=s.length, r = new Int8Array(i);
  while(i--) r[i] = s.charCodeAt(i);
  return r;
}

export default {
  name: 'App',
  data() {
    return {card: "",
    scryptedCard: "",
    checkedKey: "",
    result: false,
    cachedKeys: {}}
  },
  methods: {
    checkKey(){
      if (this.scryptedCard == "") return;
      const escapedValue = escapeCharacters(this.scryptedCard);
      
      if (this.cachedKeys[escapedValue] !== undefined) {
        this.result = this.cachedKeys[escapedValue];
        this.checkedKey = unescapeCharacters(escapedValue);
      }
      else hashesCollection.child(escapedValue).once("value").then(s =>{
        this.cachedKeys[escapedValue]= s.val();
        this.result = s.val();
        this.checkedKey = unescapeCharacters(escapedValue);
      });
    }

  },
  watch: {
    card(val) {
      if(!val) {
        this.scryptedCard = "";
        return;
      }
      let tmp = stringToBinary(val);
      scrypt.scrypt(tmp,salt, 128, 8, 1, 64).then(key =>{
        this.scryptedCard= btoa(String.fromCharCode.apply(null, key));
      });
    }
  },
  components: {Question}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
