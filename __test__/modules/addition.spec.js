import addition from '@/modules/addition'

describe('addition', () => {
  it('足し算が成功すること', () => {
    expect(addition(1, 2)).toBe(3)
  })
})
