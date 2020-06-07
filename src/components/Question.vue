<template>
<div>
  <h2><a tabindex="-1" ref="hTitle" :aria-expanded="faqExpanded.toString()" @click="faqExpanded=!faqExpanded">Q: ¿{{title}}?</a></h2>
  <div v-if="faqExpanded" @click="close"><slot></slot></div>
</div>
</template>

<script>

export default {
  name: 'Question',
  data () {
    return {faqExpanded: false}
  },
  props: {title:String},
  methods: {
    close() {
      this.$refs.hTitle.focus();
      this.faqExpanded = false;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
