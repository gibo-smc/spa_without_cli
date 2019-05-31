<template>
<div id="app">
  <p class="msg">
    {{ msg }}
  </p>
  <button @click="changMsg">
    change message
  </button>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'goobye Vue CLI!!'
    }
  },
  methods: {
    changMsg () {
      const newMsg = 'ES6で書いてみた'
      this.msg = newMsg
    }
  }
}
</script>

<style>
.msg {
  color: red
}
</style>
