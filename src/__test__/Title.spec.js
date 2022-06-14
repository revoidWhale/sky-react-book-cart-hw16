import Title from '../hw/Title'
import Enzyme, { render } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'

Enzyme.configure({ adapter: new Adapter() })

describe('Title component', () => {
  it('should render Title component with props', () => {
    const view = render(<Title title="Test title" />)
    expect(view).toMatchSnapshot()
  })

  it('should render Title component without props', () => {
    const view = render(<Title />)
    expect(view).toMatchSnapshot()
  })
})
