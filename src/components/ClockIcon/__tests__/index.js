import React from 'react'
import { render } from '@testing-library/react'

import ClockIcon from '../index'

describe('<ClockIcon />', () => {
  it('should render a SVG', () => {
    const { container } = render(<ClockIcon />)
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
