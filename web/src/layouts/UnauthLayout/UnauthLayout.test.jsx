import { render } from '@redwoodjs/testing/web'

import UnauthLayout from './UnauthLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UnauthLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnauthLayout />)
    }).not.toThrow()
  })
})
