import { mount } from '@vue/test-utils'
import Calculation from '@/components/Calculation'

describe('Calculation', () => {
  const wrapper = mount(Calculation)
  it('計算ボタンが存在すること', () => {
    expect(wrapper.contains('button.exec')).toBeTruthy()
  })
  it('数字を入力し計算ボタンを押下すると正しく計算されること', () => {
    wrapper.find('input.left').setValue(3)
    wrapper.find('input.right').setValue(4)
    wrapper.find('button.exec').trigger('click')
    expect(wrapper.find('span.answer').html())
      .toContain('<span class="answer">7</span>')
      expect(wrapper.html()).toMatchSnapshot()
  })
})
