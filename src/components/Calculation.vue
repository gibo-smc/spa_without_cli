<template lang="pug">
div
  p
    input.left(type="text" v-model.number="leftInput")
    span
      | +
    input.right(type="text" v-model.number="rightInput")
    span
      | =
    span.answer
      | {{ answer }}
  button.exec(@click="execCalc")
    | 足し算実行
</template>
<script>
import addition from '../modules/addition'
export default {
  name: 'Calculation',
  data () {
    return {
      leftInput: 0,
      rightInput: 0,
      answer: 0
    }
  },
  methods: {
    execCalc () {
      this.answer = addition(this.leftInput, this.rightInput)
    }
  }
}
</script>

<style lang="sass" scoped>
p
  display: flex
  input
    width: 30px
    margin-right: 14px
  span
    margin-right: 14px
</style>
