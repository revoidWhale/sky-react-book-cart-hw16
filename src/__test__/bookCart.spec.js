import BookCart from '../components/BookCart'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'

Enzyme.configure({ adapter: new Adapter() })

describe('BookCart component', () => {
  it('should render BookCart component', () => {
    const view = shallow(<BookCart />)
    expect(view).toMatchSnapshot()
  })

  it('should contain <table>', () => {
    const component = shallow(<BookCart />)
    const wrapper = component.find('table')
    expect(wrapper.length).toBe(1)
  })

  it('should contain class .some', () => {
    const component = shallow(<BookCart />)
    const wrapper = component.find('.some')
    expect(wrapper.length).toBe(1)
  })
})
