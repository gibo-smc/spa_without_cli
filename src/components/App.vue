<template lang="pug">
#app
  h1
    | 非VueCLI製 SPA w/pug
  p.msg
    | {{ msg }}
  button(@click="changeMsg")
    | change message
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
    changeMsg () {
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
