import ColorNumber from '../hw/ColorNumbers'
import Enzyme, { render } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'

Enzyme.configure({ adapter: new Adapter() })

describe('ColorNumber component', () => {
  it('should render ColorNumber component', () => {
    const view = render(<ColorNumber />)
    expect(view).toMatchSnapshot()
  })
})
