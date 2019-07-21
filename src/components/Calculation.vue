<template lang="pug">
div.calc
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
  p.comment
    | ボタンを押して下さい
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
