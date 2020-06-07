<template>
  <div id="app">
    <div id="welcome">
      <h2>Bienvenido al sistema de verificación de tarjetas filtradas tras el supuesto hackeo al Banco de Costa Rica</h2>
      <v-divider class="my-3"></v-divider>
      <br />
      <p>El objetivo de esta página es que las personas puedan verificar si sus tarjetas se encuentran en el listado de tarjetas filtradas del BCR, de forma fácil, fiable y segura.</p>
      <br />
      <p>Aunque existen otros sitios que ofrecen este servicio, generan muchos falsos positivos debido a que no se comprueba el número completo de una tarjeta. Una de mis tarjetas que no fue filtrada, generó más de 50 coincidencias.</p>
      <br />
      <p>He ideado un método para poder verificar si un número de tarjeta se encuentra en el listado de tarjetas filtradas, sin necesidad que un número de tarjeta deba ser enviado al servidor que contiene la base de datos.</p>
      <br />
      <p>Aunque el banco de Costa Rica asegura que la información de las tarjetas no ha sido filtrada y si lo fue los datos ya no son relevantes, el hecho de que sus sistemas hayan sido hackeados refleja deficiencias en el sistema general.</p>
      <p>Aunque quisiera creer en el mensaje de tranquilidad que el BCR nos envía, me resulta difícil debido a los múltiples problemas que he tenido al usar su sistema mediante la página web. Lo cual me hace pensar que sí existen deficiencias que podrían ser aprovechadas por hackers.</p>
    </div>

    <div id="questions">
      <h2>Preguntas frecuentes</h2>
      <v-divider class="my-3"></v-divider>
      <br />
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header>¿Mi información está segura en esta página?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Brindar datos personales o de sus tarjetas es algo que nunca debería hacer. Por eso en vez de solicitar el número, se solicita una clave que se genera a partir de dicho número mediante un algoritmo llamado scrypt.</p>
              <br />
              <p>No hay forma de revertir o determinar el dato inicial partiendo de la clave generada, scrypt es uno de los algoritmos más seguros a la hora de guardar por ejemplo una contraseña en una base de datos.</p>
              <br />
              <p>Se ha calculado la clave para cada tarjeta en apariencia robada, y se han almacenado dichas claves en una base de datos. La clave que envíe será comparada contra todas las claves existentes. De manera que su número de tarjeta solo se requiere para generar la clave, y poderla comparar con el listado de claves disponibles en la base de datos.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>¿Como puedo estar seguro que mi información no es almacenada en alguna parte?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Para garantizar que ningún dato confidencial se está capturando, la aplicación se ha hecho en modalidad open source (código abierto) de manera que cualquier persona puede revisar el código fuente, incluso los historiales de cambio si los hubieran.</p>
              <br />
              <p>Esta aplicación se encuentra en github en un repositorio de código abierto, la misma es servida por la misma plataforma de github. Este servicio de servir una página web solo se habilita para proyectos de código abierto. Por lo tanto el mismo código del repositorio en github, es el que se ejecuta en este sitio.</p>
              <br />
              <p>Si no confía en cuales datos se envían al servidor, siempre puede generar e introducir la clave asociada a su tarjeta con otra herramienta.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>¿Puedo generar la clave por mis propios medios y consultarla en esta aplicación?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>¡Claro! En el sitio se ha dispuesto de una herramienta para generar la clave con el algoritmo scrypt por facilidad, pero la clave puede ser generada en otra parte. Introduce el dato requerido en el campo "Clave derivada"</p>
              <br />
              <p>
                Para su facilidad se ha creado una herramienta que funciona offline, preconfigurada con los parámetros necesarios.
                <a
                  target="_blank"
                  href="https://htmlpreview.github.io/?https://github.com/davidacm/bcrCardVerifier/blob/master/scryptTool.html"
                >accede en este link</a>
              </p>

              <br />
              <p>Si utilizará otra herramienta, esta es la información que necesita.</p>
              <br />
              <p>Salt: "c8m.qp+xv3*rhfUz" (sin las comillas).</p>
              <br />
              <p>Algoritmo: scrypt, N: 128, r: 8, p: 1.</p>
              <br />
              <p>El resultado se debe convertir a base64 ya que así se encuentran almacenadas las claves en la base de datos.</p>
              <p>Lo ideal es que compare con cualquier cadena de texto origen, de manera que coincidan los resultados generados de la herramienta utilizada y este sitio.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>¿Cuantas tarjetas filtradas se encuentran en la base de datos?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Esta base de datos se generó partiendo de dos archivos de transacciones, de aproximadamente 2gb cada uno. Se procesaron en total 12216470 transacciones. Se descartaron 2981 de ellas, y se encontró que existen 1260500 tarjetas distintas en el total de transacciones disponibles.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>He encontrado un problema, tengo una sugerencia o quisiera hacer una mejora. ¿Como puedo contribuir?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Si sabe usar git y ha usado la plataforma github, todo aporte es bienvenido en este repositorio.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>

    <div id="form">
      <h2>Introduzca los datos.</h2>
      <h4>El campo marcado con un asterisco (*) es obligatorio.</h4>
      <br />
      <v-divider class="my-3"></v-divider>
      <form>
        <v-text-field
          v-model.lazy.trim="card"
          error-messages="*"
          label="Número de tarjeta"
          required
        ></v-text-field>
        <v-text-field v-model="scryptedCard" required autocomplete="off" label="Clave derivada"></v-text-field>
        <v-btn
          color="red lighten-2"
          :disabled="scryptedCard==''"
          @click="checkKey"
        >Verificar clave derivada de la tarjeta</v-btn>
      </form>
    </div>

    <div id="result" v-show="this.checkedKey != ''">
      <h3>Resultados para la clave:</h3>
      <p>{{checkedKey}}</p>
      <br />
      <p>Resultado {{result?"positivo":"negativo"}}. La clave proporcionada {{result?"":"no"}} se encuentra en la base de datos</p>
    </div>

    <v-card height="100">
      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>DCM</strong>
        </v-col>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import scrypt from "scrypt-js/scrypt";
