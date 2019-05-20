<template>
<div id="app">
  <p class="msg">
    {{ msg }}
  </p>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'goobye Vue CLI!!'
    }
  }
}
</script>

<style>
.msg {
  color: red
}
</style>
