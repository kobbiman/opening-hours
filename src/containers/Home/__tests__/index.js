import React from 'react'
import { render } from '@testing-library/react'
import { ThemedComponent, mockRawOpeningHours, mockFormattedOpeningHours } from '__mocks__/helpers'
import { formatOpeningHours } from '@lib/helpers'

import HomePage from '../index'

export const mockInitialProps = overrides => {
  const parsedOpeningHours = formatOpeningHours(mockRawOpeningHours)
  return {
    openingHours: parsedOpeningHours,
    ...overrides,
  }
}

const mockGetInitialProps = jest.fn(mockInitialProps)

describe('<HomePage />', () => {
  it('should render as expected with passed component and props', async () => {
    HomePage.getInitialProps = mockGetInitialProps
    const props = await HomePage.getInitialProps()

    const {
      container: { firstChild },
    } = render(
      <ThemedComponent>
        <HomePage {...props} />
      </ThemedComponent>,
    )

    expect(firstChild).toMatchSnapshot()
    expect(props).toEqual({
      openingHours: mockFormattedOpeningHours,
    })
    expect(HomePage.getInitialProps).toHaveBeenCalledTimes(1)
  })
})