var db = require("./fbConfig.js");
const hashesCollection = db.hashesCollection;

const salt = stringToBinary("c8m.qp+xv3*rhfUz");

function replaceAll(s, search, w) {
  return s.split(search).join(w);
}

const replacements = [
  [".", "1"],
  ["$", "2"],
  ["#", "3"],
  ["/", "4"],
  ["[", "5"],
  ["]", "6"]
];

function escapeCharacters(s) {
  s = replaceAll(s, "%", "%0");
  for (let k of replacements) s = replaceAll(s, k[0], "%" + k[1]);
  return s;
}

function unescapeCharacters(s) {
  for (let k of replacements) s = replaceAll(s, "%" + k[1], k[0]);
  s = replaceAll(s, "%0", "%");
  return s;
}

function stringToBinary(s) {
  if (!s || s == "") return null;
  let i = s.length,
    r = new Int8Array(i);
  while (i--) r[i] = s.charCodeAt(i);
  return r;
}

export default {
  name: "App",
  data() {
    return {
      card: "",
      scryptedCard: "",
      checkedKey: "",
      result: false,
      cachedKeys: {},
    };
  },
  methods: {
    checkKey() {
      if (this.scryptedCard == "") return;
      const escapedValue = escapeCharacters(this.scryptedCard);

      if (this.cachedKeys[escapedValue] !== undefined) {
        this.result = this.cachedKeys[escapedValue];
        this.checkedKey = unescapeCharacters(escapedValue);
      } else
        hashesCollection
          .child(escapedValue)
          .once("value")
          .then(s => {
            this.cachedKeys[escapedValue] = s.val();
            this.result = s.val();
            this.checkedKey = unescapeCharacters(escapedValue);
          });
    }
  },
  watch: {
    card(val) {
      if (!val) {
        this.scryptedCard = "";
        return;
      }
      let tmp = stringToBinary(val);
      scrypt.scrypt(tmp, salt, 128, 8, 1, 64).then(key => {
        this.scryptedCard = btoa(String.fromCharCode.apply(null, key));
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
}

#questions {
  margin-top: 20px;
}

#form {
  margin-top: 20px;
  margin-bottom: 20px;
}

#result {
  margin-bottom: 20px;
}
</style>

