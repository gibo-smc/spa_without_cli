import { mount } from '@vue/test-utils'
import Calculation from '@/components/Calculation'

describe('Calculation', () => {
  const wrapper = mount(Calculation)
  it('計算ボタンが存在すること', () => {
    expect(wrapper.contains('button.exec')).toBeTruthy()
  })
})
