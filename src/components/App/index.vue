<template lang="pug">
#app
  h1
    | 非VueCLI製 SPA w/pug...
  Calculation
</template>

<script>
import Calculation from '../Calculation'
export default {
  name: 'App',
  components: {
    Calculation
  }
}
</script>

<style lang="sass" src="./sass/index.sass">
</style>