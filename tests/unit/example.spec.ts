import { mount } from '@vue/test-utils'
import home from '@/views/home.vue'

describe('home.vue', () => {
  it('renders home view', () => {
    const wrapper = mount(home)
    expect(wrapper.text()).toMatch('home page')
  })
})
